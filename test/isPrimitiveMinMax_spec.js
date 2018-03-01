import { default as expect } from "expect";
import isEqual from "is-equal";

import * as validators from "../src/isPrimitiveMinMax";

describe("isPrimitiveMinMax", () => {
  describe("isNumberMin", () => {
    it("should not allow undefined", () => {
      expect(validators.isNumberMin(0)(undefined)).toBe(false);
    });

    it("should not allow numbers less than the argument", () => {
      expect(validators.isNumberMin(0)(-2)).toBe(false);
    });

    it("should allow numbers greater than the argument", () => {
      expect(validators.isNumberMin(4)(5)).toBe(true);
    });

    it("should allow numbers equal to the argument", () => {
      expect(validators.isNumberMin(4)(4)).toBe(true);
    });
  });

  describe("isNumberMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isNumberMax(0)(undefined)).toBe(false);
    });

    it("should not allow numbers greater than the argument", () => {
      expect(validators.isNumberMax(0)(2)).toBe(false);
    });

    it("should allow numbers less than the argument", () => {
      expect(validators.isNumberMax(4)(3)).toBe(true);
    });

    it("should allow numbers equal to the argument", () => {
      expect(validators.isNumberMax(4)(4)).toBe(true);
    });
  });

  describe("isNumberMinMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isNumberMinMax(0, 0)(undefined)).toBe(false);
    });

    it("should not allow numbers greater than the max argument", () => {
      expect(validators.isNumberMinMax(0, 1)(2)).toBe(false);
    });

    it("should not allow numbers less than the min argument", () => {
      expect(validators.isNumberMinMax(0, 1)(-1)).toBe(false);
    });

    it("should allow numbers between the min and max argument", () => {
      expect(validators.isNumberMinMax(3, 4)(3.5)).toBe(true);
    });

    it("should allow numbers equal to the min argument", () => {
      expect(validators.isNumberMinMax(0, 4)(0)).toBe(true);
    });

    it("should allow numbers equal to the max argument", () => {
      expect(validators.isNumberMinMax(0, 4)(4)).toBe(true);
    });

    it("should allow numbers equal to both arguments", () => {
      expect(validators.isNumberMinMax(2, 2)(2)).toBe(true);
    });
  });

  describe("isNumericMin", () => {
    it("should not allow undefined", () => {
      expect(validators.isNumericMin(0)(undefined)).toBe(false);
    });

    it("should not allow numbers less than the argument", () => {
      expect(validators.isNumericMin(0)("-2")).toBe(false);
    });

    it("should allow numbers greater than the argument", () => {
      expect(validators.isNumericMin(4)("5")).toBe(true);
    });

    it("should allow numbers equal to the argument", () => {
      expect(validators.isNumericMin(4)("4")).toBe(true);
    });
  });

  describe("isNumericMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isNumericMax(0)(undefined)).toBe(false);
    });

    it("should not allow numbers greater than the argument", () => {
      expect(validators.isNumericMax(0)("2")).toBe(false);
    });

    it("should allow numbers less than the argument", () => {
      expect(validators.isNumericMax(4)("3")).toBe(true);
    });

    it("should allow numbers equal to the argument", () => {
      expect(validators.isNumericMax(4)("4")).toBe(true);
    });
  });

  describe("isNumericMinMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isNumericMinMax(0, 0)(undefined)).toBe(false);
    });

    it("should not allow numbers greater than the max argument", () => {
      expect(validators.isNumericMinMax(0, 1)("2")).toBe(false);
    });

    it("should not allow numbers less than the min argument", () => {
      expect(validators.isNumericMinMax(0, 1)("-1")).toBe(false);
    });

    it("should allow numbers between the min and max argument", () => {
      expect(validators.isNumericMinMax(3, 4)("3.5")).toBe(true);
    });

    it("should allow numbers equal to the min argument", () => {
      expect(validators.isNumericMinMax(0, 4)("0")).toBe(true);
    });

    it("should allow numbers equal to the max argument", () => {
      expect(validators.isNumericMinMax(0, 4)("4")).toBe(true);
    });

    it("should allow numbers equal to both arguments", () => {
      expect(validators.isNumericMinMax(2, 2)("2")).toBe(true);
    });
  });

  describe("isIntegerMin", () => {
    it("should not allow undefined", () => {
      expect(validators.isIntegerMin(0)(undefined)).toBe(false);
    });

    it("should not allow decimals", () => {
      expect(validators.isIntegerMin(0)(1.2)).toBe(false);
    });

    it("should not allow numbers less than the argument", () => {
      expect(validators.isIntegerMin(0)(-2)).toBe(false);
    });

    it("should allow numbers greater than the argument", () => {
      expect(validators.isIntegerMin(4)(5)).toBe(true);
    });

    it("should allow numbers equal to the argument", () => {
      expect(validators.isIntegerMin(4)(4)).toBe(true);
    });
  });

  describe("isIntegerMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isIntegerMax(0)(undefined)).toBe(false);
    });

    it("should not allow decimals", () => {
      expect(validators.isIntegerMax(2)(1.2)).toBe(false);
    });

    it("should not allow numbers greater than the argument", () => {
      expect(validators.isIntegerMax(0)(2)).toBe(false);
    });

    it("should allow numbers less than the argument", () => {
      expect(validators.isIntegerMax(4)(3)).toBe(true);
    });

    it("should allow numbers equal to the argument", () => {
      expect(validators.isIntegerMax(4)(4)).toBe(true);
    });
  });

  describe("isIntegerMinMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isIntegerMinMax(0, 0)(undefined)).toBe(false);
    });

    it("should not allow decimals", () => {
      expect(validators.isIntegerMinMax(0, 2)(1.2)).toBe(false);
    });

    it("should not allow numbers greater than the max argument", () => {
      expect(validators.isIntegerMinMax(0, 1)(2)).toBe(false);
    });

    it("should not allow numbers less than the min argument", () => {
      expect(validators.isIntegerMinMax(0, 1)(-1)).toBe(false);
    });

    it("should allow numbers between the min and max argument", () => {
      expect(validators.isIntegerMinMax(2, 4)(3)).toBe(true);
    });

    it("should allow numbers equal to the min argument", () => {
      expect(validators.isIntegerMinMax(0, 4)(0)).toBe(true);
    });

    it("should allow numbers equal to the max argument", () => {
      expect(validators.isIntegerMinMax(0, 4)(4)).toBe(true);
    });

    it("should allow numbers equal to both arguments", () => {
      expect(validators.isIntegerMinMax(2, 2)(2)).toBe(true);
    });
  });
});
