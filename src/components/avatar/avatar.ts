import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { tokensBase } from '../../styles/index.js';

/** @element shadcn-avatar @slot - Avatar image and fallback */
@customElement('shadcn-avatar')
export class Avatar extends LitElement {
  static styles = [tokensBase, css`
    :host { position: relative; display: inline-flex; width: var(--avatar-size, 2rem); height: var(--avatar-size, 2rem); flex: 0 0 auto; }
    .avatar { position: relative; display: flex; width: 100%; height: 100%; overflow: hidden; border-radius: var(--radius-full); }
    ::slotted(shadcn-avatar-image), ::slotted(shadcn-avatar-fallback) { position: absolute; inset: 0; width: 100%; height: 100%; }
    ::slotted(shadcn-avatar-image[hidden]), ::slotted(shadcn-avatar-fallback[hidden]) { display: none; }
  `];
  @state() private imageLoaded = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('avatar-image-load', this.handleImageLoad);
    this.addEventListener('avatar-image-error', this.handleImageError);
  }

  disconnectedCallback() {
    this.removeEventListener('avatar-image-load', this.handleImageLoad);
    this.removeEventListener('avatar-image-error', this.handleImageError);
    super.disconnectedCallback();
  }

  private handleImageLoad = () => { this.imageLoaded = true; this.syncChildren(); };
  private handleImageError = () => { this.imageLoaded = false; this.syncChildren(); };

  private syncChildren() {
    this.querySelectorAll('shadcn-avatar-image').forEach((element) => element.toggleAttribute('hidden', !this.imageLoaded));
    this.querySelectorAll('shadcn-avatar-fallback').forEach((element) => element.toggleAttribute('hidden', this.imageLoaded));
  }

  protected firstUpdated() { this.syncChildren(); }
  render() { return html`<span part="avatar" class="avatar"><slot @slotchange=${this.syncChildren}></slot></span>`; }
}

/** @element shadcn-avatar-image */
@customElement('shadcn-avatar-image')
export class AvatarImage extends LitElement {
  static styles = css`:host { display: block; } img { display: block; width: 100%; height: 100%; object-fit: cover; }`;
  @property({ type: String }) src = '';
  @property({ type: String }) alt = '';
  render() { return html`<img part="image" src=${this.src} alt=${this.alt} @load=${() => this.emit('avatar-image-load')} @error=${() => this.emit('avatar-image-error')} />`; }
  private emit(type: string) { this.dispatchEvent(new CustomEvent(type, { bubbles: true, composed: true })); }
}

/** @element shadcn-avatar-fallback @slot - Fallback initials or icon */
@customElement('shadcn-avatar-fallback')
export class AvatarFallback extends LitElement {
  static styles = [tokensBase, css`:host { display: flex; align-items: center; justify-content: center; color: var(--muted-foreground); background: var(--muted); border-radius: var(--radius-full); font-family: var(--font-sans); font-size: var(--font-size-sm); font-weight: var(--font-medium); }`];
  render() { return html`<slot></slot>`; }
}

declare global { interface HTMLElementTagNameMap { 'shadcn-avatar': Avatar; 'shadcn-avatar-image': AvatarImage; 'shadcn-avatar-fallback': AvatarFallback; } }
