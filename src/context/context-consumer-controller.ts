import { ReactiveController, ReactiveElement } from 'lit';
import { Context, ContextConsumer, ContextType } from '@lit/context';

/**
 * A Lit ReactiveController that simplifies consuming context in a child component.
 * This controller manages the lifecycle of the ContextConsumer and updates the host
 * when the context value changes.
 *
 * @template T - The type of the context value
 *
 * @example
 * ```typescript
 * const myContext = createContext<{ count: number }>('my-context');
 *
 * class MyConsumer extends LitElement {
 *   private contextConsumer = new ContextConsumerController(
 *     this,
 *     myContext
 *   );
 *
 *   render() {
 *     const value = this.contextConsumer.value;
 *     if (!value) return html`No context available`;
 *     return html`Count: ${value.count}`;
 *   }
 * }
 * ```
 */
export class ContextConsumerController<T> implements ReactiveController {
  private host: ReactiveElement;
  private context: Context<string, T>;
  private consumer: ContextConsumer<Context<string, T>, ReactiveElement>;
  private _value: T | undefined = undefined;

  /**
   * Creates a new ContextConsumerController.
   *
   * @param host - The host element that will consume the context
   * @param context - The context key created with createContext
   */
  constructor(host: ReactiveElement, context: Context<string, T>) {
    this.host = host;
    this.context = context;
    this.consumer = new ContextConsumer(host, {
      context,
      callback: (value: ContextType<Context<string, T>>) => {
        this._value = value as T;
        // Request an update when the context value changes
        this.host.requestUpdate();
      },
      subscribe: true,
    });
    host.addController(this);
    // Mark as intentionally used for side effects
    void this.context;
    void this.consumer;
  }

  /**
   * Called when the host element is connected to the DOM.
   * Ensures the consumer is active.
   */
  hostConnected(): void {
    // The consumer is already set up in the constructor
    // This method exists to satisfy the ReactiveController interface
  }

  /**
   * Called when the host element is disconnected from the DOM.
   * Cleans up the consumer to prevent memory leaks.
   */
  hostDisconnected(): void {
    // ContextConsumer handles cleanup automatically
    // This method exists to satisfy the ReactiveController interface
  }

  /**
   * Gets the current consumed context value.
   * Returns undefined if the context is not available.
   */
  get value(): T | undefined {
    return this._value;
  }

  /**
   * Checks if the context is available (has a value).
   */
  get hasValue(): boolean {
    return this._value !== undefined;
  }
}
