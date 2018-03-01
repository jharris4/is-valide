import { default as expect } from "expect";
import isEqual from "is-equal";

import * as validators from "../src/isColor";

describe("isColor", () => {
  describe("isColor", () => {
    it("should not allow a boolean", () => {
      expect(validators.isColor(false)).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isColor(undefined)).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isColor(NaN)).toBe(false);
    });

    it("should not allow arrays", () => {
      expect(validators.isColor([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isColor({})).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isColor(null)).toBe(false);
    });

    it("should not allow a random string", () => {
      expect(validators.isColor("0a")).toBe(false);
    });

    it("should not allow a number", () => {
      expect(validators.isColor(345345)).toBe(false);
    });

    it("should allow 3 digit hex strings", () => {
      expect(validators.isColor("#123")).toBe(true);
    });

    it("should allow 6 digit hex strings", () => {
      expect(validators.isColor("#123456")).toBe(true);
    });

    it("should not allow 5 digit hex strings", () => {
      expect(validators.isColor("#12345")).toBe(false);
    });

    it("should not allow 7 digit hex strings", () => {
      expect(validators.isColor("#1234567")).toBe(false);
    });

    it("should not allow 2 digit hex strings", () => {
      expect(validators.isColor("#12")).toBe(false);
    });

    it("should not allow 0 digit hex strings", () => {
      expect(validators.isColor("#")).toBe(false);
    });

    it("should not allow a number", () => {
      expect(validators.isColor(345345)).toBe(false);
    });

    it("should allow rgb notation strings", () => {
      expect(validators.isColor("rgb(123,123,123)")).toBe(true);
    });

    it("should not allow rgb notation strings when a color value is greater than 255", () => {
      expect(validators.isColor("rgb(123,256,123)")).toBe(false);
    });

    it("should not allow rgb notation strings when a color value is less than 0", () => {
      expect(validators.isColor("rgb(123,-123,123)")).toBe(false);
    });

    it("should not allow rgb notation strings when a color value is not numeric", () => {
      expect(validators.isColor("rgb(a123,123,123)")).toBe(false);
    });

    it("should allow rgba notation strings", () => {
      expect(validators.isColor("rgba(123,123,123, 1)")).toBe(true);
    });

    it("should not allow rgba notation strings when the alpha value is greater than 1", () => {
      expect(validators.isColor("rgba(123,256,123,1.1)")).toBe(false);
    });

    it("should not allow rgba notation strings when the alpha value is less than 0", () => {
      expect(validators.isColor("rgba(123,123,123,-1)")).toBe(false);
    });

    it("should not allow rgba notation strings when the alpha value is not numeric", () => {
      expect(validators.isColor("rgb(123,123,123,a)")).toBe(false);
    });
  });
});
