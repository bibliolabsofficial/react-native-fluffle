/**
 * Style properties that can contain nested objects without being classified as
 * a nested style map.
 *
 * This includes:
 * - Shadow/text shadow offsets (e.g., `shadowOffset: { width: 1, height: 2 }`)
 * - Shorthand properties (e.g., `margin: { x: 10, y: 20 }`)
 */
export const KNOWN_OBJECT_STYLE_KEYS = new Set([
  'shadowOffset',
  'textShadowOffset',
  'margin',
  'padding',
  'inset',
  'borderRadius',
  'gap',
]);
