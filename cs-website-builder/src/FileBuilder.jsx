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
            this.throwError("Error: Config in invalid format!");
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

    buildPath(filepath){
        var path = require('path');
        var dirname = path.dirname(filepath);

        if (!fs.existsSync(dirname)) {
            this.buildDir(dirname);
        }
    }

    buildClassNote(classNote) {
        const filePath = classNote.fileReference.filePath;
        this.buildPath(`${this.config.outputDirectory}/${FileBuilder.assetPath}/${filePath}`);

        if (classNote.availableDate <= new Date()) {
            console.log(`FileBuilder: Copying resources for "${classNote.title}"`)
            fs.copyFileSync(`${FileReference.basePath}/${filePath}`,
                `${this.config.outputDirectory}/${FileBuilder.assetPath}/${filePath}`)
        } else {
            console.log(`FileBuilder: Skipping "${classNote.title}" (Not Yet Avaliable)`)
        }


    }

    buildAssignment(assignment) {
        const filePath = assignment.bodyReference.filePath;
        this.buildPath(`${this.config.outputDirectory}${FileBuilder.assignmentPath}/${filePath}`);

        if (assignment.availableDate <= new Date()) {
            console.log(`FileBuilder: Building html for "${assignment.title}"`);

            const template = fs.readFileSync(`${FileReference.basePath}${filePath}`, { 'encoding': 'utf8' });
            const webpage = ReactDOMServer.renderToString(< App config={this.config} template={template} />);
            fs.writeFile(`${this.config.outputDirectory}${FileBuilder.assignmentPath}/${filePath}`, webpage, (err) => {
                if (err) {
                    console.error(err);
                    process.exit();
                }
            })

        } else {
            console.log(`FileBuilder: Skipping "${assignment.title}" (Not Yet Avaliable)`)
        }
    }

}