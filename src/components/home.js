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
                    color: 'white',  
                }} >
                <Cell col ={12}>
                    <div style={{marginBottom: '-1em', color: 'white'}}>
                        <h1 style={{fontFamily: 'Trebuchet MS', fontWeight: 'bolder', textAlign:'left'}}>Mbulelo Pani</h1>
                    </div>
                    <div style={{fontFamily: 'Tahoma', marginBottom: '0em', color:'white', textAlign:'left'}}>
                        <h4> HTML/CSS | Python | JavaScript | Bootstrap | React | MongoDb | NodeJS | ExpressJS </h4>
                    </div>
                    <div style={{color: 'white', textAlign:'left'}}>
                        <h6 style={{ lineHeight: '110%'}}> 
                        I am an innovative person with good problem 
                        solving capabilities.
                        I love my programming because it is one of the few disciplines 
                        that allow for individual and teamwork creativity simultaneously.
                        </h6>
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