import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import type { PropertyValues } from 'lit';
import { tokensBase } from '../../styles/index.js';

export type CarouselOrientation = 'horizontal' | 'vertical';

export interface CarouselChangeDetail {
  index: number;
  count: number;
}

/**
 * Coordinates an accessible, scroll-snapping carousel.
 *
 * @element shadcn-carousel
 * @slot - Carousel content and navigation controls.
 * @fires carousel-change - Fired when the active slide changes.
 * @csspart carousel - Carousel container.
 */
@customElement('shadcn-carousel')
export class Carousel extends LitElement {
  static styles = [tokensBase, css`
    :host { display: block; position: relative; }
    .carousel { position: relative; }
  `];

  /** Active slide index. */
  @property({ type: Number, reflect: true }) index = 0;
  /** Scrolling axis. */
  @property({ type: String, reflect: true }) orientation: CarouselOrientation = 'horizontal';
  /** Whether navigation wraps between the first and last slides. */
  @property({ type: Boolean, reflect: true }) loop = false;
  /** Accessible name for the carousel region. */
  @property({ type: String }) label = 'Carousel';

  @state() private _count = 0;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('carousel-select', this._handleSelect as EventListener);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback() {
    this.removeEventListener('carousel-select', this._handleSelect as EventListener);
    this.removeEventListener('keydown', this._handleKeyDown);
    super.disconnectedCallback();
  }

  protected render() {
    return html`
      <div
        part="carousel"
        class="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label=${this.label}
      >
        <slot @slotchange=${this._sync}></slot>
      </div>
    `;
  }

  protected firstUpdated() {
    this._sync();
  }

  protected updated(changed: PropertyValues<this>) {
    if (changed.has('orientation') || changed.has('loop')) this._sync();
    if (changed.has('index')) {
      const clamped = this._clampIndex(this.index);
      if (clamped !== this.index) {
        this.index = clamped;
        return;
      }
      this._content()?.scrollToSlide(this.index, 'auto');
      this._syncControls();
    }
  }

  /** Move to the previous slide. */
  scrollPrevious() {
    if (this._count < 2) return;
    const next = this.index - 1;
    if (next >= 0) this.scrollToSlide(next);
    else if (this.loop) this.scrollToSlide(this._count - 1);
  }

  /** Move to the next slide. */
  scrollNext() {
    if (this._count < 2) return;
    const next = this.index + 1;
    if (next < this._count) this.scrollToSlide(next);
    else if (this.loop) this.scrollToSlide(0);
  }

  /** Move to a slide by its zero-based index. */
  scrollToSlide(index: number) {
    const next = this._clampIndex(index);
    this._content()?.scrollToSlide(next, 'smooth');
  }

  private _content() {
    return this.querySelector<CarouselContent>('shadcn-carousel-content');
  }

  private _clampIndex(index: number) {
    if (this._count === 0) return 0;
    return Math.max(0, Math.min(this._count - 1, Math.trunc(Number.isFinite(index) ? index : 0)));
  }

  private _handleSelect = (event: CustomEvent<CarouselChangeDetail>) => {
    if (event.target !== this._content()) return;
    const previous = this.index;
    this._count = event.detail.count;
    this.index = this._clampIndex(event.detail.index);
    this._syncControls();
    if (this.index !== previous) {
      this.dispatchEvent(new CustomEvent<CarouselChangeDetail>('carousel-change', {
        bubbles: true,
        composed: true,
        detail: { index: this.index, count: this._count },
      }));
    }
  };

  private _handleKeyDown = (event: KeyboardEvent) => {
    const previousKey = this.orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    const nextKey = this.orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
    if (event.key === previousKey) {
      event.preventDefault();
      this.scrollPrevious();
    } else if (event.key === nextKey) {
      event.preventDefault();
      this.scrollNext();
    }
  };

  private _sync = () => {
    const content = this._content();
    if (content) {
      content.orientation = this.orientation;
      content.loop = this.loop;
      this._count = content.itemCount;
    } else {
      this._count = 0;
    }
    this.index = this._clampIndex(this.index);
    this._syncControls();
  };

  private _syncControls() {
    const canMove = this._count > 1;
    const previousDisabled = !canMove || (!this.loop && this.index === 0);
    const nextDisabled = !canMove || (!this.loop && this.index === this._count - 1);
    this.querySelectorAll<CarouselPrevious>('shadcn-carousel-previous').forEach((control) => {
      control.orientation = this.orientation;
      control.disabled = previousDisabled;
    });
    this.querySelectorAll<CarouselNext>('shadcn-carousel-next').forEach((control) => {
      control.orientation = this.orientation;
      control.disabled = nextDisabled;
    });
  }
}

