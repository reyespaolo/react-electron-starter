import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import classes from './App.css'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className={classes.App}>
          <header className={classes.AppHeader}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
            <h1 className={classes.AppTitle}>React Starter Project</h1>
          </header>
          <p className={classes.AppIntro}>
            Hello i am a react component
          </p>
        </div>
      </StyleRoot>

    );
  }
}

export default Radium(App);
