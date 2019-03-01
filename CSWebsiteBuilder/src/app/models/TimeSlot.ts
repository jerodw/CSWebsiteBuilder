import { WeekDay } from "@angular/common";

export class TimeSlot {
    weekDay: WeekDay
    startHour: number
    stopHour: number

    // start and stop hours are a value from 0-23 representing the hour of the day
    constructor(weekDay:WeekDay, startHour:number, stopHour:number){
        this.weekDay = weekDay;
        this.startHour = startHour;
        this.stopHour = stopHour;
    }

}