import React, { Fragment } from 'react';
import {Footer, FooterDropDownSection, FooterLinkList, FooterSection} from 'react-mdl'

import './App.css';
import Home from './components/home.js'
import Contactform from './components/Contactform'
import About from './components/about';
import MyProjects from './components/MyProjects';
import Testimonials from './components/testimonials';

function App() {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-sm fixed-top" style={{height:'70px', background: 'transparent', backgroundColor:'grey'}}>  
        <ul class="navbar-nav ml-auto" style={{textAlign: 'right', marginTop:'4em'}}>
          <li class="nav-item">
            <a class="nav-link" href="#section1">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section2">About me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section3">My projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section4">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section5">Contact me</a>
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
        <MyProjects/>
      </div>
      <div id="section4" class="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <Testimonials/>
      </div>
      <div id="section5" class="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <Contactform/>
      </div>
  </Fragment>
  );
}

export default App;
