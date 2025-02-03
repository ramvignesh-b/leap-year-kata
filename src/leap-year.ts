export class Year {
    private readonly year: number;

    constructor(_year: number) {
        this.year = _year;
    }

    isLeapYear(): boolean {
        if (this.year % 100 === 0 && this.year % 400 !== 0) {
            return false;
        }
        return this.year % 4 === 0;
    }
}