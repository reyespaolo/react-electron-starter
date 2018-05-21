import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import { NavLink } from 'react-router-dom'
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
              <ul className={classes.MenuBar}>
                <li><NavLink exact activeStyle={{color:'#ffa500'}} className={classes.Menu} to="/">Home Route</NavLink></li>
                <li><NavLink className={classes.Menu} activeStyle={{color:'#ffa500'}} to="/sample_route">Sample Route</NavLink></li>
                <li><NavLink className={classes.Menu} activeStyle={{color:'#ffa500'}} to="/123">Sample Route with Params</NavLink></li>

              </ul>
            </nav>
          </div>
            {mainRoute}
        </StyleRoot>
    );

  }

}

export default Radium(App);
