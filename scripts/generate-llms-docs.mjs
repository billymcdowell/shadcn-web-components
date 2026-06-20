import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(await readFile(path.join(root, 'custom-elements.json'), 'utf8'));

const components = {
  accordion: ['Accordion', 'A vertically stacked set of expandable sections.', 'revealing optional or hierarchical content while keeping the page compact', 'the user needs to compare all sections at once; use visible sections or tabs instead', `<shadcn-accordion type="single" collapsible>
  <shadcn-accordion-item value="shipping">
    <span slot="trigger">Shipping</span>
    Orders ship in 2-3 business days.
  </shadcn-accordion-item>
</shadcn-accordion>`],
  alert: ['Alert', 'A persistent inline message for important contextual information.', 'showing status, warnings, errors, or guidance near the content they affect', 'the message requires an immediate decision; use Alert Dialog instead', `<shadcn-alert variant="default">
  <shadcn-alert-title>Saved</shadcn-alert-title>
  <shadcn-alert-description>Your changes are live.</shadcn-alert-description>
</shadcn-alert>`],
  'alert-dialog': ['Alert Dialog', 'A modal confirmation surface for consequential actions.', 'asking the user to confirm or cancel an irreversible or high-impact action', 'showing ordinary content or a low-risk form; use Dialog instead', `<shadcn-alert-dialog>
  <shadcn-alert-dialog-trigger>Delete project</shadcn-alert-dialog-trigger>
  <shadcn-alert-dialog-content>
    <shadcn-alert-dialog-header>
      <shadcn-alert-dialog-title>Delete project?</shadcn-alert-dialog-title>
      <shadcn-alert-dialog-description>This cannot be undone.</shadcn-alert-dialog-description>
    </shadcn-alert-dialog-header>
    <shadcn-alert-dialog-footer>
      <shadcn-alert-dialog-cancel>Cancel</shadcn-alert-dialog-cancel>
      <shadcn-alert-dialog-action>Delete</shadcn-alert-dialog-action>
    </shadcn-alert-dialog-footer>
  </shadcn-alert-dialog-content>
</shadcn-alert-dialog>`],
  'aspect-ratio': ['Aspect Ratio', 'A container that preserves a fixed width-to-height ratio.', 'responsive media, maps, embeds, or placeholders that must not cause layout shift', 'content needs intrinsic or unconstrained height', `<shadcn-aspect-ratio ratio="1.7777778">
  <img src="hero.jpg" alt="Mountain landscape">
</shadcn-aspect-ratio>`],
  avatar: ['Avatar', 'A compact representation of a person or entity with fallback content.', 'identity in profiles, comments, lists, and account controls', 'the image is content rather than identity; use a normal image', `<shadcn-avatar>
  <shadcn-avatar-image src="ada.jpg" alt="Ada Lovelace"></shadcn-avatar-image>
  <shadcn-avatar-fallback>AL</shadcn-avatar-fallback>
</shadcn-avatar>`],
  badge: ['Badge', 'A small non-interactive label for status or categorization.', 'short statuses, counts, versions, or categories attached to other content', 'the label performs an action; use Button or Toggle instead', `<shadcn-badge variant="secondary">Draft</shadcn-badge>`],
  breadcrumb: ['Breadcrumb', 'A hierarchical trail showing the current page location.', 'sites or applications with multiple navigation levels', 'representing a sequence of steps; use dedicated step navigation', `<shadcn-breadcrumb aria-label="Breadcrumb">
  <shadcn-breadcrumb-item><shadcn-breadcrumb-link href="/">Home</shadcn-breadcrumb-link></shadcn-breadcrumb-item>
  <shadcn-breadcrumb-separator>/</shadcn-breadcrumb-separator>
  <shadcn-breadcrumb-item><shadcn-breadcrumb-page>Settings</shadcn-breadcrumb-page></shadcn-breadcrumb-item>
</shadcn-breadcrumb>`],
  button: ['Button', 'A control that triggers an immediate action.', 'submitting, confirming, creating, deleting, or invoking application behavior', 'navigating to a URL; use a real anchor', `<shadcn-button variant="default" type="button">Save changes</shadcn-button>`],
  'button-group': ['Button Group', 'A layout primitive that visually joins related buttons.', 'grouping adjacent actions or segmented controls with equal hierarchy', 'the actions are unrelated or need explanatory separation', `<shadcn-button-group aria-label="Text alignment">
  <shadcn-button variant="outline">Left</shadcn-button>
  <shadcn-button variant="outline">Center</shadcn-button>
  <shadcn-button variant="outline">Right</shadcn-button>
</shadcn-button-group>`],
  card: ['Card', 'A visual container that groups related content and actions.', 'summaries, previews, settings groups, or dashboard modules', 'ordinary page sections do not need visual containment', `<shadcn-card>
  <shadcn-card-header><shadcn-card-title>Team plan</shadcn-card-title><shadcn-card-description>For growing teams.</shadcn-card-description></shadcn-card-header>
  <shadcn-card-content>$29 per month</shadcn-card-content>
  <shadcn-card-footer><shadcn-button>Choose plan</shadcn-button></shadcn-card-footer>
</shadcn-card>`],
  checkbox: ['Checkbox', 'A form control for an independent boolean choice.', 'one or more options that may each be selected independently', 'the choice takes effect immediately and represents on/off state; use Switch', `<label><shadcn-checkbox name="updates" value="yes"></shadcn-checkbox> Email me updates</label>`],
  collapsible: ['Collapsible', 'A disclosure that shows or hides one content region.', 'optional details controlled by one trigger', 'managing several related disclosure sections; use Accordion', `<shadcn-collapsible>
  <shadcn-collapsible-trigger>Show advanced settings</shadcn-collapsible-trigger>
  <shadcn-collapsible-content>Advanced settings go here.</shadcn-collapsible-content>
</shadcn-collapsible>`],
  'context-menu': ['Context Menu', 'A command menu opened from a context-menu gesture.', 'pointer or keyboard actions specific to a target item or canvas', 'the commands must be discoverable as primary actions', `<shadcn-context-menu>
  <div>Right-click this file</div>
  <shadcn-context-menu-content slot="menu">
    <shadcn-context-menu-item>Rename</shadcn-context-menu-item>
    <shadcn-context-menu-separator></shadcn-context-menu-separator>
    <shadcn-context-menu-item>Delete</shadcn-context-menu-item>
  </shadcn-context-menu-content>
</shadcn-context-menu>`],
  dialog: ['Dialog', 'A modal window for focused content or a short task.', 'forms, details, or workflows that temporarily interrupt the page', 'confirming a destructive action; use Alert Dialog', `<shadcn-dialog>
  <shadcn-dialog-trigger>Edit profile</shadcn-dialog-trigger>
  <shadcn-dialog-content>
    <shadcn-dialog-header><shadcn-dialog-title>Edit profile</shadcn-dialog-title><shadcn-dialog-description>Update your public details.</shadcn-dialog-description></shadcn-dialog-header>
    <shadcn-dialog-footer><shadcn-dialog-close>Done</shadcn-dialog-close></shadcn-dialog-footer>
  </shadcn-dialog-content>
</shadcn-dialog>`],
  drawer: ['Drawer', 'A modal panel that enters from an edge, optimized for compact screens.', 'mobile-first supporting tasks, filters, or details', 'persistent navigation or desktop utility panels; use Sidebar or Sheet', `<shadcn-drawer>
  <shadcn-drawer-trigger>Open filters</shadcn-drawer-trigger>
  <shadcn-drawer-content direction="bottom">
    <shadcn-drawer-header><shadcn-drawer-title>Filters</shadcn-drawer-title><shadcn-drawer-description>Narrow the results.</shadcn-drawer-description></shadcn-drawer-header>
    <shadcn-drawer-footer><shadcn-drawer-close>Apply</shadcn-drawer-close></shadcn-drawer-footer>
  </shadcn-drawer-content>
</shadcn-drawer>`],
  'dropdown-menu': ['Dropdown Menu', 'A button-triggered menu of commands or choices.', 'compact secondary actions associated with a visible trigger', 'selecting a form value; use Select or Native Select', `<shadcn-dropdown-menu>
  <shadcn-dropdown-menu-trigger>Actions</shadcn-dropdown-menu-trigger>
  <shadcn-dropdown-menu-content align="end">
    <shadcn-dropdown-menu-item>Edit</shadcn-dropdown-menu-item>
    <shadcn-dropdown-menu-item>Duplicate</shadcn-dropdown-menu-item>
  </shadcn-dropdown-menu-content>
</shadcn-dropdown-menu>`],
  empty: ['Empty', 'A composed empty-state message with optional icon and action.', 'explaining an empty collection, search result, or first-use state', 'the interface is loading; use Skeleton or Spinner', `<shadcn-empty heading="No projects" description="Create your first project to get started.">
  <shadcn-button slot="action">Create project</shadcn-button>
</shadcn-empty>`],
  field: ['Field', 'A form-field wrapper for labels, help text, and validation errors.', 'giving a control a consistent accessible presentation and validation context', 'laying out unrelated prose or controls', `<shadcn-field label="Email" helper="We will never share it." required>
  <shadcn-input type="email" name="email" required></shadcn-input>
</shadcn-field>`],
  'hover-card': ['Hover Card', 'A non-modal preview revealed by hover or keyboard focus.', 'supplementary previews for links, people, or referenced entities', 'essential information or actions that must work well on touch; keep them inline or use Popover', `<shadcn-hover-card>
  <shadcn-hover-card-trigger><a href="/people/ada">Ada Lovelace</a></shadcn-hover-card-trigger>
  <shadcn-hover-card-content side="top">Mathematician and writer</shadcn-hover-card-content>
</shadcn-hover-card>`],
  input: ['Input', 'A single-line text-like form control.', 'short text, email, password, number, search, or related scalar values', 'multi-line prose; use Textarea', `<shadcn-field label="Email" required>
  <shadcn-input type="email" name="email" autocomplete="email" required></shadcn-input>
</shadcn-field>`],
  'input-otp': ['Input OTP', 'A form-associated control for fixed-length one-time codes.', 'verification, authentication, or recovery codes', 'passwords, PIN setup, or arbitrary numeric input', `<shadcn-input-otp name="code" length="6" mode="numeric" aria-label="Verification code" required></shadcn-input-otp>`],
  'input-group': ['Input Group', 'A layout wrapper for an input with prefix or suffix content.', 'units, icons, actions, or fixed text attached to a form control', 'several independent form fields need grouping', `<shadcn-input-group>
  <span slot="prefix">https://</span>
  <shadcn-input name="domain" aria-label="Domain"></shadcn-input>
  <span slot="suffix">.com</span>
</shadcn-input-group>`],
  item: ['Item', 'A selectable or actionable row with optional leading and trailing content.', 'settings rows, result lists, command rows, or compact summaries', 'semantic navigation or menu behavior is required; use links or a menu component', `<shadcn-item>
  <span slot="icon" aria-hidden="true">★</span>
  Starred project
  <shadcn-badge slot="suffix">New</shadcn-badge>
</shadcn-item>`],
  kbd: ['Kbd', 'A visual representation of keyboard input.', 'documenting shortcuts, keys, or command hints', 'creating an interactive keyboard-like button', `<span>Save with <shadcn-kbd>Ctrl</shadcn-kbd> + <shadcn-kbd>S</shadcn-kbd></span>`],
  label: ['Label', 'A visible label associated with a form control.', 'naming a control when Field is unnecessary', 'displaying general text or headings', `<shadcn-label for="display-name">Display name</shadcn-label>
<shadcn-input id="display-name" name="displayName"></shadcn-input>`],
  menubar: ['Menubar', 'A desktop-style horizontal set of command menus.', 'dense application commands organized under persistent top-level categories', 'ordinary site navigation; use Navigation Menu', `<shadcn-menubar>
  <shadcn-menubar-menu>
    <shadcn-menubar-trigger>File</shadcn-menubar-trigger>
    <shadcn-menubar-content>
      <shadcn-menubar-item>New <span slot="shortcut">⌘N</span></shadcn-menubar-item>
      <shadcn-menubar-item>Open</shadcn-menubar-item>
    </shadcn-menubar-content>
  </shadcn-menubar-menu>
</shadcn-menubar>`],
  'native-select': ['Native Select', 'A styled wrapper around a native HTML select.', 'simple form selection where native platform behavior and mobile pickers are preferred', 'rich option content or custom popup behavior is required; use Select', `<shadcn-native-select name="country" required>
  <option value="">Choose a country</option>
  <option value="gb">United Kingdom</option>
  <option value="us">United States</option>
</shadcn-native-select>`],
  'navigation-menu': ['Navigation Menu', 'A structured site-navigation menu with expandable panels.', 'top-level product or marketing navigation with grouped destinations', 'application commands; use Menubar or Dropdown Menu', `<shadcn-navigation-menu>
  <shadcn-navigation-menu-list>
    <shadcn-navigation-menu-item>
      <shadcn-navigation-menu-trigger>Products</shadcn-navigation-menu-trigger>
      <shadcn-navigation-menu-content><shadcn-navigation-menu-link href="/analytics">Analytics</shadcn-navigation-menu-link></shadcn-navigation-menu-content>
    </shadcn-navigation-menu-item>
  </shadcn-navigation-menu-list>
</shadcn-navigation-menu>`],
  popover: ['Popover', 'A non-modal floating surface anchored to a trigger.', 'compact interactive content such as filters, pickers, or supplemental controls', 'the content is a list of commands; use Dropdown Menu', `<shadcn-popover>
  <shadcn-popover-trigger>Choose date</shadcn-popover-trigger>
  <shadcn-popover-content>Calendar or controls go here.</shadcn-popover-content>
</shadcn-popover>`],
  progress: ['Progress', 'A visual indicator of determinate task completion.', 'showing known completion as a value between zero and a maximum', 'duration or completion is unknown; use Spinner', `<shadcn-progress value="65" max="100" aria-label="Upload progress"></shadcn-progress>`],
  'radio-group': ['Radio Group', 'A form control for choosing exactly one option from a visible set.', 'a small set of mutually exclusive options that benefit from comparison', 'zero or multiple options may be selected; use Checkbox', `<shadcn-radio-group name="plan" value="pro" aria-label="Plan">
  <shadcn-radio value="free">Free</shadcn-radio>
  <shadcn-radio value="pro">Pro</shadcn-radio>
</shadcn-radio-group>`],
  select: ['Select', 'A form-associated custom popup for choosing one option.', 'single selection that needs styled options and keyboard navigation', 'native mobile behavior is preferable; use Native Select', `<shadcn-select name="role" placeholder="Choose a role" required>
  <shadcn-select-trigger><shadcn-select-value></shadcn-select-value></shadcn-select-trigger>
  <shadcn-select-content>
    <shadcn-select-item value="admin">Administrator</shadcn-select-item>
    <shadcn-select-item value="member">Member</shadcn-select-item>
  </shadcn-select-content>
</shadcn-select>`],
  separator: ['Separator', 'A horizontal or vertical visual divider.', 'separating related groups where spacing alone is insufficient', 'a heading or stronger semantic boundary is needed', `<shadcn-separator orientation="horizontal" decorative></shadcn-separator>`],
  sheet: ['Sheet', 'A modal panel that slides from a chosen screen edge.', 'desktop forms, details, filters, or navigation that should retain page context', 'the panel should remain persistently visible; use Sidebar', `<shadcn-sheet>
  <shadcn-sheet-trigger>Open settings</shadcn-sheet-trigger>
  <shadcn-sheet-content side="right">
    <shadcn-sheet-header><shadcn-sheet-title>Settings</shadcn-sheet-title><shadcn-sheet-description>Update workspace preferences.</shadcn-sheet-description></shadcn-sheet-header>
    <shadcn-sheet-footer><shadcn-sheet-close>Done</shadcn-sheet-close></shadcn-sheet-footer>
  </shadcn-sheet-content>
</shadcn-sheet>`],
  sidebar: ['Sidebar', 'A persistent, optionally collapsed side-region container.', 'application navigation or tools that remain available beside main content', 'temporary or modal supporting content; use Sheet or Drawer', `<shadcn-sidebar>
  <nav aria-label="Primary"><a href="/dashboard">Dashboard</a><a href="/settings">Settings</a></nav>
</shadcn-sidebar>`],
  skeleton: ['Skeleton', 'A placeholder that approximates content while it loads.', 'preserving layout and communicating the shape of incoming content', 'a short action has no meaningful content shape; use Spinner', `<shadcn-skeleton variant="text" width="12rem" height="1rem"></shadcn-skeleton>`],
  slider: ['Slider', 'A form control for selecting a numeric value from a range.', 'approximate numeric choices where visual position aids understanding', 'the user must enter an exact arbitrary number; use Input', `<shadcn-slider name="volume" min="0" max="100" step="5" value="50"></shadcn-slider>`],
  spinner: ['Spinner', 'An indeterminate indicator for an in-progress operation.', 'short operations whose completion percentage is unknown', 'loading a structured page region; use Skeleton', `<shadcn-spinner size="md" aria-label="Saving"></shadcn-spinner>`],
  switch: ['Switch', 'A form control that immediately toggles a setting on or off.', 'binary settings whose effects occur immediately', 'selecting values for later form submission; use Checkbox', `<label><shadcn-switch name="notifications" value="enabled"></shadcn-switch> Notifications</label>`],
  table: ['Table', 'A set of components for semantic tabular data.', 'data whose row and column relationships are essential', 'layout, cards, or a simple unstructured list', `<shadcn-table>
  <shadcn-table-caption>Recent invoices</shadcn-table-caption>
  <shadcn-table-header><shadcn-table-row><shadcn-table-head>Invoice</shadcn-table-head><shadcn-table-head>Total</shadcn-table-head></shadcn-table-row></shadcn-table-header>
  <shadcn-table-body><shadcn-table-row><shadcn-table-cell>INV-001</shadcn-table-cell><shadcn-table-cell>$250</shadcn-table-cell></shadcn-table-row></shadcn-table-body>
</shadcn-table>`],
  tabs: ['Tabs', 'A set of layered panels where one panel is visible at a time.', 'switching between peer views within the same context', 'content should be scanned or compared simultaneously', `<shadcn-tabs value="account">
  <shadcn-tabs-list><shadcn-tabs-trigger value="account">Account</shadcn-tabs-trigger><shadcn-tabs-trigger value="security">Security</shadcn-tabs-trigger></shadcn-tabs-list>
  <shadcn-tabs-content value="account">Account settings</shadcn-tabs-content>
  <shadcn-tabs-content value="security">Security settings</shadcn-tabs-content>
</shadcn-tabs>`],
  textarea: ['Textarea', 'A multi-line text form control.', 'messages, descriptions, notes, or other free-form prose', 'short single-line values; use Input', `<shadcn-field label="Message">
  <shadcn-textarea name="message" rows="5" maxlength="500"></shadcn-textarea>
</shadcn-field>`],
  toggle: ['Toggle', 'A pressable control with an on/off pressed state.', 'toolbar actions such as bold, mute, pin, or favorite', 'changing a persistent setting; use Switch', `<shadcn-toggle value="bold" aria-label="Bold">B</shadcn-toggle>`],
  'toggle-group': ['Toggle Group', 'A coordinated group of single- or multiple-selection toggles.', 'compact toolbar choices or segmented selection', 'options need long labels or explanation; use Radio Group or Checkbox', `<shadcn-toggle-group type="single" value="center" aria-label="Alignment">
  <shadcn-toggle value="left">Left</shadcn-toggle>
  <shadcn-toggle value="center">Center</shadcn-toggle>
  <shadcn-toggle value="right">Right</shadcn-toggle>
</shadcn-toggle-group>`],
  tooltip: ['Tooltip', 'A brief, non-interactive label shown on hover or focus.', 'clarifying an unfamiliar icon or terse control', 'content is essential, lengthy, or interactive; keep it visible or use Popover', `<shadcn-tooltip>
  <shadcn-tooltip-trigger><shadcn-button size="icon" aria-label="Archive">⌄</shadcn-button></shadcn-tooltip-trigger>
  <shadcn-tooltip-content side="top">Archive</shadcn-tooltip-content>
</shadcn-tooltip>`],
  typography: ['Typography', 'A semantic text element with consistent type styles.', 'headings, paragraphs, quotations, code, leads, and muted text that follow the design system', 'text needs component-specific semantics or interaction', `<shadcn-typography variant="h2">Project settings</shadcn-typography>
<shadcn-typography variant="muted">Changes apply to every member.</shadcn-typography>`],
};

