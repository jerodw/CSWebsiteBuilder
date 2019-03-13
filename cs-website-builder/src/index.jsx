import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {App} from './App.jsx';
import fs from 'fs';

// builds the build directory if it doesn't exist
const buildDirectory = "./build/"
if (!fs.existsSync(buildDirectory)){
    fs.mkdirSync(buildDirectory);
}

const template = fs.readFileSync('./templates/template-test.html', { 'encoding': 'utf8' });
const index = ReactDOMServer.renderToString( < App template={ template } / > );

fs.writeFile(buildDirectory + 'index.html', index, function (err){
    if (err){
        console.error(err);
        return;
    }
    console.log("built website to " + __dirname + "\\build\\");
});
