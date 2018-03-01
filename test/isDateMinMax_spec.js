import { default as expect } from "expect";
import isEqual from "is-equal";

import * as validators from "../src/isDateMinMax";

describe("isDateMinMax", () => {
  const JAN_1 = "2018-01-01T12:00:00.000Z";
  const JAN_2 = "2018-01-02T12:00:00.000Z";
  const JAN_3 = "2018-01-03T12:00:00.000Z";

  describe("isDateISOMin", () => {
    it("should not allow undefined", () => {
      expect(validators.isDateISOMin(JAN_1)(undefined)).toBe(false);
    });

    it("should not allow dates less than the argument", () => {
      expect(validators.isDateISOMin(JAN_2)(JAN_1)).toBe(false);
    });

    it("should allow dates greater than the argument", () => {
      expect(validators.isDateISOMin(JAN_1)(JAN_2)).toBe(true);
    });

    it("should allow dates equal to the argument", () => {
      expect(validators.isDateISOMin(JAN_1)(JAN_1)).toBe(true);
    });
  });

  describe("isDateISOMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isDateISOMax(JAN_1)(undefined)).toBe(false);
    });

    it("should not allow dates greater than the argument", () => {
      expect(validators.isDateISOMax(JAN_1)(JAN_2)).toBe(false);
    });

    it("should allow dates less than the argument", () => {
      expect(validators.isDateISOMax(JAN_2)(JAN_1)).toBe(true);
    });

    it("should allow dates equal to the argument", () => {
      expect(validators.isDateISOMax(JAN_1)(JAN_1)).toBe(true);
    });
  });

  describe("isDateISOMinMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isDateISOMinMax(JAN_1, JAN_2)(undefined)).toBe(false);
    });

    it("should not allow dates greater than the max argument", () => {
      expect(validators.isDateISOMinMax(JAN_1, JAN_2)(JAN_3)).toBe(false);
    });

    it("should not allow dates less than the min argument", () => {
      expect(validators.isDateISOMinMax(JAN_2, JAN_3)(JAN_1)).toBe(false);
    });

    it("should allow dates between the min and max argument", () => {
      expect(validators.isDateISOMinMax(JAN_1, JAN_3)(JAN_2)).toBe(true);
    });

    it("should allow dates equal to the min argument", () => {
      expect(validators.isDateISOMinMax(JAN_1, JAN_3)(JAN_1)).toBe(true);
    });

    it("should allow dates equal to the max argument", () => {
      expect(validators.isDateISOMinMax(JAN_1, JAN_3)(JAN_3)).toBe(true);
    });

    it("should allow dates equal to both arguments", () => {
      expect(validators.isDateISOMinMax(JAN_2, JAN_2)(JAN_2)).toBe(true);
    });
  });

  describe("isDateAnyISOMin", () => {
    it("should not allow undefined", () => {
      expect(validators.isDateAnyISOMin(JAN_1)(undefined)).toBe(false);
    });

    it("should not allow dates less than the argument", () => {
      expect(validators.isDateAnyISOMin(JAN_2)(JAN_1)).toBe(false);
    });

    it("should allow dates greater than the argument", () => {
      expect(validators.isDateAnyISOMin(JAN_1)(JAN_2)).toBe(true);
    });

    it("should allow dates equal to the argument", () => {
      expect(validators.isDateAnyISOMin(JAN_1)(JAN_1)).toBe(true);
    });

    it("should not allow numbers less than the argument", () => {
      expect(validators.isDateAnyISOMin(2)(1)).toBe(false);
    });

    it("should allow numbers greater than the argument", () => {
      expect(validators.isDateAnyISOMin(1)(2)).toBe(true);
    });

    it("should allow numbers equal to the argument", () => {
      expect(validators.isDateAnyISOMin(1)(1)).toBe(true);
    });
  });

  describe("isDateAnyISOMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isDateAnyISOMax(JAN_1)(undefined)).toBe(false);
    });

    it("should not allow dates greater than the argument", () => {
      expect(validators.isDateAnyISOMax(JAN_1)(JAN_2)).toBe(false);
    });

    it("should allow dates less than the argument", () => {
      expect(validators.isDateAnyISOMax(JAN_2)(JAN_1)).toBe(true);
    });

    it("should allow dates equal to the argument", () => {
      expect(validators.isDateAnyISOMax(JAN_1)(JAN_1)).toBe(true);
    });

    it("should not allow numbers greater than the argument", () => {
      expect(validators.isDateAnyISOMax(1)(2)).toBe(false);
    });

    it("should allow numbers less than the argument", () => {
      expect(validators.isDateAnyISOMax(2)(1)).toBe(true);
    });

    it("should allow numbers equal to the argument", () => {
      expect(validators.isDateAnyISOMax(1)(1)).toBe(true);
    });
  });

  describe("isDateAnyISOMinMax", () => {
    it("should not allow undefined", () => {
      expect(validators.isDateAnyISOMinMax(JAN_1, JAN_2)(undefined)).toBe(false);
    });

    it("should not allow dates greater than the max argument", () => {
      expect(validators.isDateAnyISOMinMax(JAN_1, JAN_2)(JAN_3)).toBe(false);
    });

    it("should not allow dates less than the min argument", () => {
      expect(validators.isDateAnyISOMinMax(JAN_2, JAN_3)(JAN_1)).toBe(false);
    });

    it("should allow dates between the min and max argument", () => {
      expect(validators.isDateAnyISOMinMax(JAN_1, JAN_3)(JAN_2)).toBe(true);
    });

    it("should allow dates equal to the min argument", () => {
      expect(validators.isDateAnyISOMinMax(JAN_1, JAN_3)(JAN_1)).toBe(true);
    });

    it("should allow dates equal to the max argument", () => {
      expect(validators.isDateAnyISOMinMax(JAN_1, JAN_3)(JAN_3)).toBe(true);
    });

    it("should allow dates equal to both arguments", () => {
      expect(validators.isDateAnyISOMinMax(JAN_2, JAN_2)(JAN_2)).toBe(true);
    });

    it("should not allow numbers greater than the max argument", () => {
      expect(validators.isDateAnyISOMinMax(1, 2)(3)).toBe(false);
    });

    it("should not allow numbers less than the min argument", () => {
      expect(validators.isDateAnyISOMinMax(2, 3)(1)).toBe(false);
    });

    it("should allow numbers between the min and max argument", () => {
      expect(validators.isDateAnyISOMinMax(1, 3)(2)).toBe(true);
    });

    it("should allow numbers equal to the min argument", () => {
      expect(validators.isDateAnyISOMinMax(1, 3)(1)).toBe(true);
    });

    it("should allow numbers equal to the max argument", () => {
      expect(validators.isDateAnyISOMinMax(1, 3)(3)).toBe(true);
    });

    it("should allow numbers equal to both arguments", () => {
      expect(validators.isDateAnyISOMinMax(2, 2)(2)).toBe(true);
    });
  });
});
