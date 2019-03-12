import { FileReference } from './FileReference';
import { Config } from './Config';
import { PersonInformation } from './PersonInformation';
import { NotesReference } from './NotesReference';
import { Assignment } from './Assignment';
import { Policies } from './Policies';

export class WebsiteConfig extends Config {
    private _courseName: string;
    private _professors: PersonInformation[];
    private _tas: PersonInformation[];
    private _classNotes: NotesReference[];
    private _assignments: Assignment[];
    private _baseURL: string;
    private _policies: Policies;
    

    constructor({baseURL, policies, courseName, professors, tas, classNotes = null}:
        {baseURL: string, policies: any, courseName: string, professors: string[], tas:string[], classNotes: string[]}) {
        super();
        if (!courseName || courseName === '') {
            this.throwError('Error: Missing required parameter courseName');
        }
        if (!baseURL || baseURL === '') {
            baseURL = `https://students.cs.byu.edu/~cs${courseName}ta/`;
            this.throwWarning('Warning: creating baseURL from courseName, URL is: ' + baseURL);
        }
        if (!professors || !professors.length) {
            this.throwError('Error: No professors for the course, at least one professor is required');
        }
        if (!tas || !tas.length) {
            this.throwWarning("Warning: No TAs are defined, no TA page will be generated");
            this.tas = null;
        } else {
            this.tas = tas.map((ta: any) => new PersonInformation(ta));
        }
        if (classNotes && classNotes.length) {
            this.classNotes = classNotes.map((notes: any) => new NotesReference(notes));
        }
        this.baseURL = baseURL;
        this.courseName = courseName;
        this.policies = new Policies(policies);
        this.assignments = this.assignments.map((assignment: any) => new Assignment(assignment));
        this.professors = this.professors.map((professor: any) => new PersonInformation(professor));
    }

    public get classNotes(): NotesReference[] {
        return this._classNotes;
    }
    public set classNotes(value: NotesReference[]) {
        this._classNotes = value;
    }

    public get assignments(): Assignment[] {
        return this._assignments;
    }

    public set assignments(value: Assignment[]) {
        this._assignments = value;
    }

    public get baseURL(): string {
        return this._baseURL;
    }

    public set baseURL(value: string) {
        this._baseURL = value;
    }

    public get policies(): Policies {
        return this._policies;
    }

    public set policies(value: Policies) {
        this._policies = value;
    }

    public get tas(): PersonInformation[] {
        return this._tas;
    }

    public set tas(value: PersonInformation[]) {
        this._tas = value;
    }

    public get professors(): PersonInformation[] {
        return this._professors;
    }
    
    public set professors(value: PersonInformation[]) {
        this._professors = value;
    }

    public get courseName(): string {
        return this._courseName;
    }
    
    public set courseName(value: string) {
        this._courseName = value;
    }
}