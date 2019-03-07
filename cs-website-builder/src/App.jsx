import React, { Component } from 'react';
import {Head} from './Head.jsx';
import {Header} from './Header.jsx';

export class App extends Component {
  render() {
    return (
      <html>
        <Head /> 
         <Header />
            <div className="App">
          <div dangerouslySetInnerHTML={ {__html: this.props.template } }>
          </div>
        </div>
      </html>
    );
  }
}