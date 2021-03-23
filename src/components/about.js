import React, { Fragment } from 'react'
import {Grid, Cell, Card} from 'react-mdl';


const About = () => {
    return (
        <div id='ab' style={{marginTop:"11"}}>
             <Fragment >
            <div  style={{marginTop: '50em', width: '100%'}}>
                <Grid className="demo-grid-ruler container" style={{marginTop:'-20em'}}>
                    <Cell  col={4}>
                        <Card  style={{width: '100%', margin: 'auto'}}>
                            <img src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331_960_720.png" alt="avatar" style={{maxHeight: '450px'}}/>
                        </Card>
                    </Cell>
                    <Cell col ={8}>
                        <Card  style={{width: '100%', margin: 'auto'}}>
                        <h2 style={{fontFamily: 'Tahoma', color: '#555555', marginBottom: '0.5em'}}><center>About Me</center></h2>
                        <h5 style={{color: '#555555',margin:'2em'}}>
                            I am a recently graduated web developer based in Cape Town.<br/>
                            I graduated in 2020 at Life Choices Academy, and in 2019 I had been a volunteer  at a tech<br/> NGO for 4 months.
                            I've gained experience in working alone, but I've also gained <br/>good experience while studying and working within a team.<br/><br/>
                            My passion lies in designing the funcionality of websites, <br/> from databases and authenticating,
                            to forms and animations.
                        </h5>
                        </Card>
                    </Cell>
                </Grid>
                <Grid className="container" style={{marginTop: '5em'}}>
                    <Cell  col={6}>
                        <Card style={{zIndex:0,width:'80%',height:'500px', margin: 'auto'}}>
                            <div style={{color: 'grey', textAlign:'left', paddingBottom: '-10em'}}>
                                <h2>Education</h2>
                                <h4> Lifechoices Coding Academy</h4>
                                <div style={{fontFamily:'Tahoma'}}>
                                    Period: Feb, 2020 - Aug, 2020.<br/>
                                    Course: Fullstack Web Development<br/>
                                </div>
                                <h4>Northlink College</h4>
                                <div style={{fontFamily:'Tahoma'}}>
                                    Period: 2016 - 2018.<br/>
                                    Course: Logic Systems, Electrical Engineering<br/>
                                    Qualification: N4
                                </div>
                                <h4>Sizimisele High School</h4>
                                <div style={{fontFamily:'Tahoma'}}>
                                    Period: 2011 - 2015.<br/>
                                    Course: Electrical Engineering<br/>
                                    Certificate: Matric
                                </div>
                            </div>
                        </Card>
                    </Cell>
                    <Cell  col={6}>
                        <Card style={{zIndex:0,width:'80%',height:'500px', margin: 'auto'}}>
                        
                            <div style={{color: 'grey', textAlign:'left', paddingBottom: '-12em'}}>
                                <h2>Experience</h2>
                                
                                <div style={{fontFamily:'Tahoma'}}>
                                <h4 > LC Studio</h4>
                                    <h5>Web developer </h5><br/>
                                    Period: Dec, 2020 - .<br/>
                                    Role: fullstack development<br/>
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
            </div>
        </Fragment>
        </div>
       
    )
}

export default About;