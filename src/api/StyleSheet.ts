import type { BaseStyle, NestedStyles } from '../types/styles';
import type { ResolveColorObject } from '../core/processColors';
import type { ResolveShorthandObject } from '../types/shorthands';
import { StyleSheet as RNStyleSheet } from 'react-native';
import { processStyles } from '../core/processStyles';
import type { ResolveRemObject } from '../core/processRem';

/** A lightweight styling utility built on top of React Native's `StyleSheet`. */
export namespace StyleSheet {
  /** Maps style keys to either a base React Native style object or nested styles. */
  type NamedStyles<T> = { [P in keyof T]: BaseStyle | NestedStyles };

  /**
   * Recursively resolves all `rem` values within an object type.
   *
   * Converts:
   * ```ts
   * { fontSize: "2rem" }
   * ```
   * into:
   * ```ts
   * { fontSize: number }
   * ```
   */

  type ResolveStyleOutput<T> = ResolveRemObject<ResolveColorObject<ResolveShorthandObject<T>>>;

  /**
   * The returned object is safe to pass directly to React Native components.
   * All custom extensions (shorthands, colors, rem units) are resolved to standard RN values.
   */

  /**
   * Creates a style sheet with support for `rem` units.
   *
   * This function behaves similarly to React Native's `StyleSheet.create`,
   * but additionally:
   *
   * - Accepts `rem` values (e.g. `"1.5rem"`)
   * - Converts them to pixel values at runtime
   * - Returns fully resolved styles (no `rem` strings remain)
   *
   * @param styles - An object containing style definitions
   * @returns A new object with all `rem` values resolved to numbers
   *
   * @example
   * ```ts
   * const styles = StyleSheet.create({
   *   text: {
   *     fontSize: "2rem",
   *     marginTop: "1rem",
   *   },
   * });
   * ```
   *
   * @remarks
   *
   * - The returned object is safe to pass directly to React Native components
   * - This is a runtime transformation (not compile-time)
   */
  export function create<T extends NamedStyles<T>>(
    /**
     * The extra `& NamedStyles<any>` here helps TypeScript catch typos: e.g.,
     * the following code would not error with `styles: T | NamedStyles<T>`
     * but would error with `styles: T & NamedStyles<any>`:
     *
     * ```ts
     * StyleSheet.create({
     *  someComponent: { marginLeft: 1, magrinRight: 1 },
     * });
     * ```
     */
    styles: T & NamedStyles<any>
  ): ResolveStyleOutput<T> {
    return processStyles(styles);
  }

  export const hairlineWidth = RNStyleSheet.hairlineWidth;
  export const flatten = RNStyleSheet.flatten;
  export const absoluteFill = RNStyleSheet.absoluteFill;
}
