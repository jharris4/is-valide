import { default as expect } from "expect";
import isEqual from "is-equal";

import * as isValidators from "../src/isPrimitive";
import * as validators from "../src/isOrAndNot";

console.log("isValidators: ", isValidators);
console.log("validators: ", validators);

describe("isOrAndNot", () => {
  describe("isOr", () => {
    it("should not allow values when both validators return false", () => {
      const { isNumber, isBoolean } = isValidators;
      expect(validators.isOr(isNumber, isBoolean)("a")).toBe(false);
    });

    it("should allow values when one validator returns true", () => {
      const { isNumber, isBoolean } = isValidators;
      expect(validators.isOr(isNumber, isBoolean)(1)).toBe(true);
      expect(validators.isOr(isNumber, isBoolean)(false)).toBe(true);
    });

    it("should allow values when both validators return true", () => {
      const { isNumber } = isValidators;
      expect(validators.isOr(isNumber, isNumber)(1)).toBe(true);
    });
  });

  describe("isAnd", () => {
    it("should not allow values when both validators return false", () => {
      const { isNumber, isBoolean } = isValidators;
      expect(validators.isAnd(isNumber, isBoolean)("a")).toBe(false);
    });

    it("should not allow values when only one validator returns true", () => {
      const { isNumber, isBoolean } = isValidators;
      expect(validators.isAnd(isNumber, isBoolean)(1)).toBe(false);
      expect(validators.isAnd(isNumber, isBoolean)(false)).toBe(false);
    });

    it("should allow values when all validators return true", () => {
      const { isNumber } = isValidators;
      expect(validators.isOr(isNumber, isNumber)(1)).toBe(true);
    });
  });

  describe("isNot", () => {
    it("should allow values that are invalid", () => {
      const { isNumber } = isValidators;
      expect(validators.isNot(isNumber)("a")).toBe(true);
    });

    it("should not allow values that are valid", () => {
      const { isNumber } = isValidators;
      expect(validators.isNot(isNumber)(1)).toBe(false);
    });
  });
});
