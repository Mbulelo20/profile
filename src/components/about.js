import React, { Fragment } from 'react'
import {Grid, Cell, Card} from 'react-mdl';


const About = () => {
    return (
        <div id='ab' style={{marginTop:"11"}}>
             <Fragment >
            <div  style={{  
                        marginTop: '10em',
                        width: '100%'
                    }}>
                <Grid className="demo-grid-ruler" style={{  
                        marginTop:'-20em'
                    }} >
                    <Cell col ={8} style={{width:'100%'}}>
                        <h2 style={{fontFamily: 'Trebuchet MS'}}><center>Who Am I?</center></h2>
                        <h4 style={{color: 'black',margin:'2em'}}>
                            <center>
                            I am an innovative person with good problem solving capabilities.  <br/>
                            I love programming because it is one of the few disciplines that allow
                            for individual and  teamwork  creativity simultaneously. <br/>
                            <br/>
                            I do full stack web delopment, but I'm mostly passionate about the functionality of things, the backend. <br/>
                            </center>
                        </h4>
                    </Cell>
                </Grid>
                <Grid className="container" style={{marginTop: '5em'}}>
                    <Cell  col={6}>
                        <Card shadow={5} style={{zIndex:0,width:'80%',height:'500px', margin: 'auto'}}>
                            
                            <div style={{color: 'grey', textAlign:'center', paddingBottom: '-10em'}}>
                                <h2>Education</h2>
                                <h4> Lifechoices Coding Academy</h4>
                                <div style={{fontFamily:'Tahoma'}}>
                                    Period: Feb, 2020 - Aug, 2020.<br/>
                                    Course: Fullstack Web Development<br/>
                                    <div style={{fontFamily:'Tahoma', backgroundColor:'green',color:'white', width: '30%', margin:'auto'}}>
                                        Completed
                                    </div>
                                </div>
                                
                                <h4>Northlink College</h4>
                                <div style={{fontFamily:'Tahoma'}}>
                                    Period: 2016 - 2018.<br/>
                                    Course: Logic Systems, Electrical Engineering<br/>
                                    Qualification: N4
                                    <div style={{fontFamily:'Tahoma', backgroundColor:'green',color:'white', width: '30%', margin:'auto'}}>
                                        Completed
                                    </div>
                                </div>
                                <h4>Sizimisele High School</h4>
                                <div style={{fontFamily:'Tahoma'}}>
                                    Period: 2011 - 2015.<br/>
                                    Course: Electrical Engineering<br/>
                                    <div style={{fontFamily:'Tahoma', backgroundColor:'green',color:'white', width: '30%', margin:'auto'}}>
                                        Completed
                                    </div>
                                </div>
                            
                            </div>
                        </Card>
                    </Cell>
                    <Cell  col={6}>
                        <Card shadow={5} style={{zIndex:0,width:'80%',height:'500px', margin: 'auto'}}>
                        
                            <div style={{color: 'grey', textAlign:'center', paddingBottom: '-12em'}}>
                                <h2>Experience</h2>
                                
                                <div style={{fontFamily:'Tahoma'}}>
                                <h4> LC Studio</h4>
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
            </div>
        </Fragment>
        </div>
       
    )
}

export default About;