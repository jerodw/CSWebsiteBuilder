import React, { Component } from 'react';
import {Head} from '../Head.jsx';
import {Header} from '../Header.jsx';
import { PersonInformation } from './helperComponenets/PersonInfromation.jsx';

export class Home extends Component {

  renderProfessors = () => {
    console.log(this.props.config.professors)
    return this.props.config.professors.map((professor, index) =>{
      return <PersonInformation person={professor}/>
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