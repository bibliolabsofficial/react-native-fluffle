import { setRootFontSize } from '../core/rem';

export interface RemConfig {
  rootFontSize?: number;
}

/**
 * Configures global rem behavior.
 *
 * @example
 * ```ts
 * configureRem({
 *   rootFontSize: 16,
 * });
 * ```
 */
export function configureRem(config: RemConfig) {
  if (config.rootFontSize != null) {
    setRootFontSize(config.rootFontSize);
  }
}
