export const REM_KEYS = new Set([
  // typography
  'fontSize',
  'lineHeight',
  'letterSpacing',
  'textShadowRadius',

  // nested typography
  'textShadowOffset.width',
  'textShadowOffset.height',

  // spacing
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginHorizontal',
  'marginVertical',
  'marginStart',
  'marginEnd',
  'marginInline',
  'marginInlineStart',
  'marginInlineEnd',
  'marginBlock',
  'marginBlockStart',
  'marginBlockEnd',

  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingHorizontal',
  'paddingVertical',
  'paddingStart',
  'paddingEnd',
  'paddingInline',
  'paddingInlineStart',
  'paddingInlineEnd',
  'paddingBlock',
  'paddingBlockStart',
  'paddingBlockEnd',

  // layout
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',

  'top',
  'left',
  'right',
  'bottom',
  'start',
  'end',

  // insets
  'inset',
  'insetBlock',
  'insetBlockStart',
  'insetBlockEnd',
  'insetInline',
  'insetInlineStart',
  'insetInlineEnd',

  // border radius
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopStartRadius',
  'borderTopEndRadius',
  'borderBottomStartRadius',
  'borderBottomEndRadius',

  // border widths
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStartWidth',
  'borderEndWidth',

  // gaps
  'gap',
  'rowGap',
  'columnGap',
] as const);

export type RemKey = typeof REM_KEYS extends Set<infer T> ? T : never;
