import{i as s}from"./iframe-BV4MdNsM.js";const i=s`
  :host {
    /* Spacing */
    --spacing-1: 0.25rem;
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
    
    /* Typography */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    
    /* Font Weights */
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    
    /* Font Family */
    --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  
  @media (prefers-reduced-motion: reduce) {
    :host {
      --transition-fast: 0ms;
      --transition-base: 0ms;
    }
  }
`,r=s`
  outline: 2px solid transparent;
  outline-offset: 2px;
  
  &:focus-visible {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
`;export{r as f,i as t};
