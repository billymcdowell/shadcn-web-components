import { ReactiveController, ReactiveElement } from 'lit';
import { Context, ContextProvider } from '@lit/context';

/**
 * A Lit ReactiveController that simplifies providing context from a host component.
 * This controller manages the lifecycle of the ContextProvider from @lit/context.
 *
 * @template T - The type of the context value
 *
 * @example
 * ```typescript
 * const myContext = createContext<{ count: number }>('my-context');
 *
 * class MyProvider extends LitElement {
 *   private contextProvider = new ContextProviderController(
 *     this,
 *     myContext,
 *     { count: 0 }
 *   );
 *
 *   updateCount(count: number) {
 *     this.contextProvider.setValue({ count });
 *   }
 * }
 * ```
 */
export class ContextProviderController<T> implements ReactiveController {
  private host: ReactiveElement;
  private provider: ContextProvider<Context<string, T>, ReactiveElement>;
  private _value: T;

  /**
   * Creates a new ContextProviderController.
   *
   * @param host - The host element that will provide the context
   * @param context - The context key created with createContext
   * @param initialValue - The initial value to provide
   */
  constructor(host: ReactiveElement, context: Context<string, T>, initialValue: T) {
    this.host = host;
    this._value = initialValue;
    this.provider = new ContextProvider(host, {
      context,
      initialValue,
    });
    host.addController(this);
  }

  /**
   * Called when the host element is connected to the DOM.
   * Ensures the provider is active.
   */
  hostConnected(): void {
    // The provider is already set up in the constructor
    // This method exists to satisfy the ReactiveController interface
  }

  /**
   * Called when the host element is disconnected from the DOM.
   * Cleans up the provider to prevent memory leaks.
   */
  hostDisconnected(): void {
    // ContextProvider handles cleanup automatically
    // This method exists to satisfy the ReactiveController interface
  }

  /**
   * Gets the current context value.
   */
  getValue(): T {
    return this._value;
  }

  /**
   * Sets a new context value and notifies all consumers.
   *
   * @param value - The new value to provide
   */
  setValue(value: T): void {
    this._value = value;
    this.provider.setValue(value);
    // Request an update to ensure the host re-renders if needed
    this.host.requestUpdate();
  }

  /**
   * Updates the context value by calling a function with the current value.
   * Useful for immutable updates.
   *
   * @param updater - A function that receives the current value and returns a new value
   */
  updateValue(updater: (current: T) => T): void {
    this.setValue(updater(this._value));
  }
}
