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
        {this.renderProfessors()}
        </div>
      </html>
    );
  }
}