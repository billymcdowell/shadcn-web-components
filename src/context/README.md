# Context State Management Pattern

This module provides a standardized way to manage state across component hierarchies using Lit's context API. It simplifies the pattern of providing and consuming context values, avoiding prop drilling through deeply nested component trees.

## Overview

The context pattern allows parent components to share state with their children without passing props through every intermediate component. This is especially useful when working with slotted content where components may be nested across Shadow DOM boundaries.

## Core Utilities

### `createContext<T>(key: string)`

Creates a typed context key that can be used to provide and consume values.

```typescript
import { createContext } from '@lumina/core';

export const dialogContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>('shadcn-dialog');
```

### `ContextProviderController<T>`

A Lit ReactiveController that simplifies providing context from a host component.

```typescript
import { ContextProviderController } from '@lumina/core';
import { dialogContext } from './dialog-context';

class MyDialog extends LitElement {
  private contextProvider = new ContextProviderController(
    this,
    dialogContext,
    {
      open: false,
      setOpen: (open: boolean) => {
        this.contextProvider.setValue({
          ...this.contextProvider.getValue(),
          open,
        });
      },
    }
  );

  render() {
    return html`<slot></slot>`;
  }
}
```

### `ContextConsumerController<T>`

A Lit ReactiveController that simplifies consuming context in a child component.

```typescript
import { ContextConsumerController } from '@lumina/core';
import { dialogContext } from './dialog-context';

class DialogTrigger extends LitElement {
  private contextConsumer = new ContextConsumerController(
    this,
    dialogContext
  );

  private handleClick() {
    this.contextConsumer.value?.setOpen(true);
  }

  render() {
    return html`
      <button @click=${this.handleClick}>
        Open Dialog
      </button>
    `;
  }
}
```

## Usage Pattern

1. **Define the context** using `createContext` with a unique key and type.

2. **Create a provider component** that uses `ContextProviderController` to provide the context value.

3. **Create consumer components** that use `ContextConsumerController` to access the context value.

4. **Update context values** using the `setValue()` or `updateValue()` methods on the provider controller.

## API Reference

### ContextProviderController

#### Methods

- `getValue(): T` - Gets the current context value
- `setValue(value: T): void` - Sets a new context value and notifies all consumers
- `updateValue(updater: (current: T) => T): void` - Updates the context value using a function (useful for immutable updates)

### ContextConsumerController

#### Properties

- `value: T | undefined` - The current consumed context value (undefined if context is not available)
- `hasValue: boolean` - Whether the context is available

## Example: Complete Dialog Implementation

```typescript
// dialog-context.ts
import { createContext } from '@lumina/core';

export const dialogContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>('shadcn-dialog');

// shadcn-dialog.ts (Provider)
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextProviderController } from '@lumina/core';
import { dialogContext } from './dialog-context';

@customElement('shadcn-dialog')
export class LxDialog extends LitElement {
  private contextProvider = new ContextProviderController(
    this,
    dialogContext,
    {
      open: false,
      setOpen: (open: boolean) => {
        this.contextProvider.setValue({
          ...this.contextProvider.getValue(),
          open,
        });
      },
    }
  );

  render() {
    return html`<slot></slot>`;
  }
}

// shadcn-dialog-trigger.ts (Consumer)
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextConsumerController } from '@lumina/core';
import { dialogContext } from './dialog-context';

@customElement('shadcn-dialog-trigger')
export class LxDialogTrigger extends LitElement {
  private contextConsumer = new ContextConsumerController(
    this,
    dialogContext
  );

  private handleClick() {
    this.contextConsumer.value?.setOpen(true);
  }

  render() {
    return html`
      <div @click=${this.handleClick}>
        <slot></slot>
      </div>
    `;
  }
}
```

## Benefits

- **No Prop Drilling**: State can be shared across any depth of component nesting
- **Shadow DOM Compatible**: Works across Shadow DOM boundaries
- **Type Safe**: Full TypeScript support with type inference
- **Reactive**: Automatically triggers updates when context values change
- **Simple API**: Controllers handle all the complexity of context lifecycle management
