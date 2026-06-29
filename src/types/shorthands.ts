/**
 * Shorthand property for margin/padding with x and y variants.
 *
 * Supports:
 * - `x`: Applies to left and right
 * - `y`: Applies to top and bottom
 * - Individual directions: `top`, `bottom`, `left`, `right`, `start`, `end`
 * - Logical directions: `inline`, `inlineStart`, `inlineEnd`, `block`, `blockStart`, `blockEnd`
 * - Aliases: `horizontal`, `vertical`
 */
export type SpacingShorthand<T = unknown> = {
  x?: T;
  y?: T;
  start?: T;
  end?: T;
  inline?: T;
  inlineStart?: T;
  inlineEnd?: T;
  block?: T;
  blockStart?: T;
  blockEnd?: T;
  top?: T;
  bottom?: T;
  left?: T;
  right?: T;
  horizontal?: T;
  vertical?: T;
};

/**
 * Shorthand property for border radius.
 *
 * Supports:
 * - Individual corners: `topLeft`, `topRight`, `bottomLeft`, `bottomRight`
 * - Logical corners: `topStart`, `topEnd`, `bottomStart`, `bottomEnd`
 * - Sides: `top`, `bottom`, `left`, `right`, `start`, `end`
 */
export type BorderRadiusShorthand<T = unknown> = {
  topLeft?: T;
  topRight?: T;
  bottomLeft?: T;
  bottomRight?: T;
  topStart?: T;
  topEnd?: T;
  bottomStart?: T;
  bottomEnd?: T;
  top?: T;
  bottom?: T;
  left?: T;
  right?: T;
  start?: T;
  end?: T;
};

/**
 * Shorthand property for gap (flexbox gap).
 *
 * Supports:
 * - `row`: Sets row gap
 * - `column`: Sets column gap
 */
export type GapShorthand<T = unknown> = {
  row?: T;
  column?: T;
};

/**
 * Shorthand property for inset (positioning).
 *
 * Supports:
 * - `x`: Applies to left and right
 * - `y`: Applies to top and bottom
 * - Individual directions: `top`, `bottom`, `left`, `right`, `start`, `end`
 * - Logical directions: `inline`, `inlineStart`, `inlineEnd`, `block`, `blockStart`, `blockEnd`
 * - Aliases: `horizontal`, `vertical`
 */
export type InsetShorthand<T = unknown> = {
  x?: T;
  y?: T;
  start?: T;
  end?: T;
  inline?: T;
  inlineStart?: T;
  inlineEnd?: T;
  block?: T;
  blockStart?: T;
  blockEnd?: T;
  top?: T;
  bottom?: T;
  left?: T;
  right?: T;
  horizontal?: T;
  vertical?: T;
};

type ShorthandPropertyKey = 'margin' | 'padding' | 'inset' | 'borderRadius' | 'gap';

type ExpandSpacingShorthand<T> =
  (T extends { x?: infer V } ? { marginLeft?: V; marginRight?: V } : {}) &
  (T extends { y?: infer V } ? { marginTop?: V; marginBottom?: V } : {}) &
  (T extends { start?: infer V } ? { marginStart?: V } : {}) &
  (T extends { end?: infer V } ? { marginEnd?: V } : {}) &
  (T extends { inline?: infer V } ? { marginInlineStart?: V; marginInlineEnd?: V } : {}) &
  (T extends { inlineStart?: infer V } ? { marginInlineStart?: V } : {}) &
  (T extends { inlineEnd?: infer V } ? { marginInlineEnd?: V } : {}) &
  (T extends { block?: infer V } ? { marginBlockStart?: V; marginBlockEnd?: V } : {}) &
  (T extends { blockStart?: infer V } ? { marginBlockStart?: V } : {}) &
  (T extends { blockEnd?: infer V } ? { marginBlockEnd?: V } : {}) &
  (T extends { top?: infer V } ? { marginTop?: V } : {}) &
  (T extends { bottom?: infer V } ? { marginBottom?: V } : {}) &
  (T extends { left?: infer V } ? { marginLeft?: V } : {}) &
  (T extends { right?: infer V } ? { marginRight?: V } : {}) &
  (T extends { horizontal?: infer V } ? { marginLeft?: V; marginRight?: V } : {}) &
  (T extends { vertical?: infer V } ? { marginTop?: V; marginBottom?: V } : {});

type ExpandPaddingShorthand<T> =
  (T extends { x?: infer V } ? { paddingLeft?: V; paddingRight?: V } : {}) &
  (T extends { y?: infer V } ? { paddingTop?: V; paddingBottom?: V } : {}) &
  (T extends { start?: infer V } ? { paddingStart?: V } : {}) &
  (T extends { end?: infer V } ? { paddingEnd?: V } : {}) &
  (T extends { inline?: infer V } ? { paddingInlineStart?: V; paddingInlineEnd?: V } : {}) &
  (T extends { inlineStart?: infer V } ? { paddingInlineStart?: V } : {}) &
  (T extends { inlineEnd?: infer V } ? { paddingInlineEnd?: V } : {}) &
  (T extends { block?: infer V } ? { paddingBlockStart?: V; paddingBlockEnd?: V } : {}) &
  (T extends { blockStart?: infer V } ? { paddingBlockStart?: V } : {}) &
  (T extends { blockEnd?: infer V } ? { paddingBlockEnd?: V } : {}) &
  (T extends { top?: infer V } ? { paddingTop?: V } : {}) &
  (T extends { bottom?: infer V } ? { paddingBottom?: V } : {}) &
  (T extends { left?: infer V } ? { paddingLeft?: V } : {}) &
  (T extends { right?: infer V } ? { paddingRight?: V } : {}) &
  (T extends { horizontal?: infer V } ? { paddingLeft?: V; paddingRight?: V } : {}) &
  (T extends { vertical?: infer V } ? { paddingTop?: V; paddingBottom?: V } : {});

