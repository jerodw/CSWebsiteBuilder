import { TimeSlot } from "./TimeSlot";

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
}