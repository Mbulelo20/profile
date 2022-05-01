import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {useEffect, useState} from "react"
import Navbar from './Navbar'
import Home from './Pages/Home'
import About from './Pages/About';
import MyStack from './Pages/MyStack'
import MyWork from './Pages/MyWork'
import Testimonials from './Pages/Testimonials'
import ContactPage from './Pages/ContactPage'


function App() {
  const [msg, setMsg] = useState('')
  useEffect(() => {
    setMsg('Someone viewed your site');
  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/>
        <div id="home" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Home />
        </div>
        <div id="aboutme" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <About />
        </div>
        <div id="stack" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <MyStack/>
        </div>
        <div id="mywork" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <MyWork/>
        </div>
        <div id="testimonials" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Testimonials/>
        </div>
        <div id="contact" className="body" style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <ContactPage msg={msg}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
