import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './App.jsx';
import fs from 'fs';
import { WebsiteConfig } from './config/WebsiteConfig.ts';
import { Config } from './config/Config.ts';
import { NavLink } from './config/NavLink.ts';

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
builderTemplates["home-template"] = "<Home />"

// build the website based on the navigation links from the config file
const navLinks = configObj.navLinks;

for (var i = 0; i < navLinks.length; i++) {
    var navLink = navLinks[i];

    // check to see if the navLink.templateRef is a pre-made component (that we make)
    if (!builderTemplates[navLink.templateRef] != null) {
        // build one of our pre-made react components (like the ta page, etc)
        // buildTemplate(navLink);
    } else {
        buildCustomPage(navLink)
    }

    console.log("Built " + navLink.filename);
}

function buildTemplate(navLink) {
    const template = builderTemplates[navLink.templateRef];
    const webpage = ReactDOMServer.renderToString(template);
    fs.writeFile(buildDirectory + navLink.filename, webpage, onError)
}

function buildCustomPage(navLink) {
    const template = fs.readFileSync('./templates/' + navLink.templateRef, { 'encoding': 'utf8' });
    const webpage = ReactDOMServer.renderToString(< App template={template} />);
    fs.writeFile(buildDirectory + navLink.filename, webpage, onError)
}

function onError(err) {
    if (err) {
        console.error(err);
        return;
    }
}

// TODO get actual build path (shows /src/build when it isn't /src/build)
console.log("built website to " + __dirname + "\\build\\");
console.log("Finished Build")