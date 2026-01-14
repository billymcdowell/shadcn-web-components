import { createContext as litCreateContext, Context } from '@lit/context';

/**
 * Creates a context key and associates it with a TypeScript type.
 * This utility ensures all contexts are created in a standardized way.
 *
 * @template T - The type of the context value
 * @param key - A unique string identifier for the context
 * @returns A Context object that can be used with @lit/context's provide and consume decorators
 *
 * @example
 * ```typescript
 * export const dialogContext = createContext<{
 *   open: boolean;
 *   setOpen: (open: boolean) => void;
 * }>('shadcn-dialog');
 * ```
 */
export function createContext<T>(key: string): Context<string, T> {
  return litCreateContext<T, string>(key);
}