const accessibility = {
  'alert-dialog': 'Always include a title and description. Initial focus is trapped in the modal; Escape is intentionally not the primary dismissal path for consequential decisions.',
  dialog: 'Always include `shadcn-dialog-title`; add a description when it improves context. Focus is trapped while open and returned to the trigger on close.',
  drawer: 'Give every drawer a title, and normally a description. Focus is trapped while open and restored on close.',
  sheet: 'Give every sheet a title, and normally a description. Focus is trapped while open and restored on close.',
  tooltip: 'The trigger must remain understandable without hover. Tooltips also open on keyboard focus and are not a place for interactive content.',
  'hover-card': 'The trigger must be focusable so keyboard users can reveal the preview. Do not place required actions only inside the card.',
  'context-menu': 'Provide another discoverable route to important commands. Context-menu gestures are not obvious to every user.',
  progress: 'Supply a concise `aria-label`, and keep `value` and `max` synchronized with real progress.',
  spinner: 'Supply an accessible label when the surrounding live-region text does not already announce the operation.',
  skeleton: 'Treat skeletons as presentational and ensure the loading region communicates its busy state separately.',
  separator: 'Use `decorative` when the divider is purely visual. Use a semantic separator only when it conveys a real boundary.',
  table: 'Use header cells for column or row labels and provide a caption when the table purpose is not already clear from nearby text.',
  default: 'Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing `disabled="false"`.',
};

