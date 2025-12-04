import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { tokens } from '../../styles/index.js';

/**
 * A slider input for selecting a value from a range.
 * 
 * @element shadcn-slider
 * 
 * @fires slider-change - Fired when the slider value changes
 * 
 * @cssprop --slider-track-bg - Track background color
 * @cssprop --slider-range-bg - Range background color
 * @cssprop --slider-thumb-bg - Thumb background color
 */
@customElement('shadcn-slider')
export class Slider extends LitElement {
    static styles = [
        tokens,
        css`
      :host {
        display: block;
      }

      .slider {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        user-select: none;
        touch-action: none;
      }

      .slider__track {
        position: relative;
        height: 0.375rem;
        width: 100%;
        background-color: var(--slider-track-bg, var(--secondary));
        border-radius: var(--radius-full);
        cursor: pointer;
      }

      .slider__range {
        position: absolute;
        height: 100%;
        background-color: var(--slider-range-bg, var(--primary));
        border-radius: var(--radius-full);
      }

      .slider__thumb {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        background-color: var(--slider-thumb-bg, var(--background));
        border: 2px solid var(--primary);
        border-radius: var(--radius-full);
        cursor: grab;
        transition: box-shadow var(--transition-fast);
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .slider__thumb:hover {
        box-shadow: 0 0 0 4px rgba(var(--primary-rgb, 255 255 255) / 0.1);
      }

      .slider__thumb:focus-visible {
        outline: 2px solid var(--ring);
        outline-offset: 2px;
      }

      .slider__thumb:active {
        cursor: grabbing;
        box-shadow: 0 0 0 6px rgba(var(--primary-rgb, 255 255 255) / 0.15);
      }

      .slider--disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .slider--disabled .slider__track,
      .slider--disabled .slider__thumb {
        cursor: not-allowed;
      }

      .slider__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }
    `,
    ];

    @query('.slider__track') trackElement!: HTMLDivElement;
    @query('.slider__thumb') thumbElement!: HTMLDivElement;

    /**
     * Current value
     */
    @property({ type: Number }) value = 50;

    /**
     * Minimum value
     */
    @property({ type: Number }) min = 0;

    /**
     * Maximum value
     */
    @property({ type: Number }) max = 100;

    /**
     * Step increment
     */
    @property({ type: Number }) step = 1;

    /**
     * Whether the slider is disabled
     */
    @property({ type: Boolean }) disabled = false;

    /**
     * Name attribute
     */
    @property({ type: String }) name = '';

    @state() private _isDragging = false;

    render() {
        const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;

        return html`
      <div
        part="slider"
        class="slider ${this.disabled ? 'slider--disabled' : ''}"
        @pointerdown=${this._handlePointerDown}
      >
        <div class="slider__track">
          <div class="slider__range" style="width: ${percentage}%"></div>
          <div
            class="slider__thumb"
            style="left: ${percentage}%"
            tabindex=${this.disabled ? '-1' : '0'}
            role="slider"
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${this.value}
            aria-disabled=${this.disabled}
            @keydown=${this._handleKeyDown}
          ></div>
        </div>
        <input
          class="slider__input"
          type="range"
          .value=${String(this.value)}
          min=${this.min}
          max=${this.max}
          step=${this.step}
          ?disabled=${this.disabled}
          name=${this.name}
          aria-hidden="true"
          tabindex="-1"
        />
      </div>
    `;
    }

    private _handlePointerDown(e: PointerEvent) {
        if (this.disabled) return;

        this._isDragging = true;
        this.thumbElement.setPointerCapture(e.pointerId);

        this._updateValueFromPointer(e);

        const handlePointerMove = (e: PointerEvent) => {
            if (!this._isDragging) return;
            this._updateValueFromPointer(e);
        };

        const handlePointerUp = () => {
            this._isDragging = false;
            document.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('pointerup', handlePointerUp);
        };

        document.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('pointerup', handlePointerUp);
    }

    private _updateValueFromPointer(e: PointerEvent) {
        const rect = this.trackElement.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const rawValue = this.min + percentage * (this.max - this.min);
        const steppedValue = Math.round(rawValue / this.step) * this.step;
        const clampedValue = Math.max(this.min, Math.min(this.max, steppedValue));

        if (clampedValue !== this.value) {
            this.value = clampedValue;
            this._dispatchChange();
        }
    }

    private _handleKeyDown(e: KeyboardEvent) {
        if (this.disabled) return;

        let newValue = this.value;
        const largeStep = this.step * 10;

        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                e.preventDefault();
                newValue = Math.min(this.max, this.value + this.step);
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                e.preventDefault();
                newValue = Math.max(this.min, this.value - this.step);
                break;
            case 'PageUp':
                e.preventDefault();
                newValue = Math.min(this.max, this.value + largeStep);
                break;
            case 'PageDown':
                e.preventDefault();
                newValue = Math.max(this.min, this.value - largeStep);
                break;
            case 'Home':
                e.preventDefault();
                newValue = this.min;
                break;
            case 'End':
                e.preventDefault();
                newValue = this.max;
                break;
        }

        if (newValue !== this.value) {
            this.value = newValue;
            this._dispatchChange();
        }
    }

    private _dispatchChange() {
        this.dispatchEvent(
            new CustomEvent('slider-change', {
                bubbles: true,
                composed: true,
                detail: { value: this.value },
            })
        );
    }

    /**
     * Focus the slider
     */
    focus() {
        this.thumbElement?.focus();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'shadcn-slider': Slider;
    }
}
