import { TimeSlot } from "./TimeSlot";
import { WeekDay } from "@angular/common";

export class TA {
    firstName: string;
    lastName: string
    imgRef: string;
    email: string;
    timeSlots: TimeSlot[];

    constructor(firstName: string, lastName:string, imgRef:string, email:string, timeSlots: TimeSlot[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.imgRef = imgRef;
        this.email = email;
        this.timeSlots = timeSlots;
    }

    isWorking(weekDay:WeekDay, hour:number):boolean{
        for (let i = 0; i < this.timeSlots.length; i++){
            if (this.timeSlots[i].weekDay == weekDay && 
                this.timeSlots[i].startHour < hour &&
                hour < this.timeSlots[i].stopHour){
                    return true;
                }
        }
        return false;
    }
}