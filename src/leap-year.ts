export class Year {
    private year: number;

    constructor(_year: number) {
        this.year = _year;
    }

    isLeapYear(): boolean {
        return false;
    }
}