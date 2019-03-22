import { FileReference } from './FileReference';
import { Config } from './Config';
import { PersonInformation } from './PersonInformation';
import { NavLink } from './NavLink';
import fs from 'fs';
import { ClassPeriod } from './ClassPeriod';
import { FileBuilder } from './FileBuilder';

export class WebsiteConfig extends Config {
    private _courseName: string;
    private _professors: PersonInformation[];
    private _tas: PersonInformation[];
    private _classPeriods: ClassPeriod[];
    private _baseURL: string;
    private _navLinks: NavLink[];
    private _outputDirectory: string;


    constructor({ baseURL, courseName, navLinks, professors, tas, classPeriods, baseTemplatePath = './templates', outDir = './build' }:
        { baseURL: string, courseName: string, navLinks: string[], professors: string[], tas: string[], classPeriods: string[], baseTemplatePath: string, outDir: string }) {
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
            this.throwWarning("Warning: No TAs are defined");
            this.tas = [];
        }
        if (!classPeriods || !classPeriods.length) {
            this.throwWarning("Warning: No class periods found in config file");
            classPeriods = [];
        }
        if (fs.existsSync(baseTemplatePath)) {
            FileReference.basePath = baseTemplatePath;
        } else {
            this.throwError(`Error: template path ${baseTemplatePath} does not exist`);
        }

    
        this.baseURL = baseURL;
        this.courseName = courseName;
        this.classPeriods = classPeriods.map((classPeriod: any) => new ClassPeriod(classPeriod));
        this.tas = tas.map((ta: any) => new PersonInformation(ta));
        this.professors = professors.map((professor: any) => new PersonInformation(professor));
        this.navLinks = navLinks.map((navLink: any) => new NavLink(navLink));
        this.outputDirectory = outDir;
        
        var fileBuilder = new FileBuilder(this);
        fileBuilder.build();
    }

    public get navLinks(): NavLink[] {
        return this._navLinks
    }

    public set navLinks(value: NavLink[]) {
        this._navLinks = value;
    }

    public get classPeriods(): ClassPeriod[] {
        return this._classPeriods;
    }
    public set classPeriods(value: ClassPeriod[]) {
        this._classPeriods = value;
    }

    public get baseURL(): string {
        return this._baseURL;
    }

    public set baseURL(value: string) {
        this._baseURL = value;
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