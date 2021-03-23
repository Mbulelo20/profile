<<<<<<< HEAD
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

import Navbar from './components/navbar'
import Homepage from './components/homepage'
import Aboutme from './components/aboutme'
import Stack from './components/stack'
import Mywork from './components/mywork'
import Testimonials from './components/testimonials'
import Contactme from './components/contactme'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/>
        <div id="home" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Homepage/>
        </div>
        <div id="aboutme" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Aboutme/>
        </div>
        <div id="stack" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Stack/>
        </div>
        <div id="mywork" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Mywork/>
        </div>
        <div id="testimonials" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Testimonials/>
        </div>
        <div id="contact" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Contactme/>
        </div>
      </div>
    </Router>
  );
}

export default App;
=======
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
      <nav className="navbar navbar-expand-sm  fixed-top"  style={{width: '100%',height:'60px', backgroundColor:'white'}}> 
        <a class="navbar-brand" href="#section1">
          <img src="https://lh3.googleusercontent.com/xlXBD2NiBAeyiMNjhNQGGF6yVXWz46fIHDnHNJfTwQoyZ6eSa5K2HtytDaXIMrSPezc6O8qxfy_eo7b8AF-v4Ko9XM1cJUJvyMiKJEqjity2itzB_r9LOb-YhCe1NX4j2alC5lj0k4Tg_IFv1S28OK0oJ2GwPYTuX9OLE0e02T07B88FuDg8ZluyRCDkFfAwGfonmQ5mTWnP425MZNx5EOegEa3wy4mfXjyM8b3lV7IoGuKPTm_UUAy4jgCXoFVeb8qK3sKrQXjk85NYjyw3pS554lpTpAgvmIflzHJVEpJLMxfOJuVotZYExUv6ym_4uYkbEqTFX6Qtl1yTwXBzrheGhyqYYIljUPMNXPf4VN4ejXzU6ExXxqB62pnAx16Csv6TSeGlhmAEBv3dVjUb5did4UTEMj8zcgd60G4PgUTTUKuF_XE6ZOMYbfLQxtNBrj3QK_0n90QVkrK09fs0y7Zv7O4lYWxt2UAKFBjmZUFDWKzApHmGV8wKBMo7VwnDLhD6SjfrFnqqC-DFwNRlOU5AMBWZpk9jVPmCxpIl3RX_N6e0_R-nKf6-cVgzeKMry5Ood3Nx9ECetpd5OTYKdjE-kiouBrNl2HWTBBiczXb08192G01GGfnpyd0kOTbYCtHlGoXVdnZJ_qjLzrzMnf_k1gAFcWMd-GjMEjcC5uKj9hvYEeWSZOYhTQ-zVw=w525-h700-no?authuser=0" style={{width:"50px", height:'50px', borderRadius:'50%', marginLeft:'1em'}}/>
        </a> 
        <ul className="navbar nav" >
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
>>>>>>> 01220b31a9f49dc346f02226a3be0d429eb3835d
