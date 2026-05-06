import type { RemKey } from '../constants/remKeys';

/**
 * Represents a value expressed in `rem` units.
 *
 * Example:
 * ```ts
 * "1rem"
 * "0.5rem"
 * "-2rem"
 * ```
 */
type RemValue = `${number}rem`;

/**
 * Augments a style type to allow `rem` values for specific properties.
 *
 * Only keys listed in {@link RemKey} will accept `rem` values in addition
 * to their original type.
 *
 * @typeParam T - The base style object type (e.g. `ViewStyle`, `TextStyle`)
 *
 * @example
 * ```ts
 * type MyStyle = WithRem<ViewStyle>;
 *
 * const style: MyStyle = {
 *   width: "10rem",   // ✅ allowed
 *   opacity: "1rem",  // ❌ not allowed (not in REM_KEYS)
 * };
 * ```
 *
 * @remarks
 * - This type does **not** perform any runtime transformation
 * - `rem` values are resolved at runtime by the `processRem` pipeline
 */
export type WithRem<T> = {
  [K in keyof T]: K extends RemKey ? T[K] | RemValue : T[K];
};
