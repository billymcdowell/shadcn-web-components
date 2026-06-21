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
  calendar: ['Calendar', 'An accessible single-date calendar with month navigation.', 'inline date grids, popover content, or custom date-selection UIs', 'a compact labeled form field with validation; use Date Picker', `<shadcn-calendar value="2026-06-21" month="2026-06" min="2026-01-01" max="2026-12-31"></shadcn-calendar>`],
  card: ['Card', 'A visual container that groups related content and actions.', 'summaries, previews, settings groups, or dashboard modules', 'ordinary page sections do not need visual containment', `<shadcn-card>
  <shadcn-card-header><shadcn-card-title>Team plan</shadcn-card-title><shadcn-card-description>For growing teams.</shadcn-card-description></shadcn-card-header>
  <shadcn-card-content>$29 per month</shadcn-card-content>
  <shadcn-card-footer><shadcn-button>Choose plan</shadcn-button></shadcn-card-footer>
</shadcn-card>`],
  carousel: ['Carousel', 'A scrollable gallery of slides with previous and next controls.', 'featured content, image galleries, or step previews shown one viewport at a time', 'comparing all items simultaneously; use a grid, list, or Tabs', `<shadcn-carousel label="Featured items">
  <shadcn-carousel-content>
    <shadcn-carousel-item>Slide 1</shadcn-carousel-item>
    <shadcn-carousel-item>Slide 2</shadcn-carousel-item>
  </shadcn-carousel-content>
  <shadcn-carousel-previous></shadcn-carousel-previous>
  <shadcn-carousel-next></shadcn-carousel-next>
</shadcn-carousel>`],
  chart: ['Chart', 'A responsive Chart.js visualization using the shadcn chart palette.', 'quantitative trends, comparisons, or distributions that benefit from a canvas chart', 'a single scalar value or known completion percentage; use Progress or typography', `<shadcn-chart type="bar" aria-label="Monthly visitors"></shadcn-chart>`],
  checkbox: ['Checkbox', 'A form control for an independent boolean choice.', 'one or more options that may each be selected independently', 'the choice takes effect immediately and represents on/off state; use Switch', `<label><shadcn-checkbox name="updates" value="yes"></shadcn-checkbox> Email me updates</label>`],
  collapsible: ['Collapsible', 'A disclosure that shows or hides one content region.', 'optional details controlled by one trigger', 'managing several related disclosure sections; use Accordion', `<shadcn-collapsible>
  <shadcn-collapsible-trigger>Show advanced settings</shadcn-collapsible-trigger>
  <shadcn-collapsible-content>Advanced settings go here.</shadcn-collapsible-content>
</shadcn-collapsible>`],
  combobox: ['Combobox', 'A filterable, form-associated single-select with typeahead.', 'choosing one option from a longer list where typing to filter helps discovery', 'a short fixed set of mutually exclusive options; use Select or Radio Group', `<shadcn-combobox name="framework" placeholder="Select a framework">
  <shadcn-combobox-input></shadcn-combobox-input>
  <shadcn-combobox-content>
    <shadcn-combobox-empty>No framework found.</shadcn-combobox-empty>
    <shadcn-combobox-item value="next.js" keywords="react">Next.js</shadcn-combobox-item>
    <shadcn-combobox-item value="sveltekit">SvelteKit</shadcn-combobox-item>
    <shadcn-combobox-item value="nuxt.js" keywords="vue">Nuxt.js</shadcn-combobox-item>
  </shadcn-combobox-content>
</shadcn-combobox>`],
  command: ['Command', 'A searchable, keyboard-navigable command menu.', 'power-user workflows, application search, or action pickers filtered by typing', 'a small static choice set without search; use Select, Combobox, or Dropdown Menu', `<shadcn-command>
  <shadcn-command-input placeholder="Type a command or search..."></shadcn-command-input>
  <shadcn-command-list>
    <shadcn-command-empty>No results found.</shadcn-command-empty>
    <shadcn-command-group heading="Suggestions">
      <shadcn-command-item value="calendar">Calendar</shadcn-command-item>
      <shadcn-command-item value="settings">Settings <shadcn-command-shortcut>⌘S</shadcn-command-shortcut></shadcn-command-item>
    </shadcn-command-group>
  </shadcn-command-list>
</shadcn-command>`],
  'context-menu': ['Context Menu', 'A command menu opened from a context-menu gesture.', 'pointer or keyboard actions specific to a target item or canvas', 'the commands must be discoverable as primary actions', `<shadcn-context-menu>
  <div>Right-click this file</div>
  <shadcn-context-menu-content slot="menu">
    <shadcn-context-menu-item>Rename</shadcn-context-menu-item>
    <shadcn-context-menu-separator></shadcn-context-menu-separator>
    <shadcn-context-menu-item>Delete</shadcn-context-menu-item>
  </shadcn-context-menu-content>
</shadcn-context-menu>`],
  'data-table': ['Data Table', 'A sortable, filterable, paginated table for structured row data.', 'interactive tabular data with sorting, filtering, pagination, or row selection', 'static semantic tables without built-in data behavior; use Table', `<shadcn-data-table page-size="5" selectable filter-placeholder="Filter emails..."></shadcn-data-table>`],
  'date-picker': ['Date Picker', 'A form-associated date field with calendar popup and validation.', 'choosing one date in a form with min/max constraints and native validity reporting', 'an inline calendar grid without a trigger; use Calendar', `<shadcn-field label="Start date" required>
  <shadcn-date-picker name="startDate" placeholder="Pick a date" min="2026-01-01" required></shadcn-date-picker>
</shadcn-field>`],
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
  pagination: ['Pagination', 'Navigation links for moving between paged result sets.', 'splitting long lists or tables across numbered pages with previous and next controls', 'in-table paging with built-in controls; use Data Table', `<shadcn-pagination>
  <shadcn-pagination-content>
    <shadcn-pagination-item><shadcn-pagination-previous href="?page=1"></shadcn-pagination-previous></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-link href="?page=1">1</shadcn-pagination-link></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-link href="?page=2" current>2</shadcn-pagination-link></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-ellipsis></shadcn-pagination-ellipsis></shadcn-pagination-item>
    <shadcn-pagination-item><shadcn-pagination-next href="?page=3"></shadcn-pagination-next></shadcn-pagination-item>
  </shadcn-pagination-content>
</shadcn-pagination>`],
  popover: ['Popover', 'A non-modal floating surface anchored to a trigger.', 'compact interactive content such as filters, pickers, or supplemental controls', 'the content is a list of commands; use Dropdown Menu', `<shadcn-popover>
  <shadcn-popover-trigger>Choose date</shadcn-popover-trigger>
  <shadcn-popover-content>Calendar or controls go here.</shadcn-popover-content>
</shadcn-popover>`],
  progress: ['Progress', 'A visual indicator of determinate task completion.', 'showing known completion as a value between zero and a maximum', 'duration or completion is unknown; use Spinner', `<shadcn-progress value="65" max="100" aria-label="Upload progress"></shadcn-progress>`],
  'radio-group': ['Radio Group', 'A form control for choosing exactly one option from a visible set.', 'a small set of mutually exclusive options that benefit from comparison', 'zero or multiple options may be selected; use Checkbox', `<shadcn-radio-group name="plan" value="pro" aria-label="Plan">
  <shadcn-radio value="free">Free</shadcn-radio>
  <shadcn-radio value="pro">Pro</shadcn-radio>
</shadcn-radio-group>`],
  resizable: ['Resizable', 'An accessible split layout with draggable panel handles.', 'IDE-style sidebars, split editors, or adjustable multi-pane layouts', 'temporary modal panels; use Sheet or Drawer', `<shadcn-resizable-panel-group style="height: 12.5rem; max-width: 48rem;">
  <shadcn-resizable-panel default-size="50"><div>One</div></shadcn-resizable-panel>
  <shadcn-resizable-handle with-handle></shadcn-resizable-handle>
  <shadcn-resizable-panel default-size="50"><div>Two</div></shadcn-resizable-panel>
</shadcn-resizable-panel-group>`],
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
  sonner: ['Sonner', 'A notification host for brief, non-blocking feedback.', 'confirming completed actions or reporting transient application status', 'the message must remain available or requires a blocking decision; use visible content or Alert Dialog', `<shadcn-sonner position="bottom-right" rich-colors close-button></shadcn-sonner>`],
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
  calendar: 'Dates use ISO `YYYY-MM-DD` strings. Arrow keys move between days; Page Up/Down change months. Keep `min` and `max` synchronized with business rules.',
  carousel: 'Provide a descriptive `label` for the carousel region. Previous and next controls must remain keyboard reachable.',
  chart: 'Set `aria-label` (the `label` property) to describe the visualization. Do not rely on color alone to distinguish series.',
  combobox: 'Include `shadcn-combobox-input` and `shadcn-combobox-content` in the documented hierarchy. Provide `shadcn-combobox-empty` when filtering can return no matches.',
  command: 'Keep the input, list, empty state, groups, and items in the documented hierarchy. Arrow keys, Home, End, and Enter navigate enabled visible items.',
  'data-table': 'Column headers must describe the data. Loading and empty states should be understandable from surrounding text or the configured empty message.',
  'date-picker': 'Pair with Field or supply an accessible name. The trigger exposes `aria-haspopup="dialog"` and `aria-expanded`. Validation messages surface through native form validity APIs.',
  pagination: 'Mark the current page with the `current` attribute on `shadcn-pagination-link`. Disable `shadcn-pagination-previous` on the first page.',
  resizable: 'Handles remain keyboard operable. Do not remove visible focus indicators on drag handles.',
  'alert-dialog': 'Always include a title and description. Initial focus is trapped in the modal; Escape is intentionally not the primary dismissal path for consequential decisions.',
  dialog: 'Always include `shadcn-dialog-title`; add a description when it improves context. Focus is trapped while open and returned to the trigger on close.',
  drawer: 'Give every drawer a title, and normally a description. Focus is trapped while open and restored on close.',
  sheet: 'Give every sheet a title, and normally a description. Focus is trapped while open and restored on close.',
  tooltip: 'The trigger must remain understandable without hover. Tooltips also open on keyboard focus and are not a place for interactive content.',
  'hover-card': 'The trigger must be focusable so keyboard users can reveal the preview. Do not place required actions only inside the card.',
  'context-menu': 'Provide another discoverable route to important commands. Context-menu gestures are not obvious to every user.',
  progress: 'Supply a concise `aria-label`, and keep `value` and `max` synchronized with real progress.',
  sonner: 'Mount one host. Notifications use live-region semantics; do not wrap the host in another live region. Alt+T focuses notifications and Escape dismisses the newest.',
  spinner: 'Supply an accessible label when the surrounding live-region text does not already announce the operation.',
  skeleton: 'Treat skeletons as presentational and ensure the loading region communicates its busy state separately.',
  separator: 'Use `decorative` when the divider is purely visual. Use a semantic separator only when it conveys a real boundary.',
  table: 'Use header cells for column or row labels and provide a caption when the table purpose is not already clear from nearby text.',
  default: 'Use visible labels for interactive controls, preserve logical DOM order, and do not remove focus indicators. Boolean attributes are enabled by presence, so omit them rather than writing `disabled="false"`.',
};

