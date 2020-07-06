import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import MyProjects from './MyProjects';
import Testimonials from './testimonials';


const Main = () => (
    <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/MyProjects" component={MyProjects} />
        <Route exact path="/testimonials" component={Testimonials} />

    </Switch>
)

export default Main;