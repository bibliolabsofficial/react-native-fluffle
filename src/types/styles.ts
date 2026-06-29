import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { WithRem } from './rem';
import type { WithColors, WithShorthands } from './colorStyles';

/**
 * Represents a React Native style object with support for custom extensions:
 * - `rem` values on supported properties
 * - OKLCH and other color formats
 * - Shorthand properties (margin, padding, borderRadius, gap, inset)
 *
 * This type extends the built-in React Native style types (`ViewStyle`,
 * `TextStyle`, and `ImageStyle`) to allow these custom value types.
 *
 * @remarks
 * - Only specific properties accept `rem` values (defined in `REM_KEYS`)
 * - Only specific properties accept color overrides (defined in `ColorKeys`)
 * - Only specific properties support shorthand syntax (margin, padding, inset, borderRadius, gap)
 * - All custom values are resolved to React Native-compatible types at runtime
 *
 * Type composition order (important for proper type inference):
 * 1. WithColors - enables custom color types
 * 2. WithRem - enables rem units (must wrap shorthand values)
 * 3. WithShorthands - enables shorthand syntax with proper rem support
 */
export type BaseStyle =
  | WithShorthands<WithRem<WithColors<ViewStyle>>>
  | WithShorthands<WithRem<WithColors<TextStyle>>>
  | WithShorthands<WithRem<WithColors<ImageStyle>>>;

/**
 * Represents a recursively nested style object.
 *
 * This allows grouping styles in a hierarchical structure:
 *
 * @example
 * ```ts
 * const styles = {
 *   container: {
 *     header: {
 *       padding: { x: "1rem", y: "2rem" },
 *     },
 *   },
 * };
 * ```
 *
 * @remarks
 * - Each leaf node must be a {@link BaseStyle}
 * - Nested objects are processed recursively by the style system
 */
export type NestedStyles = { [key: string]: BaseStyle | NestedStyles };
