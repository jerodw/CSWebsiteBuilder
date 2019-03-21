import { FileReference } from './FileReference';
import { Config } from './Config';
import { PersonInformation } from './PersonInformation';
import { NotesReference } from './NotesReference';
import { Assignment } from './Assignment';
import { Policies } from './Policies';
import { NavLink } from './NavLink';
import fs from 'fs';

export class WebsiteConfig extends Config {
    private _courseName: string;
    private _professors: PersonInformation[];
    private _tas: PersonInformation[];
    private _classNotes: NotesReference[];
    private _assignments: Assignment[];
    private _baseURL: string;
    private _policies: Policies;
    private _navLinks: NavLink[];
    private _outputDirectory: string;


    constructor({ baseURL, courseName, navLinks, professors, tas, classNotes = null, assignments, policies, baseTemplatePath = './templates', outDir = './build' }:
        { baseURL: string, courseName: string, navLinks: string[], professors: string[], tas: string[], classNotes: string[], assignments: string[], policies: any, baseTemplatePath: string, outDir: string }) {
        super();
        if (!courseName || courseName === '') {
            this.throwError('Error: Missing required parameter courseName');
        }
        if (!baseURL || baseURL === '') {
            baseURL = `https://students.cs.byu.edu/~cs${courseName}ta/`;
            this.throwWarning('Warning: creating baseURL from courseName, URL is: ' + baseURL);
        }
        if (!navLinks || !navLinks.length) {
            this.throwError('Error: Missing navigation links');
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
        } else {
            this.classNotes = [];
        }
        if (fs.existsSync(baseTemplatePath)) {
            FileReference.basePath = baseTemplatePath;
        } else {
            this.throwError(`Error: template path ${baseTemplatePath} does not exist`);
        }
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir);
        }
        this.baseURL = baseURL;
        this.courseName = courseName;
        this.policies = new Policies(policies);
        this.assignments = assignments.map((assignment: any) => new Assignment(assignment));
        this.professors = professors.map((professor: any) => new PersonInformation(professor));
        this.navLinks = navLinks.map((navLink: any) => new NavLink(navLink));
        this.outputDirectory = outDir;
    }

    public get navLinks(): NavLink[] {
        return this._navLinks
    }

    public set navLinks(value: NavLink[]) {
        this._navLinks = value;
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

    public get outputDirectory(): string {
        return this._outputDirectory;
    }
    public set outputDirectory(value: string) {
        this._outputDirectory = value;
    }

}