import { Config } from './Config';
import { PersonInformation } from './PersonInformation';
import { NotesReference } from './NotesReference';
import { Assignment } from './Assignment';
import { Policies } from './Policies';

export class WebsiteConfig extends Config {
    courseName: String;
    professors: Array<PersonInformation>;
    tas: Array<PersonInformation>;
    classNotes: Array<NotesReference>;
    assignments: Array<Assignment>;
    baseURL: string;
    policies: Policies;

    constructor() {
        super();
    }
}