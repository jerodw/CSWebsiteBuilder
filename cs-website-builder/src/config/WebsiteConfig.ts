import { Config } from './Config';
import { PersonInformation } from './PersonInformation';
import { NotesReference } from './NotesReference';
import { Assignment } from './Assignment';
import { Policies } from './Policies';

export class WebsiteConfig extends Config {
    private professors: Array<PersonInformation>;
    private tas: Array<PersonInformation>;
    private classNotes: Array<NotesReference>;
    private assignments: Array<Assignment>;
    private baseURL: string;
    private policies: Policies;

    constructor() {
        super();
    }
}