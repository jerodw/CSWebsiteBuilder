import { TimeSlot } from "./TimeSlot";

export class Professor {
    firstName: string;
    lastName: string;
    imgRef: string;
    email: string;
    phone: string;
    bestContactMethod: string;

    officeLocation: string;
    officeHours: TimeSlot[];

    constructor(
        firstName: string, lastName: string, imgRef: string,
        email: string, phone: string, bestContactMethod: string,
        officeLocation: string, officeHours: TimeSlot[]) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.imgRef = imgRef;
        this.email = email;
        this.phone = phone;
        this.bestContactMethod = bestContactMethod;
        this.officeLocation = officeLocation;
        this.officeHours = officeHours;
    }
}