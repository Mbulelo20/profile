import React, { Fragment } from 'react'
import {Grid, Cell} from 'react-mdl'
import {Link} from 'react-router-dom'


const About = () => {
    return (
        <Fragment>
            <div className="about-me">
                <h1><center>A little about me</center></h1>
                <h4>
                    <center>
                    I am an innovative person with good problem 
                    solving capabilities. I love programming 
                    because it is one of the few disciplines that allow for 
                    individual and teamwork creativity at the same. 
                    I hope one day to be able to use computer systems to solve 
                    some of society’s biggest problems. <br/>
                    See what others have to say about me <Link to="/testimonials">here</Link>
                    <p>View a some more about me below</p>
                    </center>
                </h4>
            </div>
        <div>
            <Grid>
                <Cell>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="https://www.logolynx.com/images/logolynx/s_f4/f460eba97a71bb6d15ffaec2b34164c7.jpeg" alt="personal info" style={{width:'500px', height: '300px'}}/>
                            </div>
                            <div class="flip-card-back">
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
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="https://images.squarespace-cdn.com/content/v1/55d1e076e4b0be96a30dc726/1462368966061-POHA1M6HMOLR1RE0NWLT/ke17ZwdGBToddI8pDm48kDmvgM2_GYudIur22MWWiLdZw-zPPgdn4jUwVcJE1ZvWMv8jMPmozsPbkt2JQVr8L3VwxMIOEK7mu3DMnwqv-Nsp2ryTI0HqTOaaUohrI8PIAMptwCqFPAysT-w5vhITGLLtmRDEeJ_ureoOCGqPmJM/computerworld_training_icon" alt="Avatar" style={{width:'300px'}}/>
                            </div>
                            <div class="flip-card-back">
                                <h1>Education</h1>
                                <p>Full Stack Web Development: Lifechoices Coding Academy</p>
                                <p>N4 Electrical Engineering: 2018, Northlink College</p>
                                <p>Matric: 2015, Sizimisele Technical High</p>
                            </div>
                        </div>
                    </div>
                </Cell>
                <Cell>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src="https://w0.pngwave.com/png/409/981/computer-icons-computer-program-work-experience-png-clip-art.png" alt="Work experience" style={{width:'500px', height: '300px'}}/>
                            </div>
                            <div class="flip-card-back">
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
        </div>
        </Fragment>
    )
}

export default About;