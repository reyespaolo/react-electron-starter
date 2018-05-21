import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import { Link } from 'react-router-dom'
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import 'primereact/resources/themes/cupertino/theme.css';
import classes from './App.css';
import {mainRoute} from '../routes'


import logo from '../assets/logo.svg';

class App extends Component {

  render() {

    return (
        <StyleRoot>
          <div className={classes.App}>
            <header className={classes.AppHeader}>
              <img src={logo} className={classes.AppLogo} alt="logo" />
              <h1 className="AppTitle">React with CSS Modules</h1>
            </header>
            <nav>
              <ul>
                <li><Link to="/">Home Route</Link></li>
                <li><Link to="/sample_route">Sample Route</Link></li>
              </ul>
            </nav>
          </div>
            {mainRoute}
        </StyleRoot>
    );
  }
}

export default Radium(App);