const extraRules = {
  button: ['Set `type="button"` unless the button should submit or reset a form.', 'Do not rely on color alone to distinguish destructive actions.'],
  checkbox: ['Listen for `checkbox-change` or read the form value; do not attach behavior to shadow-DOM internals.', 'Do not use one checkbox to represent a mutually exclusive group.'],
  input: ['Use the reflected attributes for initial markup and the `.value` property for live programmatic updates.', 'Do not use placeholder text as the only label.'],
  textarea: ['Use `.value` for live programmatic updates and `textarea-change` for user edits.', 'Do not use placeholder text as the only label.'],
  select: ['Keep every item `value` unique and include the trigger, value, content, and items in the documented hierarchy.', 'Do not put arbitrary interactive controls inside an option.'],
  tabs: ['Give every trigger and its content the same unique `value`.', 'Do not nest unrelated controls inside the tab list.'],
  accordion: ['Give every item a stable unique `value`.', 'Do not hide information users must read to complete the current task.'],
  'native-select': ['Place native `<option>` elements in the default slot.', 'Do not expect rich HTML inside native options.'],
  'input-group': ['The prefix and suffix are visual; ensure the contained input still has an accessible label.', 'Do not place multiple primary inputs in one input group.'],
};

const elementMap = new Map();
for (const module of manifest.modules ?? []) {
  if (!module.path.startsWith('src/components/') || module.path.includes('/_internal/')) continue;
  const slug = module.path.split('/')[2];
  for (const declaration of module.declarations ?? []) {
    if (declaration.customElement && declaration.tagName) {
      if (!elementMap.has(slug)) elementMap.set(slug, []);
      elementMap.get(slug).push(declaration);
    }
  }
}

