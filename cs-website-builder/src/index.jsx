import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './App.jsx';
import fs from 'fs';
import {WebsiteConfig} from './config/WebsiteConfig.ts';
import {Config} from './config/Config.ts';
import {NavLink} from './config/NavLink.ts';

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

const navLinks = configObj.navLinks;

var builderTemplates = new Map();
builderTemplates["home-template"] = "<Home />"

function buildWebsitePage(navLink) {
    // if the navLink.template is a builderTemplate, render its string, otherwise build a custom page
    // build the page to navLink.filename
    // each page needs a navigation bar that has each navLink title and href using the filename
}

function buildCustomPage(navLink){

}

// build the website
const template = fs.readFileSync('./templates/template-test.html', { 'encoding': 'utf8' });
const index = ReactDOMServer.renderToString(< App template={template} />);

fs.writeFile(buildDirectory + 'index.html', index, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    // TODO get actual build path (shows /src/build when it isn't /src/build)
    console.log("built website to " + __dirname + "\\build\\");
});