/**
 * Provides the scrollable carousel viewport.
 *
 * @element shadcn-carousel-content
 * @slot - Carousel item elements.
 * @csspart viewport - Scrollable viewport.
 * @csspart content - Slide track.
 * @cssprop --carousel-gap - Space between slides.
 * @cssprop --carousel-height - Viewport height in vertical orientation.
 * @cssprop --carousel-item-size - Width or height of each slide.
 */
@customElement('shadcn-carousel-content')
export class CarouselContent extends LitElement {
  static styles = [tokensBase, css`
    :host { display: block; overflow: hidden; }
    .viewport {
      overflow: auto;
      overscroll-behavior: contain;
      scrollbar-width: none;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      touch-action: pan-y pinch-zoom;
    }
    .viewport::-webkit-scrollbar { display: none; }
    .content {
      display: flex;
      margin-inline-start: calc(var(--carousel-gap, var(--spacing-4)) * -1);
    }
    ::slotted(shadcn-carousel-item) {
      box-sizing: border-box;
      flex: 0 0 var(--carousel-item-size, 100%);
      min-width: 0;
      padding-inline-start: var(--carousel-gap, var(--spacing-4));
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
    .viewport.vertical {
      height: var(--carousel-height, 24rem);
      scroll-snap-type: y mandatory;
      touch-action: pan-x pinch-zoom;
    }
    .content.vertical {
      flex-direction: column;
      height: 100%;
      margin-block-start: calc(var(--carousel-gap, var(--spacing-4)) * -1);
      margin-inline-start: 0;
    }
    slot.content.vertical::slotted(shadcn-carousel-item) {
      min-height: 0;
      padding-block-start: var(--carousel-gap, var(--spacing-4));
      padding-inline-start: 0;
    }
    @media (prefers-reduced-motion: reduce) {
      .viewport { scroll-behavior: auto; }
    }
  `];

  /** Scrolling axis, synchronized by the parent carousel. */
  @property({ type: String, reflect: true }) orientation: CarouselOrientation = 'horizontal';
  /** Whether parent navigation wraps, synchronized by the parent carousel. */
  @property({ type: Boolean }) loop = false;

  @query('.viewport') private _viewport!: HTMLDivElement;
  private _index = 0;
  private _scrollFrame = 0;
  private _resizeObserver?: ResizeObserver;

  get itemCount() {
    return this._items().length;
  }

  connectedCallback() {
    super.connectedCallback();
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(() => this.scrollToSlide(this._index, 'auto'));
    }
  }

  disconnectedCallback() {
    if (this._scrollFrame) cancelAnimationFrame(this._scrollFrame);
    this._resizeObserver?.disconnect();
    super.disconnectedCallback();
  }

  protected render() {
    const vertical = this.orientation === 'vertical';
    return html`
      <div
        part="viewport"
        class="viewport ${vertical ? 'vertical' : ''}"
        @scroll=${this._handleScroll}
      >
        <slot
          part="content"
          class="content ${vertical ? 'vertical' : ''}"
          @slotchange=${this._handleSlotChange}
        ></slot>
      </div>
    `;
  }

  protected firstUpdated() {
    this._resizeObserver?.observe(this._viewport);
    this._syncItems();
  }

  protected updated(changed: PropertyValues<this>) {
    if (changed.has('orientation')) {
      this.updateComplete.then(() => this.scrollToSlide(this._index, 'auto'));
    }
  }

  /** Scroll to a slide by its zero-based index. */
  scrollToSlide(index: number, behavior: ScrollBehavior = 'smooth') {
    const items = this._items();
    if (!this._viewport || items.length === 0) return;
    const next = Math.max(0, Math.min(items.length - 1, Math.trunc(index)));
    const first = items[0];
    const target = items[next];
    this._viewport.scrollTo({
      left: this.orientation === 'horizontal' ? target.offsetLeft - first.offsetLeft : 0,
      top: this.orientation === 'vertical' ? target.offsetTop - first.offsetTop : 0,
      behavior,
    });
  }

  private _items() {
    return Array.from(this.querySelectorAll<CarouselItem>('shadcn-carousel-item'));
  }

  private _handleSlotChange = () => {
    this._syncItems();
    this.scrollToSlide(this._index, 'auto');
  };

  private _handleScroll = () => {
    if (this._scrollFrame) cancelAnimationFrame(this._scrollFrame);
    this._scrollFrame = requestAnimationFrame(() => {
      this._scrollFrame = 0;
      const items = this._items();
      if (items.length === 0) return;
      const first = items[0];
      const position = this.orientation === 'horizontal' ? this._viewport.scrollLeft : this._viewport.scrollTop;
      const offsets = items.map((item) => this.orientation === 'horizontal'
        ? item.offsetLeft - first.offsetLeft
        : item.offsetTop - first.offsetTop);
      const index = offsets.reduce((closest, offset, candidate) =>
        Math.abs(offset - position) < Math.abs(offsets[closest] - position) ? candidate : closest, 0);
      if (index !== this._index) {
        this._index = index;
        this._syncItems();
      }
    });
  };

  private _syncItems() {
    const items = this._items();
    this._index = Math.max(0, Math.min(items.length - 1, this._index));
    items.forEach((item, index) => {
      item.position = index + 1;
      item.count = items.length;
    });
    this.dispatchEvent(new CustomEvent<CarouselChangeDetail>('carousel-select', {
      bubbles: true,
      composed: true,
      detail: { index: this._index, count: items.length },
    }));
  }
}

