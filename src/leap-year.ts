export class Year {
    private year: number;

    constructor(_year: number) {
        this.year = _year;
    }

    isLeapYear(): boolean {
        return this.year % 4 === 0;
    }
}