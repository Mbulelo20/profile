import React, { Fragment } from 'react'
import {Grid, Cell} from 'react-mdl'
import {Link} from 'react-router-dom'


const About = () => {
    return (
        <Fragment>
            <div className="about-me" >
                <h1><center>A little about me</center></h1>
                <h4>
                    <center>
                    I am an innovative person with a good problem 
                    solving-ability. I solve, create and design through programming.
                    I love my programming skills because they've taught me <br/> to be both independant, and be able to work  with others.
                    <br/>
                    Hopefully, in a few years time I'll have worked with brilliant fellow developers to learn from! <br/>
                    See what others have to say about me <Link to="/testimonials"><text style={{color:'lightblue'}}>here</text></Link>
                    <p>View some more about me below...</p>
                    </center>
                </h4>
            </div>
    
            <Grid style={{}}>
                <Cell>
                    <div class="flip-card"style={{marginLeft: '1em', marginTop: '5em',marginBottom:'8em', opacity:.8}} >
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
                    <div class="flip-card" style={{ marginLeft: '1em', marginTop: '5em',marginBottom:'8em', opacity:.8}}>
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
                    <div class="flip-card" style={{marginLeft: '1em', marginTop: '5em',marginBottom:'8em', opacity:.9}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="https://w0.pngwave.com/png/409/981/computer-icons-computer-program-work-experience-png-clip-art.png" alt="Work experience" style={{width:'100%', height: '300px'}}/>
                            </div>
                            <div class="flip-card-back" style={{backgroundColor:'purple'}}>
                                <h1>Experience</h1>
                                <p>Company: Sage Future Makers Foundation</p>
                                <p>Period: Sep - Nov, 2019. Feb, 2020.</p>
                                <p>Role: Volunteer facilitator Duties: (Maximum 4)</p>
                                <p>  Teach basic programming skills to high school pupils
                                         Recruit potential students around townships</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </Fragment>
    )
}

export default About;