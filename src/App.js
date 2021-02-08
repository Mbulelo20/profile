import React, { Fragment } from 'react';

import './App.css';
import Home from './components/home.js'
import Contactform from './components/Contactform'
import About from './components/about';
import MyProjects from './components/MyProjects';
import Testimonials from './components/testimonials';

function App() {
  return (
    <Fragment>
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark-nav fixed-top"  style={{opacity:'.7', width: '100%', marginLeft: 'auto'}}>  
        <ul className="navbar nav">
          <li className="nav-item">
            <a className="nav-link" href="#section1">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section2">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section3">My projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section4">Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section5">Contact me</a>
          </li>
        </ul>
      </nav>
      </div>
      <div id="section1" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Home/>
          
      </div>
      <div id="section2" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <About/>
      </div>
      <div id="section3" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <MyProjects/>
      </div>
      <div id="section4" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <Testimonials/>
      </div>
      <div id="section5" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
        <Contactform/>
      </div>
  </Fragment>
  );
}

export default App;