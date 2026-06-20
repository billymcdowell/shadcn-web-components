# shadcn Web Components

A professional, enterprise-grade web component library built with [Lit](https://lit.dev), following [shadcn/ui](https://ui.shadcn.com) design principles.

## Features

✨ **Modern & Accessible**: Built with Lit and WCAG 2.1 AA compliant  
🎨 **Beautiful Dark Theme**: Carefully crafted oklch color palette  
📦 **Tree-Shakeable**: Import only what you need  
🔧 **Customizable**: Theme with CSS custom properties  
📚 **Well Documented**: Interactive Storybook documentation  
⚡ **Lightweight**: Core components < 8KB gzipped  
🎯 **Type-Safe**: Full TypeScript support

## Quick Start

### Installation

```bash
npm install @billy_mcdowell/shadcn-web-components
```

### CDN Usage

You can also use the components via CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@0.0.3/dist/index.js"></script>
```

### Usage

Import individual components:

```typescript
import '@billy_mcdowell/shadcn-web-components/button';
```

Or import all components:

```typescript
import '@billy_mcdowell/shadcn-web-components';
```

Use in your HTML:

```html
<shadcn-button variant="default">Click me</shadcn-button>
<shadcn-button variant="destructive">Delete</shadcn-button>
<shadcn-button variant="outline">Cancel</shadcn-button>
```

## Components

### Currently Available

- **Accordion**
- **Breadcrumb**
- **Button**
- **Button Group**
- **Card**
- **Checkbox**
- **Context Menu**
- **Dialog**
- **Dropdown Menu**
- **Empty**
- **Field**
- **Input**
- **Input Group**
- **Item**
- **Kbd**
- **Label**
- **Menubar**
- **Native Select**
- **Navigation Menu**
- **Popover**
- **Radio Group**
- **Separator**
- **Sidebar**
- **Skeleton**
- **Slider**
- **Spinner**
- **Switch**
- **Textarea**
- **Toggle**
- **Toggle Group**

### Implementation Status

- **Stable primitives**: Button, Card, Input, Label, Separator, Skeleton, Spinner, Textarea, Kbd.
- **Interactive controls**: Checkbox, Radio Group, Slider, Switch, Toggle, Toggle Group.
- **Implemented, parity hardening in progress**: Dialog, Popover, Dropdown Menu, Context Menu, Menubar, Navigation Menu.

### Import Paths

Import the full library:

```typescript
import '@billy_mcdowell/shadcn-web-components';
```

Import individual components:

```typescript
import '@billy_mcdowell/shadcn-web-components/button';
import '@billy_mcdowell/shadcn-web-components/dialog';
import '@billy_mcdowell/shadcn-web-components/popover';
```

Import styles:

```typescript
import '@billy_mcdowell/shadcn-web-components/styles';
```

## Button Component

The button component supports multiple variants and sizes:

### Variants

- `default` - Primary button style
- `destructive` - For dangerous actions
- `outline` - Subtle bordered style
- `secondary` - Muted background
- `ghost` - Transparent background
- `link` - Text link style

### Sizes

- `sm` - Small (36px height)
- `default` - Default (40px height)
- `lg` - Large (44px height)
- `icon` - Square icon button (40x40px)

### Examples

```html
<!-- Variants -->
<shadcn-button variant="default">Save</shadcn-button>
<shadcn-button variant="destructive">Delete</shadcn-button>
<shadcn-button variant="outline">Cancel</shadcn-button>

<!-- Sizes -->
<shadcn-button size="sm">Small</shadcn-button>
<shadcn-button size="lg">Large</shadcn-button>

<!-- Icon Button -->
<shadcn-button size="icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</shadcn-button>

<!-- Disabled -->
<shadcn-button disabled>Disabled</shadcn-button>

<!-- With Event Listener -->
<shadcn-button id="myButton">Click me</shadcn-button>
<script>
  document.getElementById('myButton')
    .addEventListener('button-click', (e) => {
      console.log('Button clicked!', e.detail);
    });
</script>
```

## Customization

All components can be themed using CSS custom properties:

```css
shadcn-button {
  --button-bg: oklch(0.5 0.2 220);
  --button-color: oklch(1 0 0);
  --button-border: oklch(0.6 0.2 220);
}
```

### Available CSS Custom Properties

Each component exposes CSS custom properties for theming. See the component documentation for details.

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build

# Type check
npm run type-check

# Generate component manifest
npm run analyze
```

### Project Structure

```
shadcn-web-components/
├── src/
│   ├── components/          # Component implementations
│   │   └── button/
│   │       ├── button.ts
│   │       ├── button.stories.ts
│   │       └── index.ts
│   ├── styles/             # Design tokens
│   │   ├── tokens.css
│   │   ├── reset.css
│   │   └── index.ts
│   └── index.ts            # Main entry
├── .storybook/             # Storybook config
└── dist/                   # Build output
```

## Design System

This library follows shadcn's design principles with a dark theme color palette using oklch color space for better perceived uniformity.

### Color Tokens

- `--background`, `--foreground` - Base colors
- `--primary`, `--secondary` - Brand colors
- `--accent`, `--muted` - Semantic colors
- `--destructive` - Error/danger state
- `--border`, `--input` - UI element colors

### Typography Scale

- `--font-size-xs` to `--font-size-4xl`

### Spacing Scale

- `--spacing-1` (4px) to `--spacing-12` (48px)

### Border Radius

- `--radius-sm` to `--radius-full`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+

## Resources

- [Storybook Documentation](http://localhost:6006)
- [Custom Elements Manifest](./custom-elements.json)

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

---

**Note**: This library is currently in active development. The API may change before v1.0.0.
