import React, { Component } from 'react';
import { Head } from '../helperComponents/Head.jsx';
import { Header } from '../helperComponents/Header.jsx';
import { PersonInformation } from '../helperComponents/PersonInformation.jsx';
import { FileReference } from '../config/FileReference.ts';
const fs = require("fs-extra")

export class Home extends Component {

  renderProfessors = () => {
    const professors = this.props.config.professors
    return professors.map((professor) => {
      return <PersonInformation key={professor} person={professor} />
    })
  }

  render() {
    const config = this.props.config;
    const template = fs.readFileSync(`${FileReference.basePath}/${config.courseInfo.filePath}`, { 'encoding': 'utf8' });

    return (
      <html>
        <Head baseURL={config.baseURL}/>
        <Header config={config} />
        <div className="Home container content">
          <h1>{config.courseName}</h1>
          <hr />
          <p dangerouslySetInnerHTML={{
            __html: template
          }}></p>
          <hr />
          <h2>{config.professors.length > 1 ? "Course Professors" : "Course Professor"}</h2>
          {this.renderProfessors()}
        </div>
      </html>
    );
  }
}