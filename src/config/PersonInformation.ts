import { ContactInformation } from "./ContactInformation";
import { OfficeHour, DayOfWeek } from "./OfficeHour";
import { Config } from "./Config";
import { FileReference } from "./FileReference";

export class PersonInformation extends Config {
    pictureReference:FileReference;
    contactInformation:ContactInformation;
    officeHours: OfficeHour[];
    byAppointment: boolean;

    constructor({pictureReference, contactInformation, officeHours, byAppointment}:
        {pictureReference:string, contactInformation:any, officeHours: any[], byAppointment: boolean}){
            super();
            this.pictureReference = new FileReference(pictureReference);
            this.contactInformation = new ContactInformation(contactInformation);
            this.officeHours = officeHours.map((officeHour: any) => new OfficeHour(officeHour));
            this.byAppointment = byAppointment;
        }

    public isWorking(weekday: DayOfWeek, time: string){
        for (let i = 0; i < this.officeHours.length; i++){
            var officeHour = this.officeHours[i]
            if (officeHour.isInOffice(weekday, time)){
                return true;
            }
        }
        return false;
    }
}
