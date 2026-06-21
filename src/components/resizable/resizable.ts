import { LitElement, css, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

export type ResizableOrientation = 'horizontal' | 'vertical';

export interface ResizableChangeDetail {
    sizes: number[];
}

/**
 * Coordinates a set of resizable panels and handles.
 *
 * @element shadcn-resizable-panel-group
 *
 * @slot - Resizable panels separated by resizable handles.
 *
 * @fires resizable-change - Fired continuously while the panel layout changes.
 * @fires resizable-commit - Fired when a pointer or keyboard resize is committed.
 *
 * @cssprop --resizable-handle-color - Handle divider color.
 * @cssprop --resizable-handle-size - Visible handle divider thickness.
 */
@customElement('shadcn-resizable-panel-group')
export class ResizablePanelGroup extends LitElement {
    static styles = [
        tokensBase,
        css`
            :host {
                display: flex;
                width: 100%;
                height: 100%;
                min-width: 0;
                min-height: 0;
                overflow: hidden;
            }

            :host([orientation='vertical']) {
                flex-direction: column;
            }

            :host(:not([orientation='vertical'])) {
                flex-direction: row;
            }

            slot {
                display: contents;
            }
        `,
    ];

    @queryAssignedElements({ selector: 'shadcn-resizable-panel' })
    private panelElements!: ResizablePanel[];

    @queryAssignedElements({ selector: 'shadcn-resizable-handle' })
    private handleElements!: ResizableHandle[];

    /** Direction in which the panels are arranged. */
    @property({ reflect: true }) orientation: ResizableOrientation = 'horizontal';

    private activeHandle?: ResizableHandle;
    private startPosition = 0;
    private startSizes: [number, number] = [0, 0];
    private abortController?: AbortController;

    render() {
        return html`<slot @slotchange=${this.initializeLayout}></slot>`;
    }

    updated(changed: Map<PropertyKey, unknown>) {
        if (changed.has('orientation')) this.updateHandles();
    }

    disconnectedCallback() {
        this.stopPointerResize(false);
        super.disconnectedCallback();
    }

    /** Returns the current panel sizes as percentages. */
    getLayout(): number[] {
        return this.panelElements.map((panel) => panel.size);
    }

    /** Applies panel sizes, normalizing them to a total of 100 percent. */
    setLayout(sizes: number[]) {
        const panels = this.panelElements;
        if (sizes.length !== panels.length || sizes.some((size) => !Number.isFinite(size) || size < 0)) {
            throw new TypeError(`Expected ${panels.length} finite, non-negative panel sizes.`);
        }

        const total = sizes.reduce((sum, size) => sum + size, 0);
        if (total <= 0) {
            throw new TypeError('Panel sizes must have a positive total.');
        }

        panels.forEach((panel, index) => {
            panel.size = (sizes[index] / total) * 100;
        });
        this.updateHandles();
        this.dispatchLayoutEvent('resizable-change');
    }

    /** @internal */
    beginPointerResize(handle: ResizableHandle, event: PointerEvent) {
        if (handle.disabled || event.button !== 0) return;

        const adjacent = this.getAdjacentPanels(handle);
        if (!adjacent) return;

        event.preventDefault();
        handle.focus();
        handle.setPointerCapture(event.pointerId);
        this.activeHandle = handle;
        this.startPosition = this.orientation === 'horizontal' ? event.clientX : event.clientY;
        this.startSizes = [adjacent[0].size, adjacent[1].size];
        handle.active = true;

        this.abortController?.abort();
        this.abortController = new AbortController();
        const options = { signal: this.abortController.signal };
        window.addEventListener('pointermove', this.handlePointerMove, options);
        window.addEventListener('pointerup', this.handlePointerUp, options);
        window.addEventListener('pointercancel', this.handlePointerUp, options);
    }

    /** @internal */
    resizeWithKeyboard(handle: ResizableHandle, key: string, largeStep: boolean): boolean {
        const adjacent = this.getAdjacentPanels(handle);
        if (!adjacent || handle.disabled) return false;

        const [before, after] = adjacent;
        const pairTotal = before.size + after.size;
        const [lower, upper] = this.getBounds(before, after, pairTotal);
        const direction = this.orientation === 'horizontal' && getComputedStyle(this).direction === 'rtl' ? -1 : 1;
        const step = (largeStep ? 10 : 1) * direction;
        let nextSize = before.size;

        if (key === 'Home') nextSize = lower;
        else if (key === 'End') nextSize = upper;
        else if (key === 'ArrowLeft' && this.orientation === 'horizontal') nextSize -= step;
        else if (key === 'ArrowRight' && this.orientation === 'horizontal') nextSize += step;
        else if (key === 'ArrowUp' && this.orientation === 'vertical') nextSize -= 1 * (largeStep ? 10 : 1);
        else if (key === 'ArrowDown' && this.orientation === 'vertical') nextSize += 1 * (largeStep ? 10 : 1);
        else return false;

        this.applyPairSizes(before, after, this.clamp(nextSize, lower, upper), pairTotal);
        this.dispatchLayoutEvent('resizable-change');
        this.dispatchLayoutEvent('resizable-commit');
        return true;
    }

    private initializeLayout() {
        const panels = this.panelElements;
        if (panels.length === 0) return;

        const specifiedTotal = panels.reduce((sum, panel) => sum + Math.max(0, panel.defaultSize), 0);
        const unspecified = panels.filter((panel) => panel.defaultSize <= 0).length;
        const fallback = unspecified > 0 ? Math.max(0, 100 - specifiedTotal) / unspecified : 0;
        const initial = panels.map((panel) => panel.defaultSize > 0 ? panel.defaultSize : fallback);
        const total = initial.reduce((sum, size) => sum + size, 0) || panels.length;

        panels.forEach((panel, index) => {
            panel.size = (initial[index] || 1) / total * 100;
        });
        this.updateHandles();
    }

    private handlePointerMove = (event: PointerEvent) => {
        if (!this.activeHandle) return;
        const adjacent = this.getAdjacentPanels(this.activeHandle);
        if (!adjacent) return;

        const [before, after] = adjacent;
        const rect = this.getBoundingClientRect();
        const availableSize = this.orientation === 'horizontal' ? rect.width : rect.height;
        if (availableSize <= 0) return;

        const position = this.orientation === 'horizontal' ? event.clientX : event.clientY;
        const rtlMultiplier = this.orientation === 'horizontal' && getComputedStyle(this).direction === 'rtl' ? -1 : 1;
        const delta = ((position - this.startPosition) / availableSize) * 100 * rtlMultiplier;
        const pairTotal = this.startSizes[0] + this.startSizes[1];
        const [lower, upper] = this.getBounds(before, after, pairTotal);
        this.applyPairSizes(before, after, this.clamp(this.startSizes[0] + delta, lower, upper), pairTotal);
        this.dispatchLayoutEvent('resizable-change');
    };

    private handlePointerUp = () => this.stopPointerResize(true);

    private stopPointerResize(commit: boolean) {
        if (!this.activeHandle) return;
        this.activeHandle.active = false;
        this.activeHandle = undefined;
        this.abortController?.abort();
        this.abortController = undefined;
        if (commit) this.dispatchLayoutEvent('resizable-commit');
    }

    private getAdjacentPanels(handle: ResizableHandle): [ResizablePanel, ResizablePanel] | undefined {
        const children = Array.from(this.children);
        const handleIndex = children.indexOf(handle);
        const before = children.slice(0, handleIndex).reverse().find((child): child is ResizablePanel => child instanceof ResizablePanel);
        const after = children.slice(handleIndex + 1).find((child): child is ResizablePanel => child instanceof ResizablePanel);
        return before && after ? [before, after] : undefined;
    }

    private getBounds(before: ResizablePanel, after: ResizablePanel, total: number): [number, number] {
        return [
            Math.max(before.minSize, total - after.maxSize),
            Math.min(before.maxSize, total - after.minSize),
        ];
    }

    private applyPairSizes(before: ResizablePanel, after: ResizablePanel, beforeSize: number, total: number) {
        before.size = beforeSize;
        after.size = total - beforeSize;
        this.updateHandles();
    }

    private updateHandles() {
        this.handleElements.forEach((handle) => {
            handle.orientation = this.orientation === 'horizontal' ? 'vertical' : 'horizontal';
            const adjacent = this.getAdjacentPanels(handle);
            if (!adjacent) return;
            const [before, after] = adjacent;
            const pairTotal = before.size + after.size;
            const [lower, upper] = this.getBounds(before, after, pairTotal);
            handle.valueMin = lower;
            handle.valueMax = upper;
            handle.valueNow = before.size;
        });
    }

    private dispatchLayoutEvent(name: 'resizable-change' | 'resizable-commit') {
        this.dispatchEvent(new CustomEvent<ResizableChangeDetail>(name, {
            bubbles: true,
            composed: true,
            detail: { sizes: this.getLayout() },
        }));
    }

    private clamp(value: number, min: number, max: number) {
        return Math.min(max, Math.max(min, value));
    }
}

/**
 * A content region within a resizable panel group.
 *
 * @element shadcn-resizable-panel
 *
 * @slot - Panel content.
 * @csspart panel - The panel content container.
 */
@customElement('shadcn-resizable-panel')
export class ResizablePanel extends LitElement {
    static styles = css`
        :host {
            display: block;
            flex: var(--resizable-panel-size, 1) 1 0;
            min-width: 0;
            min-height: 0;
            overflow: hidden;
        }

        .panel {
            width: 100%;
            height: 100%;
        }
    `;

    /** Initial panel size as a percentage. Values at or below zero share remaining space. */
    @property({ type: Number, attribute: 'default-size' }) defaultSize = 0;

    /** Minimum panel size as a percentage. */
    @property({ type: Number, attribute: 'min-size' }) minSize = 10;

    /** Maximum panel size as a percentage. */
    @property({ type: Number, attribute: 'max-size' }) maxSize = 100;

    private _size = 0;

    /** Current panel size as a percentage. Prefer group.setLayout() for programmatic updates. */
    get size() {
        return this._size;
    }

    set size(value: number) {
        const next = Number.isFinite(value) ? Math.max(0, value) : 0;
        if (next === this._size) return;
        this._size = next;
        this.style.setProperty('--resizable-panel-size', String(next));
    }

    render() {
        return html`<div part="panel" class="panel"><slot></slot></div>`;
    }
}

/**
 * An accessible drag and keyboard handle between two resizable panels.
 *
 * @element shadcn-resizable-handle
 *
 * @csspart handle - The interactive separator.
 * @csspart grip - The optional visible grip.
 *
 * @cssprop --resizable-handle-color - Handle divider color.
 * @cssprop --resizable-handle-size - Visible handle divider thickness.
 */
@customElement('shadcn-resizable-handle')
export class ResizableHandle extends LitElement {
    static styles = [
        tokensBase,
        css`
            :host {
                position: relative;
                display: flex;
                flex: 0 0 var(--resizable-handle-size, 1px);
                align-items: center;
                justify-content: center;
                background: var(--resizable-handle-color, var(--border));
                outline: none;
                touch-action: none;
                user-select: none;
                z-index: 1;
            }

            :host([orientation='vertical']) {
                width: var(--resizable-handle-size, 1px);
                height: 100%;
                cursor: col-resize;
            }

            :host([orientation='horizontal']) {
                width: 100%;
                height: var(--resizable-handle-size, 1px);
                cursor: row-resize;
            }

            :host::after {
                content: '';
                position: absolute;
            }

            :host([orientation='vertical'])::after {
                inset: 0 -0.25rem;
            }

            :host([orientation='horizontal'])::after {
                inset: -0.25rem 0;
            }

            :host(:focus-visible) {
                box-shadow: 0 0 0 1px var(--ring), 0 0 0 3px var(--background);
            }

            :host([disabled]) {
                cursor: not-allowed;
                opacity: 0.5;
            }

            .grip {
                position: relative;
                z-index: 2;
                display: none;
                flex-shrink: 0;
                width: 0.75rem;
                height: 1rem;
                border: 1px solid var(--border);
                border-radius: var(--radius-sm);
                background: var(--background);
                align-items: center;
                justify-content: center;
                color: var(--muted-foreground);
            }

            :host([with-handle]) .grip {
                display: flex;
            }

            :host([orientation='horizontal']) .grip {
                transform: rotate(90deg);
            }

            .dots {
                width: 2px;
                height: 2px;
                border-radius: 9999px;
                background: currentColor;
                box-shadow: 0 -3px currentColor, 0 3px currentColor;
            }
        `,
    ];

    /** Shows the shadcn-style grip affordance. */
    @property({ type: Boolean, reflect: true, attribute: 'with-handle' }) withHandle = false;

    /** Prevents pointer and keyboard resizing. */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /** @internal */
    @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';

    /** @internal */
    @property({ type: Boolean, reflect: true }) active = false;

    /** @internal */
    @property({ type: Number, attribute: false }) valueMin = 0;

    /** @internal */
    @property({ type: Number, attribute: false }) valueMax = 100;

    /** @internal */
    @property({ type: Number, attribute: false }) valueNow = 50;

    render() {
        return html`
            <div part="handle">
                <div part="grip" class="grip" aria-hidden="true"><span class="dots"></span></div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'separator');
        this.tabIndex = this.disabled ? -1 : 0;
        this.addEventListener('pointerdown', this.handlePointerDown);
        this.addEventListener('keydown', this.handleKeyDown);
    }

    disconnectedCallback() {
        this.removeEventListener('pointerdown', this.handlePointerDown);
        this.removeEventListener('keydown', this.handleKeyDown);
        super.disconnectedCallback();
    }

    updated(changed: Map<PropertyKey, unknown>) {
        if (changed.has('disabled')) this.tabIndex = this.disabled ? -1 : 0;
        if (changed.has('disabled')) this.setAttribute('aria-disabled', String(this.disabled));
        if (changed.has('orientation')) this.setAttribute('aria-orientation', this.orientation);
        if (changed.has('valueMin')) this.setAttribute('aria-valuemin', String(Math.round(this.valueMin)));
        if (changed.has('valueMax')) this.setAttribute('aria-valuemax', String(Math.round(this.valueMax)));
        if (changed.has('valueNow')) this.setAttribute('aria-valuenow', String(Math.round(this.valueNow)));
    }

    private handlePointerDown = (event: PointerEvent) => {
        this.group?.beginPointerResize(this, event);
    };

    private handleKeyDown = (event: KeyboardEvent) => {
        if (this.group?.resizeWithKeyboard(this, event.key, event.shiftKey)) {
            event.preventDefault();
        }
    };

    private get group() {
        return this.closest('shadcn-resizable-panel-group') as ResizablePanelGroup | null;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-resizable-panel-group': ResizablePanelGroup;
        'shadcn-resizable-panel': ResizablePanel;
        'shadcn-resizable-handle': ResizableHandle;
    }
}
