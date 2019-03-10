import { ContactInformation } from "./ContactInformation";
import { OfficeHour } from "./OfficeHour";

export class PersonInformation{
    pictureReference:String;
    contactInformation:ContactInformation;
    officeHours: OfficeHour[];
    byAppointment: boolean;

    constructor(pictureReference:String,
        contactInformation:ContactInformation,
        officeHours: OfficeHour[],
        byAppointment: boolean){
            this.pictureReference = pictureReference;
            this.contactInformation = contactInformation;
            this.officeHours = officeHours;
            this.byAppointment = byAppointment;
        }
}
