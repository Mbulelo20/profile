import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar'
import Homepage from './components/homepage'
import Aboutme from './components/aboutme'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/>
        <Route path="/" exact component={Homepage} />
        <Route path="/aboutme" component={Aboutme} />
      </div>
    </Router>
  );
}

export default App;
