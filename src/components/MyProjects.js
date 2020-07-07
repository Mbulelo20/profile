import React, { Fragment } from 'react'
import {Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';



const MyProjects = () => {
    return (
        <Fragment>
            <Grid>
                <Cell>
                    <Card shadow={5} style={{minWidth:'450', marginTop:'10em', marginLeft:'5em'}}>
                        <CardTitle style={{color: 'white', height:'350px', background :'url(https://github.githubassets.com/images/modules/explore/social.jpg)'}}>
                            <h3>GitHub Project Finder</h3>
                        </CardTitle>
                        <CardText style={{width: '100%',color: 'white',backgroundColor:'brown', opacity:'.4'}}>
                            <h5>Search each easily for Git users and repos they've shared</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'lightcyan'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/Github-project-finder.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link"> View</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell>
                    <Card shadow={5} style={{minWidth:'450', marginTop:'10em', marginLeft:'5em'}}>
                        <CardTitle style={{color: 'white', height:'350px', background:'url(https://www.mini.com.ng/assets/uploads/mini/bdGP_contact_keeper2.png.png)',backgroundColor:'brown'}}>
                            <h3>Contacts-Keeper</h3>
                        </CardTitle>
                        <CardText style={{width:'100%',color: 'white',backgroundColor:'brown', opacity:'.4'}}>
                            <h5>Easy contact manager</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'ightcyan'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/Contacts-Keeper.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link"> View</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell>
                    <Card shadow={5} style={{minWidth:'450', marginTop:'10em', marginLeft:'5em'}}>
                        <CardTitle style={{ color: 'orange', height:'350px', background:'url(https://www.loggly.com/wp-content/uploads/2018/10/Web-Application-Logging-And-Analytics-Feature.png)'}}>
                            <h3>IT-Logger</h3>
                        </CardTitle>
                        <CardText style={{width:'100%',color: 'white',backgroundColor:'brown', opacity:'.4'}}>
                            <h5>This app manages all actions made by IT's, easily maintaining communication</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'ightcyan'}}>
                        <button>
                            <a href="https://github.com/Mbulelo20/IT-Logger.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">View</a> 
                        </button>                       
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
            <div className="skills-bar">
                <h4>HTML</h4>
                <div class="container">
                    <div class="skills html">95%</div>
                </div>

                <h5>JavaScript</h5>
                <div class="container">
                    <div class="skills js">87%</div>
                </div>

                <h5>CSS</h5>
                <div class="container">
                    <div class="skills css">90%</div>
                </div>
            </div>
        </Fragment>
    )
}

export default MyProjects;