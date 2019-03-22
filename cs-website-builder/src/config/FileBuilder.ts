import { Config } from "./Config";
import { WebsiteConfig } from "./WebsiteConfig";
import { NotesReference } from "./NotesReference";
import { FileReference } from "./FileReference";
import fs from 'fs';
import { Assignment } from "./Assignment";

export class FileBuilder extends Config {
    config: WebsiteConfig
    static assetPath: string;
    static assignmentPath: string;

    constructor(config: WebsiteConfig) {
        super();
        this.config = config;
        FileBuilder.assetPath = `assets`
        FileBuilder.assignmentPath = `assignments`
    }

    build(): void {
        // write the file to the build directory
        console.log("Building Directories....")
        this.buildDir(this.config.outputDirectory);
        this.buildDir(FileBuilder.assetPath);
        this.buildDir(FileBuilder.assignmentPath);

        console.log("Building Class Resources")
        this.config.classPeriods.forEach((classPeriod) => {
            classPeriod.classNotes.forEach((classNote) => this.buildClassNote(classNote))
            classPeriod.assignments.forEach((assignment) => this.buildAssignment(assignment))
        })
    }

    buildDir(dirName) {
        if (!fs.existsSync(dirName)) {
            fs.mkdirSync(dirName);
        }
    }

    buildClassNote(classNote: NotesReference) {
        const filePath = classNote.fileReference.filePath;

        console.log(`copying resources for "${classNote.title}"`)
        fs.copyFileSync(`${FileReference.basePath}/${filePath}`,
            `${this.config.outputDirectory}/${FileBuilder.assetPath}/${filePath}`)
    }

    buildAssignment(assignment: Assignment) {
        const filePath = assignment.bodyReference.filePath;

        console.log(`building html for "${assignment.title}"`)
        //todo need to build full html pages
        fs.copyFileSync(`${FileReference.basePath}/${filePath}`,
            `${this.config.outputDirectory}/${FileBuilder.assignmentPath}/${filePath}`)
    }

}