import React, { Fragment } from 'react'
import {Grid, Cell} from 'react-mdl'
import {Link} from 'react-router-dom'


const About = () => {
    return (
        <Fragment >
            <Grid className="demo-grid-3" style={{  
                    backgroundColor: 'rgb(72, 124, 122)',
                    marginTop: '3em', opacity:'.8',
                    width: '75%',
                    color: 'white',
                    borderRadius: '50px 15px'

                   
                }} >
                <Cell col ={12} >
                    <h1><center>A little about me</center></h1>
                    <h4>
                        <center>
                        I am an innovative person with good problem 
                        solving capabilities.<br/>
                        I love my programming because it is one of the few disciplines 
                        that allow <br/>for individual and teamwork creativity simultaneously.
                        
                        I hope one day to use computer systems to solve some of society's biggest problems. 
                        <p><Link to="/testimonials"><text style={{color:'lightblue'}}>See what others have to say about me.</text></Link> or View some more about me below...</p>
                        </center>
                    </h4>
                </Cell>
            </Grid>
    
            <Grid className="demo-grid-3" >
                <Cell>
                    <div class="flip-card"style={{marginLeft: '1em', marginTop: '5em',marginBottom:'8em', opacity:1}} >
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="https://www.logolynx.com/images/logolynx/s_f4/f460eba97a71bb6d15ffaec2b34164c7.jpeg" alt="personal info" style={{width:'100%', height: '300px'}}/>
                            </div>
                            <div class="flip-card-back" >
                                <h1>Mbulelo Pani</h1>
                                <h4>Cape Town</h4>
                                <p>Nationality: South Africa</p>
                                <p>Gender: Male</p>
                                <p>Date Of Birth: 1997/08/29</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
                <Cell>
                    <div class="flip-card" style={{ marginLeft: '1em', marginTop: '5em',marginBottom:'8em', opacity:1}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="https://i.pinimg.com/originals/5b/18/08/5b18084d03c0ba117c60a98a0d0d02b5.jpg" alt="Avatar" style={{width:'100%', height: '100%'}}/>
                            </div>
                            <div class="flip-card-back" style={{backgroundColor:'brown'}}>
                                <h1>Education</h1>
                                <p>Full Stack Web Development: Lifechoices Coding Academy</p>
                                <p>N4 Electrical Engineering: 2018, Northlink College</p>
                                <p>Matric: 2015, Sizimisele Technical High</p>
                            </div>
                        </div>
                    </div>
                </Cell>
                <Cell>
                    <div class="flip-card" style={{marginLeft: '1em', marginTop: '5em',marginBottom:'8em', opacity:1}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="https://w0.pngwave.com/png/409/981/computer-icons-computer-program-work-experience-png-clip-art.png" alt="Work experience" style={{width:'100%', height: '300px'}}/>
                            </div>
                            <div class="flip-card-back" style={{backgroundColor:'purple'}}>
                                <h1>Experience</h1>
                                Company: Sage Future Makers Foundation<br/>
                                Period: Sep - Nov, 2019. Feb, 2020.<br/>
                                Role: Volunteer facilitator<br/>
                                Duties: <br/>
                                 Teach basic programming skills to high school pupils, 
                                    Recruit potential students around townships
                            </div>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </Fragment>
    )
}

export default About;