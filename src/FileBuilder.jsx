import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './App.jsx';
import { Config } from './config/Config';
import { WebsiteConfig } from './config/WebsiteConfig.ts';
import { FileReference } from './config/FileReference.ts';
var fs = require('fs-extra');
var path = require('path');

function buildDirPath(filepath){
    var dirname = path.dirname(filepath);
    if (fs.existsSync(dirname)){
        return true;
    }
    buildDirPath(dirname);
    fs.mkdirSync(dirname);
}

export class FileBuilder extends Config {
    config;

    constructor(config) {
        super();
        if (config instanceof WebsiteConfig == false) {
            this.throwError("Error: Config in invalid format!");
        }

        this.config = config;
    }

    build() {
        // write the file to the build directory
        console.log("\nFileBuilder: Building output directory....")
        buildDirPath(this.config.outputDirectory);

        console.log("\nFileBuilder: Building class resources")
        this.config.classPeriods.forEach((classPeriod) => {
            classPeriod.classNotes.forEach((classNote) => this.buildClassNote(classNote))
            classPeriod.assignments.forEach((assignment) => this.buildAssignment(assignment))
        });

        console.log("FileBuilder: Building External File References");
        this.buildExternalFileStruct(`${FileReference.basePath}`,`${this.config.outputDirectory}`);

        console.log("\nFileBuilder: Finished building files\n")

    }

    buildExternalFileStruct(templateDirectory, outputDirectory){
        // copy all files that are not html files from the template directory
        fs.copySync(templateDirectory, outputDirectory, {filter: (src, dest) => {
            if (src.includes('.html')){
                return false;
            }
            console.log(`FileBuilder: Copying non-html file: ${src} to ${dest}`);
            return true;
        }});
    }

    copyDirectory(imageDirectory, outputDirectory) {
      if ( !fs.existsSync( outputDirectory ) ) {
          fs.mkdirSync( outputDirectory );
      }

      fs.copySync(imageDirectory, outputDirectory, {filter: (src, dest) => {
          console.log(`FileBuilder: Copying file: ${src} to ${dest}`);
          return true;
      }});
    }

    buildClassNote(classNote) {
        const filePath = classNote.fileReference.filePath;
        buildDirPath(`${this.config.outputDirectory}${filePath}`);

        // only build the files if they are available
        if (classNote.availableDate <= new Date()) {
            console.log(`FileBuilder: Copying resources for "${classNote.title}"`)
            fs.copyFileSync(`${FileReference.basePath}/${filePath}`,
                `${this.config.outputDirectory}/${filePath}`)
        } else {
            console.log(`FileBuilder: Skipping "${classNote.title}" (Not Yet Avaliable)`)
        }


    }

    buildAssignment(assignment) {
        const filePath = assignment.bodyReference.filePath;
        buildDirPath(`${this.config.outputDirectory}/${filePath}`);

        if (assignment.availableDate <= new Date()) {
            console.log(`FileBuilder: Building html for "${assignment.title}"`);

            const template = fs.readFileSync(`${FileReference.basePath}${filePath}`, { 'encoding': 'utf8' });
            const webpage = ReactDOMServer.renderToString(< App config={this.config} template={template} />);
            fs.writeFile(`${this.config.outputDirectory}/${filePath}`, webpage, (err) => {
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
