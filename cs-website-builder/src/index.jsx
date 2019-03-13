import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './App.jsx';
import fs from 'fs';
import {WebsiteConfig} from './config/WebsiteConfig.ts';
import {Config} from './config/Config.ts';

Config.NO_ERRORS = true;

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


// build the website
const template = fs.readFileSync('./templates/template-test.html', { 'encoding': 'utf8' });
const index = ReactDOMServer.renderToString(< App template={template} />);

fs.writeFile(buildDirectory + 'index.html', index, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("built website to " + __dirname + "\\build\\");
});
