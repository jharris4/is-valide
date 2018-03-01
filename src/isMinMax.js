export const isMin = (isFunction, min) => v => isFunction(v) && v >= min;
export const isMax = (isFunction, max) => v => isFunction(v) && v <= max;
export const isMinMax = (isFunction, min, max) => v => isFunction(v) && v >= min && v <= max;

export const isMinParsed = (isFunction, parseFunction, min) => v =>
  isFunction(v) && parseFunction(v) >= parseFunction(min);
export const isMaxParsed = (isFunction, parseFunction, max) => v =>
  isFunction(v) && parseFunction(v) <= parseFunction(max);
export const isMinMaxParsed = (isFunction, parseFunction, min, max) => v =>
  isFunction(v) && parseFunction(v) >= parseFunction(min) && parseFunction(v) <= parseFunction(max);
