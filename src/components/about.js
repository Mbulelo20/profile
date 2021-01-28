import React, { Fragment } from 'react'
import {Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import {Link} from 'react-router-dom'


const About = () => {
    return (
        <Fragment >
            <Grid className="demo-grid-3" style={{  
                    marginTop: '7em',
                    width: '80%',
                    height:'40%',
                    color: 'grey',  
                }} >
                <Cell col ={12}>
                    <h1 style={{fontFamily: 'Trebuchet MS'}}><center>Who Am I?</center></h1>
                    <h4 style={{color: 'grey'}}>
                        <center>
                        I am a junior web developer living in Cape Town. I am passionate about building websites that are smart, neat
                        and interactive.
                        
                        <p><Link to="www.mbulelopani09@gmail.com"><text style={{color:'lime'}} class='zoom'>See what others have to say about me.</text></Link> or View some more about me below...</p>
                        </center>
                    </h4>
                </Cell>
                {/* <Cell className="demo-grid-3">
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
                </Cell> */}
            </Grid>
            <Grid className="container" style={{marginTop: '5em'}}>
                <Cell  col={6}>
                    <Card shadow={5} style={{width:'80%',height:'500px', margin: 'auto'}}>
                        <div style={{backgroundColor:'white', textAlign:'center', marginTop: '2em'}}>
                            <img src="https://i.pinimg.com/originals/5b/18/08/5b18084d03c0ba117c60a98a0d0d02b5.jpg" alt="Avatar" style={{width:'15%'}}/>
                        </div>
                        <div style={{color: 'grey', textAlign:'center', paddingBottom: '-12em'}}>
                            <h2>Education</h2>
                            <h4> Lifechoices Coding Academy</h4>
                            <div style={{fontFamily:'Tahoma', fontSize: '75px'}}>
                                <p> JavaScript</p>
                                <p> Python</p>
                                <p> MySQL</p>
                                <p>ReactJS</p>
                                <p>MongoDB</p>
                                <p>NodeJS</p>
                                <p>ExpressJS</p>
                                <p> HTML & CSS</p>
                            </div>
                        </div>
                    </Card>
                </Cell>
                <Cell  col={6}>
                    <Card shadow={5} style={{width:'80%',height:'500px', margin: 'auto'}}>
                    <div style={{backgroundColor:'white', textAlign:'center', marginTop: '2em'}}>
                            <img src="https://i.pinimg.com/originals/5b/18/08/5b18084d03c0ba117c60a98a0d0d02b5.jpg" alt="Avatar" style={{width:'15%'}}/>
                        </div>
                        <div style={{color: 'grey', textAlign:'center', paddingBottom: '-12em'}}>
                            <h2>Experience</h2>
                            
                            <div style={{fontFamily:'Tahoma'}}>
                            <h4> Lifechoices Coding Academy</h4>
                                Period: Dec, 2020 - .<br/>
                                Role: Intern<br/>
                                Duties: Junior web developer<br/>
                            </div>
                            <div style={{fontFamily:'Tahoma'}}>
                            <h4>Sage Futuremakers Foundation</h4>
                                Period: Sep - Nov, 2019. Feb, 2020.<br/>
                                Role: Volunteer facilitator<br/>
                                Duties: <br/>
                                Teach basic programming skills to high school pupils, 
                                Recruite potential students around townships.
                            </div>
                        </div>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}

export default About;