const esc = (value = '') => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const code = (value) => value == null || value === '' ? '—' : `\`${esc(value)}\``;
const table = (headers, rows) => {
  if (!rows.length) return '_None._';
  return `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n${rows.map(row => `| ${row.join(' | ')} |`).join('\n')}`;
};

function renderElement(element) {
  const attrs = (element.attributes ?? []).map(attribute => [
    code(attribute.name), code(attribute.type?.text), code(attribute.default), esc(attribute.description || 'No description provided.'),
  ]);
  const events = (element.events ?? []).map(event => [
    code(event.name), code(event.type?.text || 'CustomEvent'), esc(event.description || 'Emitted by this element.'),
  ]);
  const slots = (element.slots ?? []).map(slot => [
    code(slot.name || 'default'), esc(slot.description || 'Element content.'),
  ]);
  const css = (element.cssProperties ?? []).map(prop => [code(prop.name), esc(prop.description || 'Style override.')]);
  return `### \`<${element.tagName}>\`\n\n${element.description || 'Part of this component family.'}\n\n**Attributes**\n\n${table(['Attribute', 'Type', 'Default', 'Purpose'], attrs)}\n\n**Events**\n\n${table(['Event', 'Type', 'When'], events)}\n\n**Slots**\n\n${table(['Slot', 'Purpose'], slots)}\n\n**CSS custom properties**\n\n${table(['Property', 'Purpose'], css)}`;
}

