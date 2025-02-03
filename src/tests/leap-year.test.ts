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
    })
})