import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl'
import {Link} from 'react-router-dom'
import Main from './components/main'

function App() {
  return (
  <div style={{height: '950px', position: 'relative'}}>
    <Layout className="body">
      <Header className="nav-bar" title="My Portfoliio" style={{color: 'black', background: 'lightcyan', position: 'fixed', opacity: '0.8'}}>
            <Navigation className="link-dir">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/MyProjects">My Projects</Link>
            </Navigation>
        </Header>

        <Content>
            <div className='page-content' />
            <Main />
        </Content>
      </Layout>
</div>
    
  );
}

export default App;
