import { Config } from './Config';
export class ContactInformation extends Config {
    name: string;
    email: string;
    phoneNumber: string;
    officeLocation: string;


    constructor({name, email, phoneNumber, officeLocation}: 
        {name: string, email: string, phoneNumber: string, officeLocation: string}) {
        super();
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.officeLocation = officeLocation;
    }

}