type ExpandInsetShorthand<T> =
  (T extends { x?: infer V } ? { left?: V; right?: V } : {}) &
  (T extends { y?: infer V } ? { top?: V; bottom?: V } : {}) &
  (T extends { start?: infer V } ? { start?: V } : {}) &
  (T extends { end?: infer V } ? { end?: V } : {}) &
  (T extends { inline?: infer V } ? { insetInlineStart?: V; insetInlineEnd?: V } : {}) &
  (T extends { inlineStart?: infer V } ? { insetInlineStart?: V } : {}) &
  (T extends { inlineEnd?: infer V } ? { insetInlineEnd?: V } : {}) &
  (T extends { block?: infer V } ? { insetBlockStart?: V; insetBlockEnd?: V } : {}) &
  (T extends { blockStart?: infer V } ? { insetBlockStart?: V } : {}) &
  (T extends { blockEnd?: infer V } ? { insetBlockEnd?: V } : {}) &
  (T extends { top?: infer V } ? { top?: V } : {}) &
  (T extends { bottom?: infer V } ? { bottom?: V } : {}) &
  (T extends { left?: infer V } ? { left?: V } : {}) &
  (T extends { right?: infer V } ? { right?: V } : {}) &
  (T extends { horizontal?: infer V } ? { left?: V; right?: V } : {}) &
  (T extends { vertical?: infer V } ? { top?: V; bottom?: V } : {});

type ExpandBorderRadiusShorthand<T> =
  (T extends { topLeft?: infer V } ? { borderTopLeftRadius?: V } : {}) &
  (T extends { topRight?: infer V } ? { borderTopRightRadius?: V } : {}) &
  (T extends { bottomLeft?: infer V } ? { borderBottomLeftRadius?: V } : {}) &
  (T extends { bottomRight?: infer V } ? { borderBottomRightRadius?: V } : {}) &
  (T extends { topStart?: infer V } ? { borderTopStartRadius?: V } : {}) &
  (T extends { topEnd?: infer V } ? { borderTopEndRadius?: V } : {}) &
  (T extends { bottomStart?: infer V } ? { borderBottomStartRadius?: V } : {}) &
  (T extends { bottomEnd?: infer V } ? { borderBottomEndRadius?: V } : {}) &
  (T extends { top?: infer V } ? { borderTopLeftRadius?: V; borderTopRightRadius?: V } : {}) &
  (T extends { bottom?: infer V } ? { borderBottomLeftRadius?: V; borderBottomRightRadius?: V } : {}) &
  (T extends { left?: infer V } ? { borderTopLeftRadius?: V; borderBottomLeftRadius?: V } : {}) &
  (T extends { right?: infer V } ? { borderTopRightRadius?: V; borderBottomRightRadius?: V } : {}) &
  (T extends { start?: infer V } ? { borderTopStartRadius?: V; borderBottomStartRadius?: V } : {}) &
  (T extends { end?: infer V } ? { borderTopEndRadius?: V; borderBottomEndRadius?: V } : {});

type ExpandGapShorthand<T> =
  (T extends { row?: infer V } ? { rowGap?: V } : {}) &
  (T extends { column?: infer V } ? { columnGap?: V } : {});

type KeepShorthandNonObject<Prop extends string, Value, Shorthand> =
  [Exclude<Value, Shorthand>] extends [never]
    ? {}
    : { [K in Prop]: ResolveShorthandObject<Exclude<Value, Shorthand>> };

type ExpandShorthandProps<T> =
  (T extends { margin: infer M } ? ExpandSpacingShorthand<Extract<M, SpacingShorthand<any>>> : {}) &
  (T extends { padding: infer P } ? ExpandPaddingShorthand<Extract<P, SpacingShorthand<any>>> : {}) &
  (T extends { inset: infer I } ? ExpandInsetShorthand<Extract<I, InsetShorthand<any>>> : {}) &
  (T extends { borderRadius: infer B } ? ExpandBorderRadiusShorthand<Extract<B, BorderRadiusShorthand<any>>> : {}) &
  (T extends { gap: infer G } ? ExpandGapShorthand<Extract<G, GapShorthand<any>>> : {});

type KeepShorthandProps<T> =
  (T extends { margin: infer M } ? KeepShorthandNonObject<'margin', M, SpacingShorthand<any>> : {}) &
  (T extends { padding: infer P } ? KeepShorthandNonObject<'padding', P, SpacingShorthand<any>> : {}) &
  (T extends { inset: infer I } ? KeepShorthandNonObject<'inset', I, InsetShorthand<any>> : {}) &
  (T extends { borderRadius: infer B } ? KeepShorthandNonObject<'borderRadius', B, BorderRadiusShorthand<any>> : {}) &
  (T extends { gap: infer G } ? KeepShorthandNonObject<'gap', G, GapShorthand<any>> : {});

type MergeIntersection<T> = { [K in keyof T]: T[K] };

export type ResolveShorthandObject<T> =
  T extends readonly unknown[] ? { [K in keyof T]: ResolveShorthandObject<T[K]> } :
  T extends object ? MergeIntersection<{
    [K in keyof T as K extends ShorthandPropertyKey ? never : K]: ResolveShorthandObject<T[K]>;
  } & KeepShorthandProps<T> & ExpandShorthandProps<T>> :
  T;
