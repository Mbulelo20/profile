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
