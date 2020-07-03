import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about'
import MyProjects from './MyProjects'

const Main = () => (
    <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/MyProjects" component={MyProjects} />
    </Switch>
)

export default Main;