function renderGuide(slug, meta, elements) {
  const [name, summary, when, avoid, example] = meta;
  const tags = elements.map(element => `\`<${element.tagName}>\``).join(', ');
  const rules = extraRules[slug] ?? [
    'Prefer the component’s public attributes, properties, events, and slots over reaching into its shadow root.',
    'Do not recreate built-in component state with parallel classes or hidden DOM.',
  ];
  return `# ${name}\n\n> ${summary}\n\n- **Package:** \`@billy_mcdowell/shadcn-web-components/${slug}\`\n- **Elements:** ${tags}\n- **Source:** [${slug}.ts](./${slug}.ts)\n- **Stories:** [${slug}.stories.ts](./${slug}.stories.ts)\n\n## When to use\n\nUse ${name} for ${when}.\n\nDo not use it when ${avoid}.\n\n## Import\n\nImporting the component subpath registers every custom element in this component family:\n\n\`\`\`js\nimport '@billy_mcdowell/shadcn-web-components/${slug}';\n\`\`\`\n\nThe package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).\n\n## Example\n\n\`\`\`html\n${example}\n\`\`\`\n\nFor Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.\n\n## Accessibility\n\n${accessibility[slug] ?? accessibility.default}\n\n## Do\n\n- ${rules[0]}\n- Keep the element hierarchy shown in the example when this is a compound component.\n- Listen to the documented public custom events at the component boundary.\n\n## Don't\n\n- ${rules[1]}\n- Do not query or style private nodes inside the shadow root.\n- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.\n\n## Public API\n\n${elements.map(renderElement).join('\n\n')}\n\n## Agent checklist\n\n1. Import the \`/${slug}\` subpath exactly once in the application bundle.\n2. Use the documented element hierarchy and give interactive controls visible or accessible names.\n3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.\n4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.\n5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.\n`;
}

