import React, { Fragment } from 'react';
import {Footer, FooterDropDownSection, FooterLinkList, FooterSection} from 'react-mdl'

import './App.css';
import {Grid, Cell, Layout, Header, Navigation, Content} from 'react-mdl'
import {Link} from 'react-router-dom'
import Main from './components/main'
function App() {
  return (
    <Fragment>
    <div className="demo-grid-ruler" style={{height: '950px', position: 'relative'}}>
      <Layout className="body " >
        <Grid className="demo-grid-ruler" style={{width:'100%'}}>
          <Cell col={12} className="title" >
            <Header className="demo-grid-ruler" title="Mbulelo Pani" style={{marginTop:'-1%',fontWeight: "bold",color: 'black', background: 'lightyellow', position: 'fixed', opacity: '0.9'}}>
              <Navigation className="link-dir " style={{width:'100%',marginLeft: '10em'}}>
                  <Link to="/home">Home</Link>
                  <Link to="/about">About me</Link>
                  <Link to="/MyProjects">My Projects</Link>
                  <Link to="/testimonials">Testimonials</Link>
                  <Link to="/Skills">Skills</Link>
              </Navigation>
            </Header>
          </Cell>  
        </Grid>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
      </Layout>
    </div>
    <Footer size="mega" style={{opacity:'0.9', height:'150px', paddingTop:'0em'}}>
    <FooterSection type="middle">
        <FooterDropDownSection title="Navigation">
            <FooterLinkList>
              <Link to="/home">Home</Link>
              <Link to="/about">About me</Link>
              <Link to="/MyProjects">My Projects</Link>
            </FooterLinkList>
        </FooterDropDownSection>
        
        <FooterDropDownSection title="">
            <FooterLinkList style={{paddingLeft:'18em'}}>
            <i className="fa fa-envelope-square" aria-hidden="true" style={{marginBottom: '0em'}}/>
              <text style={{color:'white'}}>mbulelopani09@gmail.com</text>
            <i className="fa fa-phone-square" aria-hidden="true" />
              <text style={{color:'white'}}>(+27)737036422</text>
            </FooterLinkList>
        </FooterDropDownSection>
        
    </FooterSection>
    
</Footer>
  </Fragment>

    
  );
}

export default App;
