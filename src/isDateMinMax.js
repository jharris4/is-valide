import { isMinParsed, isMaxParsed, isMinMaxParsed } from "./isMinMax";
import { isDateISO, isDateAnyISO } from "./isDate";

const dateParser = v => new Date(v);

export const isDateISOMin = min => isMinParsed(isDateISO, dateParser, min);
export const isDateISOMax = max => isMaxParsed(isDateISO, dateParser, max);
export const isDateISOMinMax = (min, max) => isMinMaxParsed(isDateISO, dateParser, min, max);

export const isDateAnyISOMin = min => isMinParsed(isDateAnyISO, dateParser, min);
export const isDateAnyISOMax = max => isMaxParsed(isDateAnyISO, dateParser, max);
export const isDateAnyISOMinMax = (min, max) => isMinMaxParsed(isDateAnyISO, dateParser, min, max);
