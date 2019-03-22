import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import { App } from './App.jsx';
import { Config } from './config/Config';
import { WebsiteConfig } from './config/WebsiteConfig.ts';
import { FileReference } from './config/FileReference.ts';

export class FileBuilder extends Config {
    config;
    static assetPath = `assets`;
    static assignmentPath = `assignments`;

    constructor(config) {
        super();
        if (config instanceof WebsiteConfig == false) {
            throw ("config in invalid format!")
        }

        this.config = config;
    }

    build() {
        // write the file to the build directory
        console.log("FileBuilder: Building Directories....")
        this.buildDir(this.config.outputDirectory);
        this.buildDir(`${this.config.outputDirectory}${FileBuilder.assetPath}`);
        this.buildDir(`${this.config.outputDirectory}${FileBuilder.assignmentPath}`);

        console.log("FileBuilder: Building Class Resources")
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

    buildClassNote(classNote) {
        const filePath = classNote.fileReference.filePath;

        console.log(`FileBuilder: Copying resources for "${classNote.title}"`)
        fs.copyFileSync(`${FileReference.basePath}/${filePath}`,
            `${this.config.outputDirectory}/${FileBuilder.assetPath}/${filePath}`)
    }

    buildAssignment(assignment) {
        const filePath = assignment.bodyReference.filePath;

        console.log(`FileBuilder: Building html for "${assignment.title}"`);

        const template = fs.readFileSync(`${FileReference.basePath}${filePath}`, { 'encoding': 'utf8' });
        const webpage = ReactDOMServer.renderToString(< App config={this.config} template={template} />);
        fs.writeFile(`${this.config.outputDirectory}${FileBuilder.assignmentPath}/${filePath}`, webpage, (err) => {
            if (err) {
                console.error(err);
                process.exit();
            }
        })
    }

}