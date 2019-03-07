import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {App} from './App.jsx';
import fs from 'fs';

const template = fs.readFileSync('./templates/template-test.html', { 'encoding': 'utf8' });

const index = ReactDOMServer.renderToString( < App template={ template } / > );

fs.writeFile('index.html', index, (err) => err);