const missing = Object.keys(components).filter(slug => !elementMap.has(slug));
const undocumented = [...elementMap.keys()].filter(slug => !components[slug]);
if (missing.length || undocumented.length) {
  throw new Error(`Documentation metadata mismatch. Missing: ${missing.join(', ') || 'none'}; undocumented: ${undocumented.join(', ') || 'none'}`);
}

for (const [slug, meta] of Object.entries(components)) {
  await writeFile(path.join(root, 'src', 'components', slug, 'llms.md'), renderGuide(slug, meta, elementMap.get(slug)), 'utf8');
  const storybookGuide = `import { Markdown, Meta } from '@storybook/addon-docs/blocks';
import guide from './llms.md?raw';

<Meta title="Component Guides/${meta[0]}" />

<Markdown>{guide}</Markdown>
`;
  await writeFile(path.join(root, 'src', 'components', slug, 'guide.mdx'), storybookGuide, 'utf8');
}

const categories = [
  ['Actions and selection', ['button', 'button-group', 'checkbox', 'radio-group', 'select', 'native-select', 'slider', 'switch', 'toggle', 'toggle-group']],
  ['Forms', ['field', 'input', 'textarea', 'input-otp', 'input-group', 'label']],
  ['Overlays and disclosure', ['accordion', 'alert-dialog', 'collapsible', 'context-menu', 'dialog', 'drawer', 'dropdown-menu', 'hover-card', 'popover', 'sheet', 'tooltip']],
  ['Navigation', ['breadcrumb', 'menubar', 'navigation-menu', 'sidebar', 'tabs']],
  ['Data and content', ['alert', 'aspect-ratio', 'avatar', 'badge', 'card', 'empty', 'item', 'kbd', 'separator', 'table', 'typography']],
  ['Feedback', ['progress', 'skeleton', 'spinner']],
];

