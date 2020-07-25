import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './home';
import About from './about';
import MyProjects from './MyProjects';
import Testimonials from './testimonials';
import Skills from './Skills'


const Main = () => (
   
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/MyProjects" component={MyProjects} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/Skills" component={Skills} />

    </Switch>
        
)

export default Main;