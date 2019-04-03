import React, { Component } from 'react';
import {Head} from './helperComponents/Head.jsx';
import {Header} from './helperComponents/Header.jsx';

export class App extends Component {
  render() {
    return (
      <html>
        <Head /> 
        <Header config={this.props.config} baseURL={''} />
        <div className="App container content" dangerouslySetInnerHTML={ {__html: this.props.template } }>
        </div>
      </html>
    );
  }
}