const index = `# shadcn Web Components: agent index\n\n> AI-oriented routing and usage documentation for \`@billy_mcdowell/shadcn-web-components\`, a Lit-based custom-element library.\n\n## Start here\n\n- Install: \`npm install @billy_mcdowell/shadcn-web-components\`\n- Register one family: \`import '@billy_mcdowell/shadcn-web-components/button';\`\n- Register everything: \`import '@billy_mcdowell/shadcn-web-components';\`\n- Elements use the \`shadcn-\` prefix and work in plain HTML, Lit, React, Vue, Svelte, and other environments that support custom elements.\n- Load \`src/styles/tokens.css\` once for the default design tokens. \`src/styles/reset.css\` is optional. The \`/styles\` JavaScript export contains Lit CSS helpers; it does not install the global token stylesheet.\n- Boolean attributes are true when present. Omit \`disabled\`, \`open\`, \`required\`, and similar attributes for false; never write \`disabled="false"\`.\n- Use DOM properties for live values, DOM events for changes, slots for composition, and CSS custom properties for supported theming. Do not reach into component shadow roots.\n\n## Component chooser\n\n${categories.map(([heading, slugs]) => `### ${heading}\n\n${slugs.map(slug => `- [${components[slug][0]}](./src/components/${slug}/llms.md): ${components[slug][1]}`).join('\n')}`).join('\n\n')}\n\n## Framework usage\n\n### Plain HTML or JavaScript\n\n\`\`\`html\n<script type="module">\n  import '@billy_mcdowell/shadcn-web-components/button';\n<\/script>\n<shadcn-button id="save">Save</shadcn-button>\n<script>\n  document.querySelector('#save').addEventListener('button-click', () => save());\n<\/script>\n\`\`\`\n\n### Lit\n\n\`\`\`ts\nimport { html } from 'lit';\nimport '@billy_mcdowell/shadcn-web-components/input';\n\nconst view = (value, onChange) => html\`\n  <shadcn-input\n    .value=\${value}\n    @input-change=\${onChange}\n  ></shadcn-input>\n\`;\n\`\`\`\n\n### React and JSX\n\nImport the registration subpath, use lowercase custom-element tags, and attach custom events through a ref/effect when the framework version does not map unknown \`on*\` props to DOM events. Pass live complex values through element properties. TypeScript JSX projects may need local custom-element intrinsic-element declarations derived from \`custom-elements.json\`.\n\n## Choosing related components\n\n- **Dialog vs Alert Dialog:** Dialog is general modal content; Alert Dialog requires an explicit decision for consequential actions.\n- **Sheet vs Drawer vs Sidebar:** Sheet is an edge modal, Drawer is a compact-screen/modal task surface, and Sidebar is persistent page structure.\n- **Select vs Native Select vs Radio Group:** Select is a custom popup, Native Select prioritizes platform behavior, and Radio Group keeps a small choice set visible.\n- **Checkbox vs Switch vs Toggle:** Checkbox records a form choice, Switch immediately changes a setting, and Toggle represents a pressed toolbar action.\n- **Dropdown Menu vs Context Menu vs Menubar:** Dropdown Menu has a visible trigger, Context Menu is target-specific and gesture-opened, and Menubar exposes persistent desktop-style command categories.\n- **Tooltip vs Hover Card vs Popover:** Tooltip is short non-interactive help, Hover Card is a preview, and Popover holds interactive supplemental content.\n- **Skeleton vs Spinner vs Progress:** Skeleton previews content shape, Spinner represents unknown duration, and Progress represents measurable completion.\n\n## Machine-readable API\n\nThe package includes \`custom-elements.json\`, the authoritative Custom Elements Manifest for tags, attributes, properties, events, slots, and CSS custom properties. The per-component guides combine that generated API with human decision guidance and examples. Regenerate them after updating the manifest with:\n\n\`\`\`sh\nnpm run docs:llms\n\`\`\`\n`;

await writeFile(path.join(root, 'llms.txt'), index, 'utf8');
const storybookIndex = `import { Markdown, Meta } from '@storybook/addon-docs/blocks';
import guide from '../llms.txt?raw';

<Meta title="Component Guides/Overview" />

<Markdown>{guide}</Markdown>
`;

await writeFile(path.join(root, 'src', 'llms.mdx'), storybookIndex, 'utf8');
console.log(`Generated llms.txt, its Storybook overview, ${Object.keys(components).length} component guides, and their Storybook pages.`);
