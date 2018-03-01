import { default as expect } from "expect";
import isEqual from "is-equal";

import * as validators from "../src/isDate";

describe("isDate", () => {
  describe("isDateISO", () => {
    it("should not allow a boolean", () => {
      expect(validators.isDateISO(false)).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isDateISO(undefined)).toBe(false);
    });

    it("should not allow arrays", () => {
      expect(validators.isDateISO([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isDateISO({})).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isDateISO(null)).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isDateISO(NaN)).toBe(false);
    });

    it("should not allow a random string", () => {
      expect(validators.isDateISO("0a")).toBe(false);
    });

    it("should not allow a number", () => {
      expect(validators.isDateISO(345345)).toBe(false);
    });

    it("should not allow a number", () => {
      expect(validators.isDateISO(345345)).toBe(false);
    });

    it("should not allow a date string when the month is 13", () => {
      expect(validators.isDateISO("2015-13-05T12:35:45Z")).toBe(false);
    });

    it("should not allow a date string with slashes instead of dashes", () => {
      expect(validators.isDateISO("2016/09/01T00:00:00Z")).toBe(false);
    });

    it("should allow a date string with only the year", () => {
      expect(validators.isDateISO("2016")).toBe(true);
    });

    it("should allow a date string with only the date", () => {
      expect(validators.isDateISO("2016-09-01")).toBe(true);
    });

    it("should allow a date string with only the date and time", () => {
      expect(validators.isDateISO("2016-09-01T00:00")).toBe(true);
    });

    it("should allow a full date string", () => {
      expect(validators.isDateISO("2016-09-01T00:00:00Z")).toBe(true);
    });
  });

  describe("isDateAnyISO", () => {
    it("should not allow a boolean", () => {
      expect(validators.isDateAnyISO(false)).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isDateAnyISO(undefined)).toBe(false);
    });

    it("should not allow arrays", () => {
      expect(validators.isDateAnyISO([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isDateAnyISO({})).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isDateAnyISO(null)).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isDateAnyISO(NaN)).toBe(false);
    });

    it("should allow a number", () => {
      expect(validators.isDateAnyISO(123)).toBe(true);
    });

    it("should allow a full date string", () => {
      expect(validators.isDateAnyISO("2016-09-01T00:00:00Z")).toBe(true);
    });

    it("should not allow a date string with slashes instead of dashes", () => {
      expect(validators.isDateAnyISO("2016/09/01T00:00:00Z")).toBe(false);
    });
  });

  describe("isDateObject", () => {
    it("should not allow a boolean", () => {
      expect(validators.isDateObject(false)).toBe(false);
    });

    it("should not allow undefined", () => {
      expect(validators.isDateObject(undefined)).toBe(false);
    });

    it("should not allow arrays", () => {
      expect(validators.isDateObject([])).toBe(false);
    });

    it("should not allow objects", () => {
      expect(validators.isDateObject({})).toBe(false);
    });

    it("should not allow null", () => {
      expect(validators.isDateObject(null)).toBe(false);
    });

    it("should not allow NaN", () => {
      expect(validators.isDateObject(NaN)).toBe(false);
    });

    it("should not allow a number", () => {
      expect(validators.isDateObject(123)).toBe(false);
    });

    it("should allow a Date object", () => {
      expect(validators.isDateObject(new Date())).toBe(true);
    });
  });
});
