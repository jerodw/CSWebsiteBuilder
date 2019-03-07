import { WeekDay } from "@angular/common";

export class TimeSlot {
    weekDay: WeekDay
    startHour: number
    stopHour: number

    // start and stop hours are a value from 0-23 representing the hour of the day
    constructor(weekDay: WeekDay, startHour: number, stopHour: number) {
        this.weekDay = weekDay;
        this.startHour = startHour;
        this.stopHour = stopHour;
    }

    toString(): string {
        var timeSlotString = "";

        switch (this.weekDay) {
            case WeekDay.Monday:
                timeSlotString += "Monday "
                break;
            case WeekDay.Tuesday:
                timeSlotString += "Tuesday "
                break;
            case WeekDay.Wednesday:
                timeSlotString += "Wednesday "
                break;
            case WeekDay.Thursday:
                timeSlotString += "Thursday "
                break;
            case WeekDay.Friday:
                timeSlotString += "Friday "
                break;
            case WeekDay.Saturday:
                timeSlotString += "Saturday "
                break;
            case WeekDay.Sunday:
                timeSlotString += "Sunday "
                break;
        }

        timeSlotString += this.getTimeString(this.startHour);
        timeSlotString += "-";
        timeSlotString += this.getTimeString(this.stopHour);
        return timeSlotString;
    }

    getTimeString(hour: number) {
        if (hour < 12) {
            return hour + ":00am";
        } else if (hour == 12) {
            return "12:00pm";
        } else {
            return (hour - 12) + ":00pm";
        }
    }

}