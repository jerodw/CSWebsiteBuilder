import { Config } from './Config';
export class WebsiteConfig extends Config {
    private professors:Array<PersonInformation>;
    private tas:Array<PersonInformation>;
    private classNotes:Array<NotesReference>;
    private assignments:Array<Assignment>;
    private baseURL:string;
    private policies:Policies;
    
    constructor({}) {
        
    }
}