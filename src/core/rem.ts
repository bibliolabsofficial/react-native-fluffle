import { PixelRatio, Platform } from 'react-native';

const BASE_FONT_SIZE = Platform.OS === 'ios' ? 17 : 14;

let root = BASE_FONT_SIZE;

export function setRootFontSize(value: number) {
  root = value;
}

export function getRemBase() {
  return root * PixelRatio.getFontScale();
}

const REM_REGEX = /^(-?\d*\.?\d+)rem$/;

export function parseRem(value: string): number | null {
  const match = value.match(REM_REGEX);
  if (!match) return null;

  return Number(match[1]) * getRemBase();
}