const extraRules = {
  calendar: ['Use ISO `YYYY-MM-DD` for `value`, `min`, and `max`; use `YYYY-MM` for `month`. Listen for `calendar-change` and update `value` programmatically with the `.value` property.', 'Do not pass locale-specific display strings as `value`; always use ISO dates.'],
  carousel: ['Keep `shadcn-carousel-content`, items, and navigation controls in the documented hierarchy.', 'Do not nest interactive controls that steal focus from slide navigation unexpectedly.'],
  chart: ['Assign Chart.js `data` and `options` through JavaScript properties, not HTML attributes.', 'Do not mutate chart configuration by reaching into the canvas shadow root.'],
  combobox: ['Keep every `shadcn-combobox-item` `value` unique and include input, content, empty state, and items in the documented hierarchy.', 'Do not omit `shadcn-combobox-input`; the root element coordinates filtering and selection through its slotted children.'],
  command: ['Listen for `command-select` and read `event.detail.value`. Use `shadcn-command-dialog` when the palette should open modally.', 'Do not omit `shadcn-command-empty`; filtering can legitimately return no matches.'],
  'data-table': ['Assign typed `columns` and `data` arrays through JavaScript properties. Listen for the documented `data-table-*` events instead of reimplementing sort or pagination externally unless necessary.', 'Do not serialize complex column definitions into HTML attributes.'],
  'date-picker': ['Use ISO `YYYY-MM-DD` for `value`, `min`, and `max`. Listen for `date-picker-change` and `date-picker-open-change`.', 'Do not use Calendar alone when the UI needs a labeled form field with validation.'],
  pagination: ['Use real `href` values or application routing for page links; mark the active page with `current`.', 'Do not disable every control when only the previous link should be unavailable on page one.'],
  resizable: ['Alternate `shadcn-resizable-panel` and `shadcn-resizable-handle` elements inside `shadcn-resizable-panel-group`.', 'Do not nest scrollable page content inside panels without an explicit height on the panel group.'],
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

const additionalGuides = {
  chart: [
    '## Configure Chart.js data and options',
    '',
    '`data` and `options` are JavaScript objects and must be assigned as element properties. The `type` attribute selects the Chart.js chart type.',
    '',
    '### Plain HTML or JavaScript',
    '',
    '```html',
    '<shadcn-chart type="bar" aria-label="Monthly visitors by device"></shadcn-chart>',
    '',
    '<script type="module">',
    "  import '@billy_mcdowell/shadcn-web-components/chart';",
    '',
    "  const chart = document.querySelector('shadcn-chart');",
    '  chart.data = {',
    "    labels: ['January', 'February', 'March'],",
    '    datasets: [',
    "      { label: 'Desktop', data: [186, 305, 237] },",
    "      { label: 'Mobile', data: [80, 200, 120] },",
    '    ],',
    '  };',
    '  chart.options = {',
    '    plugins: { legend: { position: \'bottom\' } },',
    '    scales: { y: { beginAtZero: true } },',
    '  };',
    '</script>',
    '```',
    '',
    '### Lit',
    '',
    '```ts',
    "import { html } from 'lit';",
    "import '@billy_mcdowell/shadcn-web-components/chart';",
    '',
    'const view = (data, options) => html`',
    '  <shadcn-chart',
    '    type="bar"',
    '    aria-label="Monthly visitors by device"',
    '    .data=${data}',
    '    .options=${options}',
    '  ></shadcn-chart>',
    '`;',
    '```',
  ].join('\n'),
  'data-table': [
    '## Configure columns and row data',
    '',
    'Assign typed `columns` and `data` arrays as JavaScript properties. Use attributes such as `page-size`, `selectable`, `filter-placeholder`, `loading`, and `empty-message` for declarative configuration.',
    '',
    '### Plain HTML or JavaScript',
    '',
    '```html',
    '<shadcn-data-table page-size="5" selectable filter-placeholder="Filter emails..."></shadcn-data-table>',
    '',
    '<script type="module">',
    "  import '@billy_mcdowell/shadcn-web-components/data-table';",
    '',
    "  const table = document.querySelector('shadcn-data-table');",
    '  table.columns = [',
    "    { accessorKey: 'status', header: 'Status', sortable: true },",
    "    { accessorKey: 'email', header: 'Email', sortable: true, filterable: true },",
    "    { accessorKey: 'amount', header: 'Amount', sortable: true, align: 'right', cell: (value) => `$${Number(value).toFixed(2)}` },",
    '  ];',
    '  table.data = [',
    "    { id: '1', status: 'success', email: 'ada@example.com', amount: 316 },",
    "    { id: '2', status: 'processing', email: 'grace@example.com', amount: 837 },",
    '  ];',
    '',
    "  table.addEventListener('data-table-sort-change', (event) => {",
    '    console.log(event.detail);',
    '  });',
    '</script>',
    '```',
    '',
    '### Events to observe',
    '',
    '- `data-table-sort-change` — active sort key and direction',
    '- `data-table-filter-change` — current filter query',
    '- `data-table-page-change` — page, page size, and page count',
    '- `data-table-selection-change` — selected row ids and rows',
    '- `data-table-column-visibility-change` — column visibility toggles',
  ].join('\n'),
  calendar: [
    '## ISO dates and live updates',
    '',
    'Use ISO `YYYY-MM-DD` for `value`, `min`, and `max`, and `YYYY-MM` for `month`. Listen for `calendar-change` and update the selected date through the `.value` property or attribute.',
    '',
    '```js',
    "calendar.addEventListener('calendar-change', (event) => {",
    '  console.log(event.detail.value, event.detail.date);',
    '});',
    '',
    "calendar.addEventListener('calendar-month-change', (event) => {",
    '  console.log(event.detail.month);',
    '});',
    '```',
  ].join('\n'),
  combobox: [
    '## Compound structure and filtering',
    '',
    'The root coordinates keyboard navigation, filtering, and form submission. Required slotted children:',
    '',
    '1. `shadcn-combobox-input` — editable trigger and filter field',
    '2. `shadcn-combobox-content` — popup container for items',
    '3. `shadcn-combobox-empty` — shown when filtering yields no matches',
    '4. One or more `shadcn-combobox-item` elements with unique `value` attributes',
    '',
    'Optional helpers: `shadcn-combobox-group`, `shadcn-combobox-label`, and `shadcn-combobox-separator`.',
    '',
    'Listen for `combobox-change` when the selected item changes and `combobox-open-change` when the popup opens or closes.',
  ].join('\n'),
  sonner: [
    '## Show notifications programmatically',
    '',
    'Mount one `<shadcn-sonner>` host in the application, then import and call the `toast` API from any module. Keep the host mounted for as long as notifications should be available.',
    '',
    '### Vanilla JavaScript with npm or a bundler',
    '',
    '```html',
    '<button id="save" type="button">Save changes</button>',
    '<shadcn-sonner position="bottom-right" rich-colors close-button></shadcn-sonner>',
    '',
    '<script type="module">',
    "  import { toast } from '@billy_mcdowell/shadcn-web-components/sonner';",
    '',
    "  document.querySelector('#save').addEventListener('click', () => {",
    "    toast.success('Changes saved', {",
    "      description: 'Your settings are now up to date.',",
    '    });',
    '  });',
    '</script>',
    '```',
    '',
    '### Plain HTML from a CDN',
    '',
    'When there is no build step, provide an import map for Lit before importing the published Sonner module:',
    '',
    '```html',
    '<link',
    '  rel="stylesheet"',
    '  href="https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/src/styles/tokens.css"',
    '>',
    '',
    '<script type="importmap">',
    '{',
    '  "imports": {',
    '    "lit": "https://esm.sh/lit@3.2.1",',
    '    "lit/decorators.js": "https://esm.sh/lit@3.2.1/decorators.js"',
    '  }',
    '}',
    '</script>',
    '',
    '<button id="notify" type="button">Show notification</button>',
    '<shadcn-sonner position="top-center" close-button></shadcn-sonner>',
    '',
    '<script type="module">',
    "  import { toast } from 'https://cdn.jsdelivr.net/npm/@billy_mcdowell/shadcn-web-components@latest/dist/components/sonner/sonner.js';",
    '',
    "  document.querySelector('#notify').addEventListener('click', () => {",
    "    toast('Hello from vanilla JavaScript');",
    '  });',
    '</script>',
    '```',
    '',
    '### Angular',
    '',
    'Importing the package registers the custom element. Add `CUSTOM_ELEMENTS_SCHEMA` to the standalone component that owns the template, mount one host, and call `toast` from a normal Angular event handler:',
    '',
    '```ts',
    "import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';",
    "import { toast } from '@billy_mcdowell/shadcn-web-components/sonner';",
    '',
    '@Component({',
    "  selector: 'app-root',",
    '  standalone: true,',
    '  schemas: [CUSTOM_ELEMENTS_SCHEMA],',
    '  template: `',
    '    <button type="button" (click)="showToast()">Save changes</button>',
    '    <shadcn-sonner position="bottom-right" rich-colors close-button></shadcn-sonner>',
    '  `,',
    '})',
    'export class AppComponent {',
    '  showToast(): void {',
    "    toast.success('Changes saved', {",
    "      description: 'Your Angular settings are now up to date.',",
    '    });',
    '  }',
    '}',
    '```',
    '',
    'For an NgModule-based application, add `CUSTOM_ELEMENTS_SCHEMA` to the NgModule `schemas` array instead.',
    '',
    '### Update, await, and dismiss',
    '',
    '```js',
    "const id = toast.loading('Uploading file...');",
    "toast.success('Upload complete', { id }); // Reuses and updates that toast.",
    '',
    'toast.promise(saveProfile(), {',
    "  loading: 'Saving profile...',",
    "  success: 'Profile saved',",
    '  error: (error) => `Could not save: ${error.message}`,',
    '});',
    '',
    'toast.dismiss(id); // Dismiss one toast.',
    'toast.dismiss();   // Dismiss all toasts.',
    '```',
  ].join('\n'),
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
  return `# ${name}\n\n> ${summary}\n\n- **Package:** \`@billy_mcdowell/shadcn-web-components/${slug}\`\n- **Elements:** ${tags}\n- **Source:** [${slug}.ts](./${slug}.ts)\n- **Stories:** [${slug}.stories.ts](./${slug}.stories.ts)\n\n## When to use\n\nUse ${name} for ${when}.\n\nDo not use it when ${avoid}.\n\n## Import\n\nImporting the component subpath registers every custom element in this component family:\n\n\`\`\`js\nimport '@billy_mcdowell/shadcn-web-components/${slug}';\n\`\`\`\n\nThe package root also registers all components, but the subpath is preferable when the application only needs this family. Load the library design tokens once at application level; see [the root agent index](../../../llms.txt).\n\n## Example\n\n\`\`\`html\n${example}\n\`\`\`\n\nFor Lit templates, use the same markup inside a Lit \`html\` tagged template. Set non-string or frequently changing values with property bindings such as \`.value=\${value}\`; use \`?disabled=\${disabled}\` for boolean attributes and \`@event-name=\${handler}\` for events.${additionalGuides[slug] ? `\n\n${additionalGuides[slug]}` : ''}\n\n## Accessibility\n\n${accessibility[slug] ?? accessibility.default}\n\n## Do\n\n- ${rules[0]}\n- Keep the element hierarchy shown in the example when this is a compound component.\n- Listen to the documented public custom events at the component boundary.\n\n## Don't\n\n- ${rules[1]}\n- Do not query or style private nodes inside the shadow root.\n- Do not invent React-style props such as \`onValueChange\`; web components use attributes/properties and DOM events.\n\n## Public API\n\n${elements.map(renderElement).join('\n\n')}\n\n## Agent checklist\n\n1. Import the \`/${slug}\` subpath exactly once in the application bundle.\n2. Use the documented element hierarchy and give interactive controls visible or accessible names.\n3. Use attributes for declarative initial values; use DOM properties for live values and non-string data.\n4. Subscribe with \`addEventListener\` or Lit's \`@event\` syntax using the exact event names above.\n5. Test keyboard operation, focus visibility, disabled state, and the relevant empty/error/open state.\n`;
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
  ['Actions and selection', ['button', 'button-group', 'checkbox', 'combobox', 'radio-group', 'select', 'native-select', 'slider', 'switch', 'toggle', 'toggle-group']],
  ['Forms', ['field', 'input', 'textarea', 'input-otp', 'input-group', 'label', 'calendar', 'date-picker']],
  ['Overlays and disclosure', ['accordion', 'alert-dialog', 'collapsible', 'command', 'context-menu', 'dialog', 'drawer', 'dropdown-menu', 'hover-card', 'popover', 'sheet', 'tooltip']],
  ['Navigation', ['breadcrumb', 'menubar', 'navigation-menu', 'pagination', 'sidebar', 'tabs']],
  ['Data and content', ['alert', 'aspect-ratio', 'avatar', 'badge', 'card', 'carousel', 'chart', 'data-table', 'empty', 'item', 'kbd', 'resizable', 'separator', 'table', 'typography']],
  ['Feedback', ['progress', 'skeleton', 'sonner', 'spinner']],
];

const index = `# shadcn Web Components: agent index\n\n> AI-oriented routing and usage documentation for \`@billy_mcdowell/shadcn-web-components\`, a Lit-based custom-element library.\n\n## Start here\n\n- Install: \`npm install @billy_mcdowell/shadcn-web-components\`\n- Register one family: \`import '@billy_mcdowell/shadcn-web-components/button';\`\n- Register everything: \`import '@billy_mcdowell/shadcn-web-components';\`\n- Elements use the \`shadcn-\` prefix and work in plain HTML, Lit, React, Vue, Svelte, and other environments that support custom elements.\n- Load \`src/styles/tokens.css\` once for the default design tokens. \`src/styles/reset.css\` is optional. The \`/styles\` JavaScript export contains Lit CSS helpers; it does not install the global token stylesheet.\n- Boolean attributes are true when present. Omit \`disabled\`, \`open\`, \`required\`, and similar attributes for false; never write \`disabled="false"\`.\n- Use DOM properties for live values, DOM events for changes, slots for composition, and CSS custom properties for supported theming. Do not reach into component shadow roots.\n\n## Component chooser\n\n${categories.map(([heading, slugs]) => `### ${heading}\n\n${slugs.map(slug => `- [${components[slug][0]}](./src/components/${slug}/llms.md): ${components[slug][1]}`).join('\n')}`).join('\n\n')}\n\n## Framework usage\n\n### Plain HTML or JavaScript\n\n\`\`\`html\n<script type="module">\n  import '@billy_mcdowell/shadcn-web-components/button';\n<\/script>\n<shadcn-button id="save">Save</shadcn-button>\n<script>\n  document.querySelector('#save').addEventListener('button-click', () => save());\n<\/script>\n\`\`\`\n\n### Lit\n\n\`\`\`ts\nimport { html } from 'lit';\nimport '@billy_mcdowell/shadcn-web-components/input';\n\nconst view = (value, onChange) => html\`\n  <shadcn-input\n    .value=\${value}\n    @input-change=\${onChange}\n  ></shadcn-input>\n\`;\n\`\`\`\n\n### React and JSX\n\nImport the registration subpath, use lowercase custom-element tags, and attach custom events through a ref/effect when the framework version does not map unknown \`on*\` props to DOM events. Pass live complex values through element properties. TypeScript JSX projects may need local custom-element intrinsic-element declarations derived from \`custom-elements.json\`.\n\n## Choosing related components\n\n- **Dialog vs Alert Dialog:** Dialog is general modal content; Alert Dialog requires an explicit decision for consequential actions.\n- **Sheet vs Drawer vs Sidebar:** Sheet is an edge modal, Drawer is a compact-screen/modal task surface, and Sidebar is persistent page structure.\n- **Select vs Native Select vs Radio Group vs Combobox:** Select is a custom popup for fixed options, Native Select prioritizes platform behavior, Radio Group keeps a small choice set visible, and Combobox adds typeahead filtering for longer lists.\n- **Calendar vs Date Picker:** Calendar is an inline date grid; Date Picker is a form field with trigger, popup, and validation.\n- **Table vs Data Table:** Table is semantic tabular markup; Data Table adds sorting, filtering, pagination, and row selection.\n- **Carousel vs Tabs:** Carousel scrolls through peer slides; Tabs switch labeled panels in place.\n- **Checkbox vs Switch vs Toggle:** Checkbox records a form choice, Switch immediately changes a setting, and Toggle represents a pressed toolbar action.\n- **Dropdown Menu vs Context Menu vs Menubar vs Command:** Dropdown Menu has a visible trigger, Context Menu is target-specific and gesture-opened, Menubar exposes persistent desktop-style command categories, and Command is a searchable keyboard-driven palette.\n- **Tooltip vs Hover Card vs Popover:** Tooltip is short non-interactive help, Hover Card is a preview, and Popover holds interactive supplemental content.\n- **Skeleton vs Spinner vs Progress:** Skeleton previews content shape, Spinner represents unknown duration, and Progress represents measurable completion.\n\n## Machine-readable API\n\nThe package includes \`custom-elements.json\`, the authoritative Custom Elements Manifest for tags, attributes, properties, events, slots, and CSS custom properties. The per-component guides combine that generated API with human decision guidance and examples. Regenerate them after updating the manifest with:\n\n\`\`\`sh\nnpm run docs:llms\n\`\`\`\n`;

await writeFile(path.join(root, 'llms.txt'), index, 'utf8');
const storybookIndex = `import { Markdown, Meta } from '@storybook/addon-docs/blocks';
import guide from '../llms.txt?raw';

<Meta title="Component Guides/Overview" />

<Markdown>{guide}</Markdown>
`;

await writeFile(path.join(root, 'src', 'llms.mdx'), storybookIndex, 'utf8');
console.log(`Generated llms.txt, its Storybook overview, ${Object.keys(components).length} component guides, and their Storybook pages.`);
