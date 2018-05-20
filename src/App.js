import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Starter Project</h1>
          </header>
          <p className="App-intro">
            Hello i am a react component
          </p>
        </div>
      </StyleRoot>

    );
  }
}

export default Radium(App);
