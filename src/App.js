import React, { Component } from 'react';
import './App.css';
import {layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import {Link} from 'react-router-dom'
import Main from './components/main'
import Home from './components/home';
function App() {
  return (
    <div className="demo-big-content">
    <layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="about">About</Link>
                <Link to="/MyProjects">My Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
            <Home />
        </Content>
    </layout>
</div>
    
  );
}

export default App;
