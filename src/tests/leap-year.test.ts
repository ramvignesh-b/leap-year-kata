import {describe, expect, it} from "vitest";
import {Year} from "../leap-year";

describe("Leap Year", () => {
    it("should return false if not divisible by 4", () => {
        const year = new Year(1997);
        expect(year.isLeapYear()).toBe(false);
    });

    it("should return true if divisible by 4", () => {
        const year = new Year(1996);
        expect(year.isLeapYear()).toBe(true);
    });

    it("should return true if divisble by 400", () => {
        const year = new Year(1600);
        expect(year.isLeapYear()).toBe(true);
    });

    it("should return false if divisible by 100 but not by 400", () => {
        const year = new Year(1800);
        expect(year.isLeapYear()).toBe(false);
    });
})