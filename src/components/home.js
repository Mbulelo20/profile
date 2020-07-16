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
                    <div style={{width: '105%',height:'55%',marginLeft:'-1em', marginTop:'6em', backgroundColor: 'rgb(169, 173, 173)'}}>
                        <h1><center>Junior Web Developer</center></h1>
                        <hr></hr>
                        <p><center> HTML/CSS | Bootstrap | JavaScript | React | MongoDb| NodeJS</center></p>
                        <div className="demo-grid-ruler" style={{width: '182%', opacity: '1', marginLeft:'0em' }}>
                            <a href="https://www.github.com/Mbulelo20" class="hvr-icon-forward" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" hvr-icon aria-hidden="true" style={{color: 'black',fontSize: '3.5em'}}/>
                            </a>
                            <a href="https://www.linkedin.com/in/mbulelo-pani-638b4b196" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" style={{color: 'blue', fontSize: '3.5em'}}/>
                            </a>
                            <a href="https://www.freecodecamp.org/mbulelo97" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true" style={{color: 'darkgreen', fontSize: '3.5em'}}/>
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
            <Grid className="demo-grid-ruler" style={{marginTop: '0em', marginBottom:'0em', width:'100%', marginLeft:'0em', opacity:'.8'}}>
                <Cell className="contact-phone">
                    <div className="contact" style={{backgroundColor:'rgb(63, 76, 78)'}}>
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        <text style={{color:'white'}}>(+27)73 7036 422</text>
                        
                    </div>
                </Cell>
                <Cell>
                    <div className="email mr-sm-2" style={{backgroundColor:'rgb(63, 76, 78)'}}>
                        <i className="fa fa-envelope-square" aria-hidden="true" style={{marginBottom: '0em'}}/>
                        <text style={{color:'white'}}>mbulelopani09@gmail.com</text>
                    </div>
                </Cell>
                <Cell>
                    <div className="email mr-sm-2" style={{backgroundColor:'rgb(63, 76, 78)'}}>
                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                        <text style={{color:'white'}}>

                            21 167 Tambo Road, Mandela Park 7784 <br/>
                        </text>
                    </div>
                </Cell>
            </Grid>               
        </div>
    )
}

export default Home;