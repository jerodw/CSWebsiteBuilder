import React, { Component } from 'react';
import {Head} from '../helperComponenets/Head.jsx';
import {Header} from '../helperComponenets/Header.jsx';
import { PersonInformation } from '../helperComponenets/PersonInfromation.jsx';

export class Home extends Component {

  renderProfessors = () => {
    const professors = this.props.config.professors
    return professors.map((professor) =>{
      return <PersonInformation key={professor} person={professor}/>
    })
  }

  render() {
    const config = this.props.config;

    return (
      <html>
        <Head /> 
        <Header config={config} baseURL={''} />
        <div className="Home container content">
        <h1>{config.courseName}</h1>
        <hr/>
        <p>
          Welcome to the {config.courseName} course website! We hope that you have a great semester.
          Below you can find the {config.professors.length > 1 ? "professors" : "professor"} for this course and their contact information.
          Click the navigation links above to navigate to the different parts of this course website.
        </p>
        <hr/>
        <h2>{config.professors.length > 1 ? "Course Professors" : "Course Professor"}</h2>
        {this.renderProfessors()}
        </div>
      </html>
    );
  }
}