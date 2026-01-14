import{j as e,M as c}from"./index-wk9oFoki.js";import{useMDXComponents as s}from"./index-DsF_OtMc.js";import"./iframe-BMAUX1rs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C__6K5js.js";import"./index-DrFu-skq.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Guides/Theming"}),`
`,e.jsx(n.h1,{id:"theming-guide",children:"Theming Guide"}),`
`,e.jsx(n.p,{children:"This guide explains how to customize the appearance of shadcn-web-components using CSS variables."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["shadcn-web-components uses CSS custom properties (CSS variables) for theming. All design tokens are defined in the ",e.jsx(n.code,{children:"tokens.css"})," file and can be overridden to match your application's design system."]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(n.p,{children:["To customize the theme, you need to override the CSS variables defined in the ",e.jsx(n.code,{children:":root"})," selector. You can do this in several ways:"]}),`
`,e.jsx(n.h3,{id:"method-1-global-override",children:"Method 1: Global Override"}),`
`,e.jsx(n.p,{children:"Add your custom CSS variables to your application's global stylesheet:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* Override color tokens */
  --background: oklch(0.95 0 0);
  --foreground: oklch(0.15 0 0);
  --primary: oklch(0.5 0.2 250);
  --primary-foreground: oklch(0.98 0 0);
  
  /* Override spacing */
  --spacing-4: 1.5rem;
  
  /* Override border radius */
  --radius-lg: 0.75rem;
}
`})}),`
`,e.jsx(n.h3,{id:"method-2-scoped-override",children:"Method 2: Scoped Override"}),`
`,e.jsx(n.p,{children:"Override variables for a specific container or component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-theme {
  --background: oklch(0.95 0 0);
  --foreground: oklch(0.15 0 0);
  --primary: oklch(0.5 0.2 250);
}

/* Apply to a container */
<div class="my-theme">
  <shadcn-button>Button</shadcn-button>
</div>
`})}),`
`,e.jsx(n.h3,{id:"method-3-import-and-override",children:"Method 3: Import and Override"}),`
`,e.jsx(n.p,{children:"If you're importing the styles, you can override them after import:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import '@billy_mcdowell/shadcn-web-components/dist/styles/index.js';

:root {
  --primary: oklch(0.5 0.2 250);
  --primary-foreground: oklch(0.98 0 0);
}
`})}),`
`,e.jsx(n.h2,{id:"available-css-variables",children:"Available CSS Variables"}),`
`,e.jsx(n.h3,{id:"color-tokens",children:"Color Tokens"}),`
`,e.jsx(n.p,{children:"The library provides a comprehensive color system based on the shadcn design principles:"}),`
`,e.jsx(n.h4,{id:"base-colors",children:"Base Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--background"}),": Main background color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--foreground"}),": Main text/foreground color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--card"}),": Card background color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--card-foreground"}),": Card text color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--popover"}),": Popover background color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--popover-foreground"}),": Popover text color"]}),`
`]}),`
`,e.jsx(n.h4,{id:"semantic-colors",children:"Semantic Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--primary"}),": Primary brand color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--primary-foreground"}),": Text color on primary background"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--secondary"}),": Secondary color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--secondary-foreground"}),": Text color on secondary background"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--muted"}),": Muted/subtle background color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--muted-foreground"}),": Text color on muted background"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--accent"}),": Accent color for highlights"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--accent-foreground"}),": Text color on accent background"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--destructive"}),": Error/destructive action color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--destructive-foreground"}),": Text color on destructive background"]}),`
`]}),`
`,e.jsx(n.h4,{id:"ui-element-colors",children:"UI Element Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--border"}),": Border color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--input"}),": Input field border/background color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--ring"}),": Focus ring color"]}),`
`]}),`
`,e.jsx(n.h4,{id:"sidebar-colors",children:"Sidebar Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--sidebar"}),": Sidebar background color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--sidebar-foreground"}),": Sidebar text color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--sidebar-primary"}),": Sidebar primary accent color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--sidebar-primary-foreground"}),": Text color on sidebar primary"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--sidebar-accent"}),": Sidebar accent color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--sidebar-accent-foreground"}),": Text color on sidebar accent"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--sidebar-border"}),": Sidebar border color"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--sidebar-ring"}),": Sidebar focus ring color"]}),`
`]}),`
`,e.jsx(n.h4,{id:"chart-colors",children:"Chart Colors"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--chart-1"})," through ",e.jsx(n.code,{children:"--chart-5"}),": Chart color palette"]}),`
`]}),`
`,e.jsx(n.h3,{id:"typography-tokens",children:"Typography Tokens"}),`
`,e.jsx(n.h4,{id:"font-sizes",children:"Font Sizes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-size-xs"}),": 0.75rem (12px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-size-sm"}),": 0.875rem (14px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-size-base"}),": 1rem (16px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-size-lg"}),": 1.125rem (18px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-size-xl"}),": 1.25rem (20px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-size-2xl"}),": 1.5rem (24px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-size-3xl"}),": 1.875rem (30px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-size-4xl"}),": 2.25rem (36px)"]}),`
`]}),`
`,e.jsx(n.h4,{id:"font-weights",children:"Font Weights"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-normal"}),": 400"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-medium"}),": 500"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-semibold"}),": 600"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-bold"}),": 700"]}),`
`]}),`
`,e.jsx(n.h4,{id:"font-families",children:"Font Families"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-sans"}),": Sans-serif font stack"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--font-mono"}),": Monospace font stack"]}),`
`]}),`
`,e.jsx(n.h4,{id:"line-heights",children:"Line Heights"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--leading-none"}),": 1"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--leading-tight"}),": 1.25"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--leading-snug"}),": 1.375"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--leading-normal"}),": 1.5"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--leading-relaxed"}),": 1.625"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--leading-loose"}),": 2"]}),`
`]}),`
`,e.jsx(n.h3,{id:"spacing-tokens",children:"Spacing Tokens"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-1"}),": 0.25rem (4px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-2"}),": 0.5rem (8px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-3"}),": 0.75rem (12px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-4"}),": 1rem (16px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-5"}),": 1.25rem (20px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-6"}),": 1.5rem (24px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-8"}),": 2rem (32px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-10"}),": 2.5rem (40px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--spacing-12"}),": 3rem (48px)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"border-radius-tokens",children:"Border Radius Tokens"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--radius-sm"}),": 0.25rem (4px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--radius-md"}),": 0.375rem (6px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--radius-lg"}),": 0.5rem (8px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--radius-xl"}),": 0.75rem (12px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--radius-2xl"}),": 1rem (16px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--radius-full"}),": 9999px (fully rounded)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"shadow-tokens",children:"Shadow Tokens"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--shadow-sm"}),": Small shadow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--shadow-md"}),": Medium shadow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--shadow-lg"}),": Large shadow"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--shadow-xl"}),": Extra large shadow"]}),`
`]}),`
`,e.jsx(n.h3,{id:"transition-tokens",children:"Transition Tokens"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--transition-fast"}),": 150ms cubic-bezier(0.4, 0, 0.2, 1)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--transition-normal"}),": 300ms cubic-bezier(0.4, 0, 0.2, 1)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--transition-slow"}),": 500ms cubic-bezier(0.4, 0, 0.2, 1)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," Transitions automatically respect ",e.jsx(n.code,{children:"prefers-reduced-motion"})," and are set to 0ms when the user prefers reduced motion."]}),`
`,e.jsx(n.h2,{id:"color-format",children:"Color Format"}),`
`,e.jsxs(n.p,{children:["The library uses the ",e.jsx(n.code,{children:"oklch()"})," color function for better color manipulation and consistency. The format is:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`oklch(lightness chroma hue)
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lightness"}),": 0-1 (0 = black, 1 = white)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Chroma"}),": 0-0.4 (0 = grayscale, higher = more saturated)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hue"}),": 0-360 (color wheel position)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"example-color-definitions",children:"Example Color Definitions"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* Light theme example */
  --background: oklch(0.98 0 0);        /* Near white */
  --foreground: oklch(0.15 0 0);        /* Near black */
  --primary: oklch(0.5 0.2 250);        /* Blue with medium saturation */
  --destructive: oklch(0.55 0.22 25);   /* Red with medium saturation */
  
  /* Dark theme example */
  --background: oklch(0.145 0 0);       /* Very dark gray */
  --foreground: oklch(0.985 0 0);       /* Near white */
  --primary: oklch(0.7 0.15 250);       /* Lighter blue for dark theme */
}
`})}),`
`,e.jsx(n.h2,{id:"creating-a-light-theme",children:"Creating a Light Theme"}),`
`,e.jsx(n.p,{children:"To create a light theme, override the color variables with lighter values:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.15 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0 0);
  --primary: oklch(0.4 0.2 250);
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.96 0 0);
  --secondary-foreground: oklch(0.15 0 0);
  --muted: oklch(0.96 0 0);
  --muted-foreground: oklch(0.45 0 0);
  --accent: oklch(0.96 0 0);
  --accent-foreground: oklch(0.15 0 0);
  --destructive: oklch(0.55 0.22 25);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.9 0 0);
  --input: oklch(0.9 0 0);
  --ring: oklch(0.4 0.2 250);
}
`})}),`
`,e.jsx(n.h2,{id:"creating-a-custom-color-scheme",children:"Creating a Custom Color Scheme"}),`
`,e.jsx(n.p,{children:"You can create a custom color scheme by overriding the primary, accent, and other semantic colors:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* Custom purple theme */
  --primary: oklch(0.5 0.2 280);
  --primary-foreground: oklch(0.98 0 0);
  --accent: oklch(0.6 0.15 280);
  --accent-foreground: oklch(0.15 0 0);
  
  /* Custom destructive color (e.g., orange instead of red) */
  --destructive: oklch(0.6 0.2 40);
  --destructive-foreground: oklch(0.98 0 0);
}
`})}),`
`,e.jsx(n.h2,{id:"dynamic-theming",children:"Dynamic Theming"}),`
`,e.jsx(n.p,{children:"You can implement dynamic theme switching using JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Toggle between light and dark themes
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.style.getPropertyValue('--background') === 'oklch(0.145 0 0)';
  
  if (isDark) {
    // Switch to light theme
    root.style.setProperty('--background', 'oklch(0.98 0 0)');
    root.style.setProperty('--foreground', 'oklch(0.15 0 0)');
    // ... set other light theme variables
  } else {
    // Switch to dark theme
    root.style.setProperty('--background', 'oklch(0.145 0 0)');
    root.style.setProperty('--foreground', 'oklch(0.985 0 0)');
    // ... set other dark theme variables
  }
}
`})}),`
`,e.jsx(n.p,{children:"Or use CSS classes for theme switching:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.theme-light {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.15 0 0);
  /* ... other light theme variables */
}

.theme-dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... other dark theme variables */
}
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Toggle theme class
document.documentElement.classList.toggle('theme-light');
document.documentElement.classList.toggle('theme-dark');
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Maintain Contrast"}),": Ensure sufficient contrast between foreground and background colors for accessibility (WCAG AA minimum)."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use Semantic Colors"}),": Use semantic color names (",e.jsx(n.code,{children:"--primary"}),", ",e.jsx(n.code,{children:"--destructive"}),") rather than specific colors (",e.jsx(n.code,{children:"--blue"}),", ",e.jsx(n.code,{children:"--red"}),") to maintain flexibility."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Test Both Themes"}),": If supporting multiple themes, test all components in both light and dark modes."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Respect User Preferences"}),": Consider using ",e.jsx(n.code,{children:"prefers-color-scheme"})," media query for automatic theme detection:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@media (prefers-color-scheme: light) {
  :root {
    --background: oklch(0.98 0 0);
    --foreground: oklch(0.15 0 0);
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: oklch(0.145 0 0);
    --foreground: oklch(0.985 0 0);
  }
}
`})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Override Selectively"}),": Only override the variables you need to change. The library provides sensible defaults."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use CSS Variables"}),": Always use CSS variables rather than hardcoded values to maintain theme consistency."]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"complete-light-theme-override",children:"Complete Light Theme Override"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* Base colors */
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.15 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0 0);
  
  /* Semantic colors */
  --primary: oklch(0.4 0.2 250);
  --primary-foreground: oklch(0.98 0 0);
  --secondary: oklch(0.96 0 0);
  --secondary-foreground: oklch(0.15 0 0);
  --muted: oklch(0.96 0 0);
  --muted-foreground: oklch(0.45 0 0);
  --accent: oklch(0.96 0 0);
  --accent-foreground: oklch(0.15 0 0);
  --destructive: oklch(0.55 0.22 25);
  --destructive-foreground: oklch(0.98 0 0);
  
  /* UI elements */
  --border: oklch(0.9 0 0);
  --input: oklch(0.9 0 0);
  --ring: oklch(0.4 0.2 250);
}
`})}),`
`,e.jsx(n.h3,{id:"custom-brand-colors",children:"Custom Brand Colors"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  /* Brand colors */
  --primary: oklch(0.5 0.25 200);        /* Custom blue */
  --primary-foreground: oklch(0.98 0 0);
  --accent: oklch(0.6 0.2 320);          /* Custom purple */
  --accent-foreground: oklch(0.98 0 0);
  
  /* Keep other colors as default or customize as needed */
}
`})}),`
`,e.jsx(n.h2,{id:"additional-resources",children:"Additional Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://oklch.com/",rel:"nofollow",children:"OKLCH Color Space"})," - Learn more about the OKLCH color format"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS Custom Properties"})," - MDN documentation on CSS variables"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",rel:"nofollow",children:"WCAG Contrast Guidelines"})," - Accessibility guidelines for color contrast"]}),`
`]})]})}function x(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{x as default};