/**
 * A slide within carousel content.
 *
 * @element shadcn-carousel-item
 * @slot - Slide content.
 * @csspart item - Slide container.
 */
@customElement('shadcn-carousel-item')
export class CarouselItem extends LitElement {
  static styles = [tokensBase, css`
    :host { display: block; }
    .item { box-sizing: border-box; height: 100%; }
  `];

  /** One-based slide position, synchronized by carousel content. */
  @property({ type: Number }) position = 1;
  /** Total number of slides, synchronized by carousel content. */
  @property({ type: Number }) count = 1;

  protected render() {
    return html`
      <div
        part="item"
        class="item"
        role="group"
        aria-roledescription="slide"
        aria-label="${this.position} of ${this.count}"
      >
        <slot></slot>
      </div>
    `;
  }
}

abstract class CarouselControl extends LitElement {
  static styles = [tokensBase, css`
    :host {
      display: inline-flex;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }
    button {
      display: inline-flex;
      width: 2rem;
      height: 2rem;
      align-items: center;
      justify-content: center;
      padding: 0;
      border: 1px solid var(--border);
      border-radius: var(--radius-full);
      background: var(--background);
      color: var(--foreground);
      box-shadow: var(--shadow-sm);
      cursor: pointer;
      transition: color var(--transition-fast), background-color var(--transition-fast), opacity var(--transition-fast);
    }
    button:hover:not(:disabled) { background: var(--accent); color: var(--accent-foreground); }
    button:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
    button:disabled { opacity: .5; cursor: not-allowed; }
    svg { width: 1rem; height: 1rem; }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `];

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, reflect: true }) orientation: CarouselOrientation = 'horizontal';

  protected abstract get direction(): 'previous' | 'next';

  protected render() {
    const previous = this.direction === 'previous';
    const vertical = this.orientation === 'vertical';
    const label = previous ? 'Previous slide' : 'Next slide';
    const path = vertical
      ? (previous ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6')
      : (previous ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6');
    return html`
      <button part="button" type="button" ?disabled=${this.disabled} @click=${this._activate}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${path}></path>
        </svg>
        <span class="sr-only">${label}</span>
      </button>
    `;
  }

  private _activate = () => {
    const carousel = this.closest<Carousel>('shadcn-carousel');
    if (!carousel || this.disabled) return;
    if (this.direction === 'previous') carousel.scrollPrevious();
    else carousel.scrollNext();
  };
}

/**
 * Moves the carousel to the previous slide.
 *
 * @element shadcn-carousel-previous
 * @csspart button - Native navigation button.
 * @cssprop --carousel-control-offset - Distance from the carousel edge.
 */
@customElement('shadcn-carousel-previous')
export class CarouselPrevious extends CarouselControl {
  static styles = [...CarouselControl.styles, css`
    :host { left: calc(var(--carousel-control-offset, 3rem) * -1); }
    :host([orientation='vertical']) {
      top: calc(var(--carousel-control-offset, 3rem) * -1);
      left: 50%;
      transform: translateX(-50%);
    }
  `];
  protected get direction() { return 'previous' as const; }
}

/**
 * Moves the carousel to the next slide.
 *
 * @element shadcn-carousel-next
 * @csspart button - Native navigation button.
 * @cssprop --carousel-control-offset - Distance from the carousel edge.
 */
@customElement('shadcn-carousel-next')
export class CarouselNext extends CarouselControl {
  static styles = [...CarouselControl.styles, css`
    :host { right: calc(var(--carousel-control-offset, 3rem) * -1); }
    :host([orientation='vertical']) {
      top: auto;
      right: auto;
      bottom: calc(var(--carousel-control-offset, 3rem) * -1);
      left: 50%;
      transform: translateX(-50%);
    }
  `];
  protected get direction() { return 'next' as const; }
}

declare global {
  interface HTMLElementTagNameMap {
    'shadcn-carousel': Carousel;
    'shadcn-carousel-content': CarouselContent;
    'shadcn-carousel-item': CarouselItem;
    'shadcn-carousel-previous': CarouselPrevious;
    'shadcn-carousel-next': CarouselNext;
  }
}
