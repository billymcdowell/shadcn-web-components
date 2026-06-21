import{u as s,j as e,M as a,h as r}from"./blocks-D8cQIbLh.js";import"./preload-helper-BBXEHTOU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Baten_M5.js";const l=`# shadcn Web Components: agent index

> AI-oriented routing and usage documentation for \`@billy_mcdowell/shadcn-web-components\`, a Lit-based custom-element library.

## Start here

- Install: \`npm install @billy_mcdowell/shadcn-web-components\`
- Register one family: \`import '@billy_mcdowell/shadcn-web-components/button';\`
- Register everything: \`import '@billy_mcdowell/shadcn-web-components';\`
- Elements use the \`shadcn-\` prefix and work in plain HTML, Lit, React, Vue, Svelte, and other environments that support custom elements.
- Load \`src/styles/tokens.css\` once for the default design tokens. \`src/styles/reset.css\` is optional. The \`/styles\` JavaScript export contains Lit CSS helpers; it does not install the global token stylesheet.
- Boolean attributes are true when present. Omit \`disabled\`, \`open\`, \`required\`, and similar attributes for false; never write \`disabled="false"\`.
- Use DOM properties for live values, DOM events for changes, slots for composition, and CSS custom properties for supported theming. Do not reach into component shadow roots.

## Component chooser

### Actions and selection

- [Button](./src/components/button/llms.md): A control that triggers an immediate action.
- [Button Group](./src/components/button-group/llms.md): A layout primitive that visually joins related buttons.
- [Checkbox](./src/components/checkbox/llms.md): A form control for an independent boolean choice.
- [Combobox](./src/components/combobox/llms.md): A filterable, form-associated single-select with typeahead.
- [Radio Group](./src/components/radio-group/llms.md): A form control for choosing exactly one option from a visible set.
- [Select](./src/components/select/llms.md): A form-associated custom popup for choosing one option.
- [Native Select](./src/components/native-select/llms.md): A styled wrapper around a native HTML select.
- [Slider](./src/components/slider/llms.md): A form control for selecting a numeric value from a range.
- [Switch](./src/components/switch/llms.md): A form control that immediately toggles a setting on or off.
- [Toggle](./src/components/toggle/llms.md): A pressable control with an on/off pressed state.
- [Toggle Group](./src/components/toggle-group/llms.md): A coordinated group of single- or multiple-selection toggles.

### Forms

- [Field](./src/components/field/llms.md): A form-field wrapper for labels, help text, and validation errors.
- [Input](./src/components/input/llms.md): A single-line text-like form control.
- [Textarea](./src/components/textarea/llms.md): A multi-line text form control.
- [Input OTP](./src/components/input-otp/llms.md): A form-associated control for fixed-length one-time codes.
- [Input Group](./src/components/input-group/llms.md): A layout wrapper for an input with prefix or suffix content.
- [Label](./src/components/label/llms.md): A visible label associated with a form control.
- [Calendar](./src/components/calendar/llms.md): An accessible single-date calendar with month navigation.
- [Date Picker](./src/components/date-picker/llms.md): A form-associated date field with calendar popup and validation.

### Overlays and disclosure

- [Accordion](./src/components/accordion/llms.md): A vertically stacked set of expandable sections.
- [Alert Dialog](./src/components/alert-dialog/llms.md): A modal confirmation surface for consequential actions.
- [Collapsible](./src/components/collapsible/llms.md): A disclosure that shows or hides one content region.
- [Command](./src/components/command/llms.md): A searchable, keyboard-navigable command menu.
- [Context Menu](./src/components/context-menu/llms.md): A command menu opened from a context-menu gesture.
- [Dialog](./src/components/dialog/llms.md): A modal window for focused content or a short task.
- [Drawer](./src/components/drawer/llms.md): A modal panel that enters from an edge, optimized for compact screens.
- [Dropdown Menu](./src/components/dropdown-menu/llms.md): A button-triggered menu of commands or choices.
- [Hover Card](./src/components/hover-card/llms.md): A non-modal preview revealed by hover or keyboard focus.
- [Popover](./src/components/popover/llms.md): A non-modal floating surface anchored to a trigger.
- [Sheet](./src/components/sheet/llms.md): A modal panel that slides from a chosen screen edge.
- [Tooltip](./src/components/tooltip/llms.md): A brief, non-interactive label shown on hover or focus.

### Navigation

- [Breadcrumb](./src/components/breadcrumb/llms.md): A hierarchical trail showing the current page location.
- [Menubar](./src/components/menubar/llms.md): A desktop-style horizontal set of command menus.
- [Navigation Menu](./src/components/navigation-menu/llms.md): A structured site-navigation menu with expandable panels.
- [Pagination](./src/components/pagination/llms.md): Navigation links for moving between paged result sets.
- [Sidebar](./src/components/sidebar/llms.md): A persistent, optionally collapsed side-region container.
- [Tabs](./src/components/tabs/llms.md): A set of layered panels where one panel is visible at a time.

### Data and content

- [Alert](./src/components/alert/llms.md): A persistent inline message for important contextual information.
- [Aspect Ratio](./src/components/aspect-ratio/llms.md): A container that preserves a fixed width-to-height ratio.
- [Avatar](./src/components/avatar/llms.md): A compact representation of a person or entity with fallback content.
- [Badge](./src/components/badge/llms.md): A small non-interactive label for status or categorization.
- [Card](./src/components/card/llms.md): A visual container that groups related content and actions.
- [Carousel](./src/components/carousel/llms.md): A scrollable gallery of slides with previous and next controls.
- [Chart](./src/components/chart/llms.md): A responsive Chart.js visualization using the shadcn chart palette.
- [Data Table](./src/components/data-table/llms.md): A sortable, filterable, paginated table for structured row data.
- [Empty](./src/components/empty/llms.md): A composed empty-state message with optional icon and action.
- [Item](./src/components/item/llms.md): A selectable or actionable row with optional leading and trailing content.
- [Kbd](./src/components/kbd/llms.md): A visual representation of keyboard input.
- [Resizable](./src/components/resizable/llms.md): An accessible split layout with draggable panel handles.
- [Separator](./src/components/separator/llms.md): A horizontal or vertical visual divider.
- [Table](./src/components/table/llms.md): A set of components for semantic tabular data.
- [Typography](./src/components/typography/llms.md): A semantic text element with consistent type styles.

### Feedback

- [Progress](./src/components/progress/llms.md): A visual indicator of determinate task completion.
- [Skeleton](./src/components/skeleton/llms.md): A placeholder that approximates content while it loads.
- [Sonner](./src/components/sonner/llms.md): A notification host for brief, non-blocking feedback.
- [Spinner](./src/components/spinner/llms.md): An indeterminate indicator for an in-progress operation.

## Framework usage

### Plain HTML or JavaScript

\`\`\`html
<script type="module">
  import '@billy_mcdowell/shadcn-web-components/button';
<\/script>
<shadcn-button id="save">Save</shadcn-button>
<script>
  document.querySelector('#save').addEventListener('button-click', () => save());
<\/script>
\`\`\`

### Lit

\`\`\`ts
import { html } from 'lit';
import '@billy_mcdowell/shadcn-web-components/input';

const view = (value, onChange) => html\`
  <shadcn-input
    .value=\${value}
    @input-change=\${onChange}
  ></shadcn-input>
\`;
\`\`\`

### React and JSX

Import the registration subpath, use lowercase custom-element tags, and attach custom events through a ref/effect when the framework version does not map unknown \`on*\` props to DOM events. Pass live complex values through element properties. TypeScript JSX projects may need local custom-element intrinsic-element declarations derived from \`custom-elements.json\`.

## Choosing related components

- **Dialog vs Alert Dialog:** Dialog is general modal content; Alert Dialog requires an explicit decision for consequential actions.
- **Sheet vs Drawer vs Sidebar:** Sheet is an edge modal, Drawer is a compact-screen/modal task surface, and Sidebar is persistent page structure.
- **Select vs Native Select vs Radio Group vs Combobox:** Select is a custom popup for fixed options, Native Select prioritizes platform behavior, Radio Group keeps a small choice set visible, and Combobox adds typeahead filtering for longer lists.
- **Calendar vs Date Picker:** Calendar is an inline date grid; Date Picker is a form field with trigger, popup, and validation.
- **Table vs Data Table:** Table is semantic tabular markup; Data Table adds sorting, filtering, pagination, and row selection.
- **Carousel vs Tabs:** Carousel scrolls through peer slides; Tabs switch labeled panels in place.
- **Checkbox vs Switch vs Toggle:** Checkbox records a form choice, Switch immediately changes a setting, and Toggle represents a pressed toolbar action.
- **Dropdown Menu vs Context Menu vs Menubar vs Command:** Dropdown Menu has a visible trigger, Context Menu is target-specific and gesture-opened, Menubar exposes persistent desktop-style command categories, and Command is a searchable keyboard-driven palette.
- **Tooltip vs Hover Card vs Popover:** Tooltip is short non-interactive help, Hover Card is a preview, and Popover holds interactive supplemental content.
- **Skeleton vs Spinner vs Progress:** Skeleton previews content shape, Spinner represents unknown duration, and Progress represents measurable completion.

## Machine-readable API

The package includes \`custom-elements.json\`, the authoritative Custom Elements Manifest for tags, attributes, properties, events, slots, and CSS custom properties. The per-component guides combine that generated API with human decision guidance and examples. Regenerate them after updating the manifest with:

\`\`\`sh
npm run docs:llms
\`\`\`
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Component Guides/Overview"}),`
`,e.jsx(r,{children:l})]})}function p(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t()}export{p as default};
