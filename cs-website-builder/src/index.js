import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './index.css';
import App from './App';
import fs from 'fs';

const index = ReactDOMServer.renderToString( < App / > , document.getElementById('root'));

fs.writeFile(index, 'index.html');