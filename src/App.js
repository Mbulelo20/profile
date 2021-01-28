import React, { Fragment } from 'react';
import {Footer, FooterDropDownSection, FooterLinkList, FooterSection} from 'react-mdl'

import './App.css';
import {Grid, Cell, Layout, Header, Navigation} from 'react-mdl'
import {Link, Switch, Route} from 'react-router-dom'
import Home from './components/home.js'
import Contactform from './components/Contactform'
import About from './components/about';
import MyProjects from './components/MyProjects';
import Testimonials from './components/testimonials';
import Skills from './components/Skills'
import Python from './components/py'

function App() {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-sm fixed-top" style={{height:'90px', background: 'transparent'}}>  
        <ul class="navbar-nav" style={{textAlign: 'left'}}>
          <li class="nav-item">
            <a class="nav-link" href="#section1">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section2">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section3">My projects</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Section 4
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#section41">Link 1</a>
              <a class="dropdown-item" href="#section42">Link 2</a>
            </div>
          </li>
        </ul>
      </nav>
      <div id="section1" class="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Home/>
          
      </div>
      <div id="section2" class="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <About/>
      </div>
      <div id="section3" class="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <h1>Section 3</h1>
        <MyProjects/>
      </div>
  </Fragment>
  );
}

export default App;
