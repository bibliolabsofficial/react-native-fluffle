import type { OklchColor, RGBColor, HSLColor, HWBColor } from './colors';

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

export type WithOklch<T> = {
  [K in keyof T]: K extends ColorKeys ? T[K] | SupportedColor : T[K];
};
