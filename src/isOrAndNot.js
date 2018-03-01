export const isOr = (isA, isB) => v => isA(v) || isB(v);
export const isAnd = (isA, isB) => v => isA(v) && isB(v);
export const isNot = is => v => !is(v);
