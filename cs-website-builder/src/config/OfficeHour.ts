export class OfficeHour {
    dayOfWeek: DayOfWeek;
    startHour: number;
    stopHour: number;

    constructor(dayOfWeek: DayOfWeek, startHour: number, stopHour: number) {
        this.dayOfWeek = dayOfWeek;
        this.startHour = startHour;
        this.stopHour = stopHour;
    }
}

enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}