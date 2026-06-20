import{i as e}from"./iframe-CBkYFfHe.js";const s=e`
  :host {
    /* Spacing */
    --spacing-1: 0.25rem;
    --spacing-1-5: 0.375rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    
    /* Border Radius */
    --radius-sm: calc(var(--radius, 0.625rem) - 0.25rem);
    --radius-md: calc(var(--radius, 0.625rem) - 0.125rem);
    --radius-lg: var(--radius, 0.625rem);
    --radius-xl: calc(var(--radius, 0.625rem) + 0.25rem);
    --radius-2xl: calc(var(--radius, 0.625rem) + 0.5rem);
    --radius-full: 9999px;
    
    /* Transitions */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);

    /* Keyframe Animation Timing */
    --animation-spin-duration: 600ms;
    --animation-spin-easing: linear;
    --animation-pulse-duration: 2s;
    --animation-pulse-easing: cubic-bezier(0.4, 0, 0.6, 1);
    --animation-caret-duration: 1s;
    --animation-caret-easing: steps(1);

    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    
    /* Typography */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* Font Weights */
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    
    /* Font Family */
    --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;

    /* Line Heights */
    --leading-none: 1;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    /* Letter Spacing */
    --tracking-tight: -0.025em;
    --tracking-widest: 0.1em;
  }
  
  @media (prefers-reduced-motion: reduce) {
    :host {
      --transition-fast: 0ms;
      --transition-base: 0ms;
      --transition-normal: 0ms;
      --transition-slow: 0ms;
    }
  }

  @keyframes shadcn-fade-in {
    from { opacity: 0; }
  }

  @keyframes shadcn-zoom-in {
    from { opacity: 0; transform: scale(0.95); }
  }

  @keyframes shadcn-slide-in-from-right {
    from { transform: translateX(100%); }
  }

  @keyframes shadcn-slide-in-from-left {
    from { transform: translateX(-100%); }
  }

  @keyframes shadcn-slide-in-from-top {
    from { transform: translateY(-100%); }
  }

  @keyframes shadcn-slide-in-from-bottom {
    from { transform: translateY(100%); }
  }
`,a=e`
  outline: 2px solid transparent;
  outline-offset: 2px;
  
  &:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
`;export{a as f,s as t};
