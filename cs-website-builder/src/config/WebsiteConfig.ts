import { FileReference } from './FileReference';
import { Config } from './Config';
import { PersonInformation } from './PersonInformation';
import { NavLink } from './NavLink';
import * as fs from 'fs';
import { ClassPeriod } from './ClassPeriod';

export class WebsiteConfig extends Config {
    private _courseName: string;
    private _courseInfo: FileReference;
    private _professors: PersonInformation[];
    private _tas: PersonInformation[];
    private _classPeriods: ClassPeriod[];
    private _baseURL: string;
    private _navLinks: NavLink[];
    private _outputDirectory: string;


    constructor({ baseURL, courseName, courseInfo, navLinks, professors, tas, classPeriods, inDir = './templates', outDir = './build' }:
        { baseURL: string, courseName: string, courseInfo: string, navLinks: string[], professors: string[], tas: string[], classPeriods: string[], inDir: string, outDir: string }) {
        super();
        if (!courseName || courseName === '') {
            this.throwError('Error: Missing required parameter courseName');
        }
        if (!courseInfo || courseInfo === ''){
            this.throwError('Error: Missing required parameter courseInfo');
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
        if (fs.existsSync(inDir)) {
            FileReference.basePath = inDir;
        } else {
            this.throwError(`Error: inDir path ${inDir} does not exist`);
        }

    
        this.baseURL = baseURL;
        this.courseName = courseName;
    
        this.courseInfo = new FileReference(courseInfo);
        this.classPeriods = classPeriods.map((classPeriod: any) => new ClassPeriod(classPeriod));
        this.tas = tas.map((ta: any) => new PersonInformation(ta));
        this.professors = professors.map((professor: any) => new PersonInformation(professor));
        this.navLinks = navLinks.map((navLink: any) => new NavLink(navLink));
        this.outputDirectory = outDir;
        

        // var fileBuilder = new FileBuilder(this);
        // fileBuilder.build();
    }

    public get courseInfo(): FileReference {
        return this._courseInfo;
    }

    public set courseInfo(value: FileReference) {
        this._courseInfo = value;
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