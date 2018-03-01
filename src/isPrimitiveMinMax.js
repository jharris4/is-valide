import { isMin, isMax, isMinMax } from "./isMinMax";
import { isNumber, isNumeric, isInteger } from "./isPrimitive";

export const isNumberMin = min => isMin(isNumber, min);
export const isNumberMax = max => isMax(isNumber, max);
export const isNumberMinMax = (min, max) => isMinMax(isNumber, min, max);

export const isNumericMin = min => isMin(isNumeric, min);
export const isNumericMax = max => isMax(isNumeric, max);
export const isNumericMinMax = (min, max) => isMinMax(isNumeric, min, max);

export const isIntegerMin = min => isMin(isInteger, min);
export const isIntegerMax = max => isMax(isInteger, max);
export const isIntegerMinMax = (min, max) => isMinMax(isInteger, min, max);
