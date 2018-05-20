import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import 'primereact/resources/themes/omega/theme.css';
import './App.css';

import {Button} from 'primereact/components/button/Button';

import SampleComponent from './SampleComponent/SampleComponent';


import logo from './logo.svg';

class App extends Component {


  render() {

    return (
      <StyleRoot>
        <div className="App">
          <header className="AppHeader">
            <img src={logo} className="AppLogo" alt="logo" />
            <h1 className="AppTitle">React with CSS Modules</h1>
          </header>
          <Button icon="fa-check" iconPos="right" label="Sample Button"/>
          <p className="AppIntro">
            Hello i am a react component
          </p>
          <SampleComponent />
        </div>
      </StyleRoot>

    );
  }
}

export default Radium(App);
