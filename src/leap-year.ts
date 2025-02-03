export class Year {
    private year: number;

    constructor(_year: number) {
        this.year = _year;
    }

    isLeapYear(): boolean {
        if (this.year % 4 === 0) return true;
        return false;
    }
}