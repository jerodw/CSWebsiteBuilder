import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './App.jsx';
import { Home } from './builderTemplates/Home.jsx'
import fs from 'fs';
import { WebsiteConfig } from './config/WebsiteConfig.ts';
import { Config } from './config/Config.ts';

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
console.log(configObj);

// builds the build directory if it doesn't exist
const buildDirectory = "./build/"
if (!fs.existsSync(buildDirectory)) {
    fs.mkdirSync(buildDirectory);
}

// define our pre-made templates
var builderTemplates = new Map();
builderTemplates["home-template"] = <Home config={configObj} />

// build the website based on the navigation links from the config file
const navLinks = configObj.navLinks;

for (var i = 0; i < navLinks.length; i++) {
    var navLink = navLinks[i];

    // check to see if the navLink.templateRef is a pre-made component (that we make)
    if (builderTemplates[navLink.templateRef] != undefined) {
        // build one of our pre-made react components (like the ta page, etc)
        buildTemplate(navLink);
    } else {
        buildCustomPage(navLink)
    }
}

function buildTemplate(navLink) {
    const template = builderTemplates[navLink.templateRef];
    console.log("Building " + navLink.filename);
    const webpage = ReactDOMServer.renderToString(template);
    console.log("Writing to " + navLink.filename)
    fs.writeFile(buildDirectory + navLink.filename, webpage, onError)
    console.log("Built " + navLink.filename);
}

function buildCustomPage(navLink) {
    const template = fs.readFileSync('./templates/' + navLink.templateRef, { 'encoding': 'utf8' });
    console.log("Building " + navLink.filename);
    const webpage = ReactDOMServer.renderToString(< App config={configObj} template={template} />);
    console.log("Writing to " + navLink.filename)
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
console.log("built website to " + pathToSrc + "\\build\\");
console.log("Finished Build")