import React, { Component } from 'react';
import {Head} from './Head.jsx';
import {Header} from './Header.jsx';

export class App extends Component {
  render() {
    return (
      <html>
        <Head /> 
        <Header baseURL={''} />
        <div className="App container content" dangerouslySetInnerHTML={ {__html: this.props.template } }>
        </div>
      </html>
    );
  }
}