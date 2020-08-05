import React from 'react'
import {Grid, Cell} from 'react-mdl'

const Home = () => {
    return (
        <div style={{width: '100%', margin: 'auto', marginTop: '8em'}}>
            <Grid className="demo-grid-ruler">
                <Cell col={5}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHt5-_z0yS9qw/profile-displayphoto-shrink_400_400/0?e=1599696000&v=beta&t=oiZ6Ax1993-R146eCu4P5MgN8ZlZs_aoN-eUNtXvKIY"
                    className="my-image"
                    alt="pic"
                    style={{opacity: '1', marginRight:'14%'}}/>
                </Cell>
                <Cell col={6}>
                    <div style={{width: '90%',height:'48%',marginLeft:'-1em', marginTop:'6em', backgroundColor: 'rgb(169, 173, 173)'}}>
                        <h1><center>Junior Web Developer</center></h1>
                        <hr></hr>
                        <p><center> HTML/CSS | Python | JavaScript | Bootstrap | React | MongoDb | NodeJS | ExpressJS </center></p>
                        <center>
                            <a href="https://www.github.com/Mbulelo20" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square zoom" hvr-icon aria-hidden="true" style={{color: 'black',fontSize: '3.5em', padding:'0.2em', margin:'0.2em' }}/>
                            </a>
                            <a href="https://www.linkedin.com/in/mbulelo-pani-638b4b196" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square zoom" aria-hidden="true" style={{color: 'blue', fontSize: '3.5em', padding:'0.2em', margin:'0.2em'}}/>
                            </a>
                            <a href="https://www.freecodecamp.org/mbulelo97"  rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-free-code-camp zoom" aria-hidden="true" style={{color: 'darkgreen', fontSize: '3.5em', padding:'0.2em', margin:'0.2em'}}/>
                            </a></center>
                    </div>
                </Cell>
            </Grid>
            <Grid className="demo-grid-ruler" style={{ width:'100%', margin:'auto',marginTop:'3em', opacity:'.8'}}>
                <Cell>
                    <div className="email mr-sm-2" style={{backgroundColor:'silver'}}>
                        <i className="fa fa-envelope-square" aria-hidden="true" style={{marginBottom: '0em'}}/>
                        <text style={{color:'black', fontSize:'20px', fontWeight:"bold"}}>mbulelopani09@gmail.com</text>
                    </div>
                </Cell>
                <Cell className="contact-phone">
                    <div className="contact" style={{backgroundColor:'silver'}}>
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        <text style={{color:'black', fontSize:'20px', fontWeight:"bold"}}>(+27)73 7036 422</text>
                        
                    </div>
                </Cell>
                <Cell className="contact-phone">
                    <div className="contact" style={{backgroundColor:'silver'}}>
                        <i class="fa fa-home" style={{color:'blue'}}>...</i>
                        <text style={{color:'black', fontSize:'20px', fontWeight:"bold"}}>Cape Town, Western Cape</text>
                    </div>
                </Cell>
            </Grid>               
        </div>
    )
}

export default Home;