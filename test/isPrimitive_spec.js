import { default as expect } from "expect";
import isEqual from "is-equal";

import * as validators from "../src/isPrimitive";

describe("isPrimitive", () => {
  describe("isBoolean", () => {
    it("should allow true", () => {
      expect(validators.isBoolean(true)).toBe(true);
    });

    it("should allow false", () => {
      expect(validators.isBoolean(false)).toBe(true);
    });

    it("should not allow NaN", () => {
      expect(validators.isBoolean(NaN)).toBe(false);
    });

    it("should not allow arrays", () => {
      expect(validators.isBoolean([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isBoolean({})).toBe(false);
    });

    it('should not allow "false"', () => {
      expect(validators.isBoolean("false")).toBe(false);
    });

    it('should not allow "true"', () => {
      expect(validators.isBoolean("true")).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isBoolean(null)).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isBoolean(undefined)).toBe(false);
    });

    it("should not allow 0", () => {
      expect(validators.isBoolean(0)).toBe(false);
    });
  });

  describe("isNumber", () => {
    it("should allow negative numbers", () => {
      expect(validators.isNumber(-1)).toBe(true);
    });

    it("should allow positive numbers", () => {
      expect(validators.isNumber(1)).toBe(true);
    });

    it("should allow 0", () => {
      expect(validators.isNumber(0)).toBe(true);
    });

    it("should allow decimals", () => {
      expect(validators.isNumber(123.4567)).toBe(true);
    });

    it("should allow exponential number notation", () => {
      expect(validators.isNumber(1e3)).toBe(true);
    });

    it("should not allow numbers provided as strings", () => {
      expect(validators.isNumber("123.456789")).toBe(false);
    });

    it("should not allow numbers provided as strings that end with text", () => {
      expect(validators.isNumber("123.456789aba")).toBe(false);
    });

    it("should not allow arrays", () => {
      expect(validators.isNumber([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isNumber({})).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isNumber(NaN)).toBe(false);
    });

    it("should not allow Infinity", () => {
      expect(validators.isNumber(Infinity)).toBe(false);
    });

    it("should not allow -Infinity", () => {
      expect(validators.isNumber(-Infinity)).toBe(false);
    });

    it("should not allow a boolean", () => {
      expect(validators.isNumber(false)).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isNumber(undefined)).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isNumber(null)).toBe(false);
    });

    it("should not allow a string", () => {
      expect(validators.isNumber("abc")).toBe(false);
    });
  });

  describe("isString", () => {
    it("should not allow undefined", () => {
      expect(validators.isString(undefined)).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isString(null)).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isString(NaN)).toBe(false);
    });

    it("should allow empty string", () => {
      expect(validators.isString("")).toBe(true);
    });

    it("should allow a random string", () => {
      expect(validators.isString("_# !@#$^&%^$%^ ajd")).toBe(true);
    });

    it("should not allow arrays", () => {
      expect(validators.isString([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isString({})).toBe(false);
    });

    it("should not allow a boolean", () => {
      expect(validators.isString(true)).toBe(false);
    });

    it("should not allow a number", () => {
      expect(validators.isString(345345)).toBe(false);
    });
  });

  describe("isArray", () => {
    it("should not allow empty objects", () => {
      expect(validators.isArray({})).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isArray(undefined)).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isArray(null)).toBe(false);
    });

    it("should not allow strings", () => {
      expect(validators.isArray("")).toBe(false);
    });

    it("should not allow strings that look like arrays", () => {
      expect(validators.isArray("[]")).toBe(false);
    });

    it("should not allow booleans", () => {
      expect(validators.isArray(false)).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isArray(NaN)).toBe(false);
    });

    it("should not allow numbers", () => {
      expect(validators.isArray(1)).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isArray({})).toBe(false);
    });

    it("should allow arrays", () => {
      expect(validators.isArray([])).toBe(true);
    });
  });

  describe("isObject", () => {
    it("should allow empty objects", () => {
      expect(validators.isObject({})).toBe(true);
    });

    it("should not allow undefined", () => {
      expect(validators.isObject(undefined)).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isObject(null)).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isObject(NaN)).toBe(false);
    });

    it("should not allow strings", () => {
      expect(validators.isObject("")).toBe(false);
    });

    it("should not allow strings that look like objects", () => {
      expect(validators.isArray("{}")).toBe(false);
    });

    it("should not allow booleans", () => {
      expect(validators.isObject(false)).toBe(false);
    });

    it("should not allow numbers", () => {
      expect(validators.isObject(1)).toBe(false);
    });

    it("should allow arrays", () => {
      expect(validators.isObject([])).toBe(true);
    });
  });

  describe("isAny", () => {
    it("should allow any value", () => {
      expect(validators.isAny(undefined)).toBe(true);
      expect(validators.isAny(null)).toBe(true);
      expect(validators.isAny(NaN)).toBe(true);
      expect(validators.isAny(123)).toBe(true);
      expect(validators.isAny({})).toBe(true);
      expect(validators.isAny([])).toBe(true);
      expect(validators.isAny("")).toBe(true);
      expect(validators.isAny(/aregex/)).toBe(true);
    });
  });

  describe("isNumeric", () => {
    it("should allow negative numbers", () => {
      expect(validators.isNumeric(-1)).toBe(true);
    });

    it("should allow positive numbers", () => {
      expect(validators.isNumeric(1)).toBe(true);
    });

    it("should allow 0", () => {
      expect(validators.isNumeric(0)).toBe(true);
    });

    it("should allow decimals", () => {
      expect(validators.isNumeric(123.4567)).toBe(true);
    });

    it("should allow exponential number notation", () => {
      expect(validators.isNumeric(1e3)).toBe(true);
    });

    it("should allow numbers provided as strings", () => {
      expect(validators.isNumeric("123.456789")).toBe(true);
    });

    it("show allow negative numbers provided as string", () => {
      expect(validators.isNumeric("-1")).toBe(true);
    });

    it("should allow numbers in exponential notation provided as strings", () => {
      expect(validators.isNumeric("5.56789e+0")).toBe(true);
    });

    it("should allow negative numbers in exponential notation provided as strings", () => {
      expect(validators.isNumeric("-5.56789e+0")).toBe(true);
    });

    it("should allow trailing decimal points", () => {
      expect(validators.isNumeric("123.")).toBe(true);
    });

    it("should allow leading decimal points", () => {
      expect(validators.isNumeric(".123")).toBe(true);
    });

    it("should not allow two decimal points", () => {
      expect(validators.isNumeric(".123.")).toBe(false);
    });

    it("should not allow two trailing decimal points", () => {
      expect(validators.isNumeric("123..")).toBe(false);
    });

    it("should not allow two leading decimal points", () => {
      expect(validators.isNumeric("..123")).toBe(false);
    });

    it("should not allow numbers provided as strings that end with text", () => {
      expect(validators.isNumeric("123.456789aba")).toBe(false);
    });

    it("should not allow numbers provided as strings that begin with text", () => {
      expect(validators.isNumeric("aba123.456789")).toBe(false);
    });

    it("should not allow numbers in exponential notation provided as strings that end with text", () => {
      expect(validators.isNumeric("5.56789e+0ee")).toBe(false);
    });

    it("should not allow numbers in exponential notation provided as strings that begin with text", () => {
      expect(validators.isNumeric("ee5.56789e+0")).toBe(false);
    });

    it("should not allow arrays", () => {
      expect(validators.isNumeric([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isNumeric({})).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isNumeric(NaN)).toBe(false);
    });

    it("should not allow Infinity", () => {
      expect(validators.isNumeric(Infinity)).toBe(false);
    });

    it("should not allow -Infinity", () => {
      expect(validators.isNumeric(-Infinity)).toBe(false);
    });

    it("should not allow a boolean", () => {
      expect(validators.isNumeric(false)).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isNumeric(undefined)).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isNumeric(null)).toBe(false);
    });

    it("should not allow a string", () => {
      expect(validators.isNumeric("abc")).toBe(false);
    });
  });

  describe("isInteger", () => {
    it("should not allow a boolean", () => {
      expect(validators.isInteger(false)).toBe(false);
    });

    it("should not allow a string", () => {
      expect(validators.isInteger("abc")).toBe(false);
    });

    it("should not allow a number string", () => {
      expect(validators.isInteger("1")).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isInteger(null)).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isInteger(void 0)).toBe(false);
    });

    it("should not allow arrays", () => {
      expect(validators.isInteger([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isInteger({})).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isInteger(NaN)).toBe(false);
    });

    it("should not allow Infinity", () => {
      expect(validators.isInteger(Infinity)).toBe(false);
    });

    it("should not allow -Infinity", () => {
      expect(validators.isInteger(-Infinity)).toBe(false);
    });

    it("should allow integers", () => {
      expect(validators.isInteger(1)).toBe(true);
    });

    it("should allow zero", () => {
      expect(validators.isInteger(0)).toBe(true);
    });

    it("should not allow decimals", () => {
      expect(validators.isInteger(1.3)).toBe(false);
    });

    it("should not allow exponential number notation if it is not an integer", () => {
      expect(validators.isInteger((0.07).toExponential())).toBe(false);
    });

    it("should allow exponential number notation if it is an integer", () => {
      expect(validators.isInteger(1e3)).toBe(true);
    });
  });
});
