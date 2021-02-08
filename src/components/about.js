import React, { Fragment } from 'react'
import {Grid, Cell, Card} from 'react-mdl';


const About = () => {
    return (
        <div id='ab' style={{marginTop:"120px"}}>
             <Fragment >
            <div shadow={5}>
                <Grid className="demo-grid-ruler">
                    <Cell col={12}>
                         <h1 style={{fontFamily: 'Trebuchet MS', color: 'black'}}><center>Who Am I?</center></h1>
                    </Cell>
                </Grid>
                <Grid className="demo-grid-ruler" style={{  
                        marginTop: '3em',
                        width: '80%',
                        height:'40%',
                        color: 'black',  
                    }} >

                    <Cell col={4}>
                        <img src="https://lh3.googleusercontent.com/xlXBD2NiBAeyiMNjhNQGGF6yVXWz46fIHDnHNJfTwQoyZ6eSa5K2HtytDaXIMrSPezc6O8qxfy_eo7b8AF-v4Ko9XM1cJUJvyMiKJEqjity2itzB_r9LOb-YhCe1NX4j2alC5lj0k4Tg_IFv1S28OK0oJ2GwPYTuX9OLE0e02T07B88FuDg8ZluyRCDkFfAwGfonmQ5mTWnP425MZNx5EOegEa3wy4mfXjyM8b3lV7IoGuKPTm_UUAy4jgCXoFVeb8qK3sKrQXjk85NYjyw3pS554lpTpAgvmIflzHJVEpJLMxfOJuVotZYExUv6ym_4uYkbEqTFX6Qtl1yTwXBzrheGhyqYYIljUPMNXPf4VN4ejXzU6ExXxqB62pnAx16Csv6TSeGlhmAEBv3dVjUb5did4UTEMj8zcgd60G4PgUTTUKuF_XE6ZOMYbfLQxtNBrj3QK_0n90QVkrK09fs0y7Zv7O4lYWxt2UAKFBjmZUFDWKzApHmGV8wKBMo7VwnDLhD6SjfrFnqqC-DFwNRlOU5AMBWZpk9jVPmCxpIl3RX_N6e0_R-nKf6-cVgzeKMry5Ood3Nx9ECetpd5OTYKdjE-kiouBrNl2HWTBBiczXb08192G01GGfnpyd0kOTbYCtHlGoXVdnZJ_qjLzrzMnf_k1gAFcWMd-GjMEjcC5uKj9hvYEeWSZOYhTQ-zVw=w525-h700-no?authuser=0" 
                        alt='profile avatar'
                        style={{width:'100%', height:'75%', borderRadius:'60%'}}/>
                    </Cell>
                    <Cell col ={8} style={{align: 'middle'}}>
                        <h4 style={{color: 'black',margin:'3em', width:'100%'}}>
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