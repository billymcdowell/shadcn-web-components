---
name: add-and-publish-component
description: Add, finish, validate, document, register, version, and publish components in the shadcn-web-components repository. Use whenever creating a component, porting a shadcn/ui component to Lit, completing an unfinished component, exposing a component through package exports, preparing a component pull request, or releasing a component to npm.
---

# Add and Publish a Component

Follow every gate in order. Keep a checklist in the working response and record each item as `pending`, `complete`, or `blocked`. Never call a component ready or publish it while an item is pending or blocked.

## 1. Establish Scope and Baseline

- Read `package.json`, `src/components/index.ts`, `src/index.ts`, `README.md`, `.changeset/config.json`, and the relevant workflows under `.github/workflows/`.
- Read at least one simple neighboring component and one component with comparable behavior. Reuse their Lit, CSS token, controller, context, export, and Storybook patterns.
- Run `git status --short`. Preserve unrelated and pre-existing changes; do not overwrite or include them accidentally.
- Define the public contract before implementation: folder name, element tag or tags, exported classes and types, properties and reflected attributes, slots, parts, events, methods, states, keyboard behavior, focus behavior, and form behavior where applicable.
- Use kebab-case for the folder and the `shadcn-` prefix for custom-element tags. Check for duplicate tags and exports with `rg`.

## 2. Implement the Component

- Create `src/components/<component>/<component>.ts` and `src/components/<component>/index.ts`.
- Build with Lit and existing repository primitives. Import local ESM modules with `.js` extensions, matching neighboring components.
- Reuse tokens and shared utilities from `src/styles/index.ts`. Add global tokens only when the value is genuinely shared; otherwise use component-local CSS custom properties.
- Export every intended public class and type from the component `index.ts`.
- Register every element with `@customElement('shadcn-...')` and add every tag/class pair to `HTMLElementTagNameMap`.
- Document public elements, properties, events, slots, CSS parts, and CSS custom properties with Custom Elements Manifest-compatible JSDoc.
- Use composed, bubbling custom events when consumers outside the shadow root need to observe them. Give events stable, purposeful names and documented detail shapes.
- Implement native semantics first. Add ARIA only where native semantics are insufficient, and keep ARIA state synchronized with component state.
- Cover disabled, empty, invalid, read-only, open/closed, loading, and controlled/programmatic states that apply.
- For interactive components, implement the expected keyboard interaction, visible focus, focus entry/return, Escape behavior, outside interaction, and cleanup of listeners/controllers.
- Avoid browser-global work during module evaluation so importing the package remains safe before an element connects.
- Do not leave TODOs, placeholder behavior, commented-out implementations, debug logging, or claims of behavior that is not implemented.

## 3. Add Storybook Documentation

- Create `src/components/<component>/<component>.stories.ts` and import `./<component>.js`.
- Set `title: 'Components/<Display Name>'`, the primary `component` tag, and `tags: ['autodocs']`.
- Define controls and descriptions for public properties.
- Add a default story plus stories for every variant, size, state, composition, and interaction that materially changes behavior.
- Include disabled and edge states where relevant. Include realistic compound markup for multi-element components.
- Exercise keyboard and focus behavior manually in Storybook for interactive components.
- Run the Storybook accessibility panel on representative stories and resolve serious or critical violations. Do not treat the panel as a replacement for keyboard testing.

## 4. Register Every Public Entry Point

- Add the component's values and types to `src/components/index.ts`.
- Rely on `src/index.ts` to re-export the component barrel; change it only if the repository structure requires it.
- Add `./<component>` to `package.json#exports` with both targets:

```json
"./<component>": {
  "types": "./dist/components/<component>/<component>.d.ts",
  "default": "./dist/components/<component>/<component>.js"
}
```

- Add the component to the README's available-component list and update status or usage sections when relevant.
- Check that direct and root imports both register the intended elements and expose the intended types.

## 5. Add Release Metadata

- Add one Changeset under `.changeset/<descriptive-name>.md`; do not edit the package version or changelog by hand.
- Use this exact frontmatter shape, replacing the summary:

```markdown
---
"@billy_mcdowell/shadcn-web-components": minor
---

Add the <Component> component.
```

- Treat a new public component as `minor`. Use `patch` only for a non-breaking correction to an already-published component; use `major` for a breaking public API change unless the maintainer explicitly chooses a different prerelease policy.
- Make the summary consumer-facing and mention all related public additions.

## 6. Run All Quality Gates

Run each command separately and fix failures before continuing:

```bash
npm run type-check
npm run build
npm run analyze
npm run verify:exports
npm run build-storybook
npm pack --dry-run --json
git diff --check
git status --short
```

Then verify the resulting artifacts:

- Confirm `dist/components/<component>/<component>.js` and `.d.ts` exist and are current.
- Confirm `custom-elements.json` contains every new tag and its documented public API. Commit this generated manifest because it is included in the published package.
- Inspect the dry-run pack result. Confirm the implementation, declarations, source, and manifest are included; reject unexpected secrets, logs, or unrelated artifacts.
- Confirm `verify:exports` checks the new package subpath and succeeds.
- Review the complete diff for accidental generated churn and unrelated user changes.
- If behavior is interactive and no automated browser test covers it, explicitly report the manual Storybook checks performed. Do not claim automated behavioral coverage when this repository has no matching test command.

## 7. Component-Ready Gate

Declare the component ready for review only when all of these are true:

- Public contract is implemented and documented.
- Accessibility, keyboard, focus, state, and cleanup behavior has been checked where applicable.
- Component implementation, local barrel, root barrel, package subpath, Storybook stories, README, and Changeset are present.
- Type check, build, manifest generation, export verification, Storybook build, package dry run, and whitespace check all pass.
- Generated `custom-elements.json` and build output agree with the source.
- The final diff contains no accidental or unrelated edits.

Report the checklist with command results and any residual manual-test risk. Stop if any item is incomplete.

## 8. Publish Gate

- Never publish merely because the component is ready. Publishing changes remote package state and requires an explicit user request.
- Before publishing, confirm a clean intended release diff, the Changeset, npm authentication/provenance readiness, and that CI on the release commit is green.
- Prefer the repository's Changesets workflow: merge the component change with its Changeset to `main`, allow the Changesets action to create/update the release PR, review and merge that PR, then let the workflow run `npm run release`.
- If the user explicitly requests a manual publish, rerun all quality gates on the exact commit and run `npm run release` only after confirming the resulting version and tag are not already published.
- After publication, verify the npm version, root import, direct `/<component>` import, type declarations, custom-elements manifest, and deployed Storybook documentation.
- Report the published version, commit/tag, package URL, Storybook URL, and verification results. Never state that publication succeeded without remote evidence.
