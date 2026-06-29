import type { OklchColor, RGBColor, HSLColor, HWBColor } from './colors';
import type { SpacingShorthand, BorderRadiusShorthand, GapShorthand, InsetShorthand } from './shorthands';

export type ColorKeys =
  | 'color'
  | 'backgroundColor'
  | 'borderColor'
  | 'borderTopColor'
  | 'borderRightColor'
  | 'borderBottomColor'
  | 'borderLeftColor'
  | 'borderStartColor'
  | 'borderEndColor'
  | 'borderBlockColor'
  | 'borderBlockEndColor'
  | 'borderBlockStartColor'
  | 'shadowColor'
  | 'textDecorationColor'
  | 'textShadowColor'
  | 'tintColor'
  | 'overlayColor'
  | 'outlineColor';

/** Union of all supported color types. */
export type SupportedColor = OklchColor | RGBColor | HSLColor | HWBColor;

export type WithColors<T> = {
  [K in keyof T]: K extends ColorKeys ? T[K] | SupportedColor : T[K];
};

/**
 * Allows shorthand properties (margin, padding, etc.) to use custom types
 * (colors, rem values) in their nested objects.
 */
export type WithShorthands<T> = {
  [K in keyof T]: K extends 'margin'
    ? SpacingShorthand<T[K]> | T[K]
    : K extends 'padding'
      ? SpacingShorthand<T[K]> | T[K]
      : K extends 'inset'
        ? InsetShorthand<T[K]> | T[K]
        : K extends 'borderRadius'
          ? BorderRadiusShorthand<T[K]> | T[K]
          : K extends 'gap'
            ? GapShorthand<T[K]> | T[K]
            : T[K];
};
