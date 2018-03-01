import { isString } from "./isPrimitive";

const colorHexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const colorRGBARegex = /^(rgba\()(.*)(\))$/;
const colorRGBRegex = /^(rgb\()(.*)(\))$/;
const colorThreeDigitRegex = /^[0-9]{1,3}$/;
const colorAlphaRegex = /^(0(\.\d+)?|1(\.0+)?)$/;

export const isColor = v => {
  if (!isString(v)) {
    return false;
  }
  if (colorHexRegex.test(v)) {
    return true;
  }
  let matches = v.match(colorRGBARegex);
  if (matches !== null) {
    let parts = matches[2].split(",");
    if (parts.length === 4) {
      for (let i = 0; i < 3; i++) {
        let part = parts[i].trim();
        if (colorThreeDigitRegex.test(part) === false) {
          return false;
        }
        let rgb = parseInt(part, 10);
        if (rgb < 0 || rgb > 255) {
          return false;
        }
      }
      let alpha = parts[3].trim();
      if (colorAlphaRegex.test(alpha) === false) {
        return false;
      }
      return true;
    }
  }
  matches = v.match(colorRGBRegex);
  if (matches !== null) {
    let parts = matches[2].split(",");
    if (parts.length === 3) {
      for (let i = 0; i < 3; i++) {
        let part = parts[i].trim();
        if (colorThreeDigitRegex.test(part) === false) {
          return false;
        }
        let rgb = parseInt(part, 10);
        if (rgb < 0 || rgb > 255) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
};
