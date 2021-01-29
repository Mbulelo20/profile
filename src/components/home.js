import React, {Fragment} from 'react'
import {Grid, Cell, Link} from 'react-mdl'

const Home = () => {
    return (
        <Fragment>
            <container>
            <Grid className="demo-grid-3" style={{  
                    
                    marginTop: '10em',
                    width: '60%',
                    height:'40%',
                    color: 'grey',  
                }} >
                <Cell col ={12}>
                    <div style={{marginBottom: '-1em', color: 'white'}}>
                        <h1 style={{fontFamily: 'Trebuchet MS', fontWeight: 'bolder', textAlign:'left'}}>Hello, I'm Mbulelo Pani</h1>
                    </div>
                    <div style={{fontFamily: 'Trebuchet MS', marginBottom: '0em', color:'white', textAlign:'left'}}>
                        <h4 style={{fontFamily: 'Trebuchet MS'}}> HTML/CSS | Python | JavaScript | Bootstrap | React | MongoDb | NodeJS | ExpressJS </h4>
                    </div>
                    <div style={{color: 'white', textAlign:'left'}}>
                        <h5 style={{ lineHeight: '110%', fontFamily: 'Time New Roman'}}> 
                            I am a junior web developer. I do full stack web delopment, but I'm mostly passionate about the functionality of things, the backend. <br/>
                            Take a while to see my work, ok.
                        </h5>
                    </div>
                </Cell>
                <a 
                    class="fa fa-arrow-circle-down w3-jumbo w3-xxxlarge" 
                    style={{width:'100%', height:'100%', color:'lightBlue', marginTop: '1em'}}
                    href="#section2"
                >
                </a>
            </Grid> 
            </container>
            
    </Fragment>
    )
}

export default Home;