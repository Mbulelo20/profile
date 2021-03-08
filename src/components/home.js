import React, {Fragment} from 'react'
import {Grid} from 'react-mdl'

const Home = () => {
    return (
        <Fragment>
            
            <Grid className="demo-grid-ruler" style={{  
                    
                    marginTop: '14em',
                    width: '60%',
                    height:'40%',
                    color: 'grey',  
                }} >
                <div>
                    <div style={{marginBottom: '-1em', color: 'white'}}>
                        <h1 style={{fontFamily: 'Trebuchet MS', fontWeight: 'bolder', textAlign:'center'}}>Hello, I'm Mbulelo Pani</h1>
                    </div>
                    <div style={{fontFamily: 'Trebuchet MS', marginBottom: '0em', color:'white', textAlign:'center'}}>
                        <h4 style={{fontFamily: 'Trebuchet MS'}}> HTML/CSS | Python | JavaScript | Bootstrap | React | MongoDb | NodeJS | ExpressJS </h4>
                    </div>

                    <div style={{textAlign:'center'}}>
                        <h5 className='color1' style={{color:'white', lineHeight: '110%', fontFamily: 'Time New Roman'}}> 
                        I am a junior web developer living in Cape Town. I am passionate about building websites that are smart, neat
                        and interactive. Take a while and see more about what I do.
                        </h5>
                        <h5 className='color2' style={{color: 'black', lineHeight: '110%', fontFamily: 'Time New Roman'}}> 
                        I am a junior web developer living in Cape Town. I am passionate about building websites that are smart, neat
                        and interactive. Take a while and see more about what I do.
                        </h5>
                    </div>
                   
                </div>
                
            </Grid> 
           
            
    </Fragment>
    )
}

export default Home;