import React, { Component } from 'react';
import {Head} from '../Head.jsx';
import {Header} from '../Header.jsx';

export class Home extends Component {

  render() {
    const config = this.props.config;

    return (
      <html>
        <Head /> 
        <Header config={config} baseURL={''} />
        <div className="Home container content">
        <h1>{config.courseName}</h1>
        </div>
      </html>
    );
  }
}