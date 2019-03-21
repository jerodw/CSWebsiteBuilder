import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './App.jsx';
import { Home } from './builderTemplates/Home.jsx'
import fs from 'fs';
import { WebsiteConfig } from './config/WebsiteConfig.ts';
import { Config } from './config/Config.ts';
import { TAInfo } from './builderTemplates/TAInfo.jsx';
import { FileReference } from './config/FileReference';

Config.NO_ERRORS = false;

// get the config file location
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: npm run build <config-file> \n config-file: relative location of the course config file.")
    process.exit();
}

const configFilePath = args[0];
const configJSON = fs.readFileSync(configFilePath);
const configObj = new WebsiteConfig(JSON.parse(configJSON));

const buildDirectory = configObj.outputDirectory;
const templateDirectory = FileReference.basePath;

// define our pre-made templates
var builderTemplates = new Map();
builderTemplates["home-template"] = <Home config={configObj} />
builderTemplates["taInfo-template"] = <TAInfo config={configObj} />

// build the website based on the navigation links from the config file
const navLinks = configObj.navLinks;

console.log('Copying stylesheet to build directory...');
fs.copyFileSync('styles.css', `${buildDirectory}/styles.css`);

for (var i = 0; i < navLinks.length; i++) {
    var navLink = navLinks[i];

    // check to see if the navLink.templateRef is a pre-made component (that we make)
    if (builderTemplates[navLink.templateRef] !== undefined) {
        // build one of our pre-made react components (like the ta page, etc)
        buildTemplate(navLink);
    } else {
        buildCustomPage(navLink)
    }
}

function buildTemplate(navLink) {
    const template = builderTemplates[navLink.templateRef];
    const webpage = ReactDOMServer.renderToString(template);
    fs.writeFile(buildDirectory + navLink.filename, webpage, onError)
    console.log("Built " + navLink.filename);
}

function buildCustomPage(navLink) {
    const template = fs.readFileSync(`${templateDirectory}${navLink.templateRef}`, { 'encoding': 'utf8' });
    const webpage = ReactDOMServer.renderToString(< App config={configObj} template={template} />);
    fs.writeFile(buildDirectory + navLink.filename, webpage, onError)
    console.log("Built " + navLink.filename);
}

function onError(err) {
    if (err) {
        console.error(err);
        return;
    }
}

// tell the user where to find the built website
var pathToSrc = __dirname.slice(0, __dirname.length - 4);
console.log("built website to " + pathToSrc + buildDirectory.slice(1));
console.log("Finished Build")