/**
 * Maps shorthand property expansions.
 *
 * Each key is a shorthand property name, and the value is a mapping
 * of shorthand variant keys to their expanded property names.
 *
 * @example
 * ```ts
 * // margin: { x: 10 } expands to:
 * // { marginLeft: 10, marginRight: 10 }
 *
 * // padding: { top: 5, left: 0 } expands to:
 * // { paddingTop: 5, paddingLeft: 0 }
 * ```
 */
export const SHORTHAND_EXPANSIONS: Record<string, Record<string, string[]>> = {
  margin: {
    x: ['marginLeft', 'marginRight'],
    y: ['marginTop', 'marginBottom'],
    start: ['marginStart'],
    end: ['marginEnd'],
    inline: ['marginInlineStart', 'marginInlineEnd'],
    inlineStart: ['marginInlineStart'],
    inlineEnd: ['marginInlineEnd'],
    block: ['marginBlockStart', 'marginBlockEnd'],
    blockStart: ['marginBlockStart'],
    blockEnd: ['marginBlockEnd'],
    top: ['marginTop'],
    bottom: ['marginBottom'],
    left: ['marginLeft'],
    right: ['marginRight'],
    horizontal: ['marginLeft', 'marginRight'],
    vertical: ['marginTop', 'marginBottom'],
  },

  padding: {
    x: ['paddingLeft', 'paddingRight'],
    y: ['paddingTop', 'paddingBottom'],
    start: ['paddingStart'],
    end: ['paddingEnd'],
    inline: ['paddingInlineStart', 'paddingInlineEnd'],
    inlineStart: ['paddingInlineStart'],
    inlineEnd: ['paddingInlineEnd'],
    block: ['paddingBlockStart', 'paddingBlockEnd'],
    blockStart: ['paddingBlockStart'],
    blockEnd: ['paddingBlockEnd'],
    top: ['paddingTop'],
    bottom: ['paddingBottom'],
    left: ['paddingLeft'],
    right: ['paddingRight'],
    horizontal: ['paddingLeft', 'paddingRight'],
    vertical: ['paddingTop', 'paddingBottom'],
  },

  inset: {
    x: ['left', 'right'],
    y: ['top', 'bottom'],
    start: ['start'],
    end: ['end'],
    inline: ['insetInlineStart', 'insetInlineEnd'],
    inlineStart: ['insetInlineStart'],
    inlineEnd: ['insetInlineEnd'],
    block: ['insetBlockStart', 'insetBlockEnd'],
    blockStart: ['insetBlockStart'],
    blockEnd: ['insetBlockEnd'],
    top: ['top'],
    bottom: ['bottom'],
    left: ['left'],
    right: ['right'],
    horizontal: ['left', 'right'],
    vertical: ['top', 'bottom'],
  },

  borderRadius: {
    topLeft: ['borderTopLeftRadius'],
    topRight: ['borderTopRightRadius'],
    bottomLeft: ['borderBottomLeftRadius'],
    bottomRight: ['borderBottomRightRadius'],
    topStart: ['borderTopStartRadius'],
    topEnd: ['borderTopEndRadius'],
    bottomStart: ['borderBottomStartRadius'],
    bottomEnd: ['borderBottomEndRadius'],
    top: ['borderTopLeftRadius', 'borderTopRightRadius'],
    bottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    left: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    right: ['borderTopRightRadius', 'borderBottomRightRadius'],
    start: ['borderTopStartRadius', 'borderBottomStartRadius'],
    end: ['borderTopEndRadius', 'borderBottomEndRadius'],
  },

  gap: {
    row: ['rowGap'],
    column: ['columnGap'],
  },
};
