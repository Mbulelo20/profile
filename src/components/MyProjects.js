import React, { Fragment } from 'react'
import {Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';



const MyProjects = () => {
    return (
        <Fragment>
            <Grid className="demo-grid-ruler" style={{width:'100%'}}>
                <Cell col={1} style={{width:'100%', color:'white', backgroundColor:'grey'}}>
                    <h1>
                        <center>My Projects</center>
                    </h1>
                </Cell>
            </Grid>
            <Grid className="demo-grid-ruler">
                <Cell col={3}>
                    <Card shadow={5} style={{width:'75%',height:'75%', marginTop:'3em', marginLeft:'5em'}}>
                        <CardTitle style={{color: 'white', height:'350px', background :'url(https://images.idgesg.net/images/article/2018/02/coding_programming_software_development_thinkstock_871030872-100749644-large.jpg)'}}>
                            <h3>GitHub Project Finder</h3>
                        </CardTitle>
                        <CardText style={{width: '100%',color: 'white',backgroundColor:'brown', opacity:'.4'}}>
                            <h5>Search each easily for Git users and repos they've shared</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'lightcyan'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/Github-project-finder.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github link</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={3}>
                    <Card shadow={5} style={{width:'75%',height:'75%', marginTop:'3em', marginLeft:'5em'}}>
                        <CardTitle style={{color: 'white', height:'350px', background:'url(https://cdn.osxdaily.com/wp-content/uploads/2012/06/iphone-contacts.jpg)',backgroundColor:'brown'}}>
                            <h3>Contacts-Keeper</h3>
                        </CardTitle>
                        <CardText style={{width:'100%',color: 'white',backgroundColor:'brown', opacity:'.4'}}>
                            <h5>Easy contact manager</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'ightcyan'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/Contacts-Keeper.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={3}>
                    <Card shadow={5} style={{width:'75%',height:'75%', marginTop:'3em', marginLeft:'5em'}}>
                        <CardTitle style={{ color: 'orange', height:'350px', background:'url(https://5.imimg.com/data5/OP/NN/MY-4030281/notebook-diary-500x500.jpg)'}}>
                            <h3>IT-Logger</h3>
                        </CardTitle>
                        <CardText style={{width:'100%',color: 'white',backgroundColor:'brown', opacity:'.4'}}>
                            <h5>This app manages all actions made by IT's.</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'ightcyan'}}>
                        <button>
                            <a href="https://github.com/Mbulelo20/IT-Logger.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github link</a> 
                        </button>
                        <button>
                            <a href="https://mbulelo20.github.io/IT-Logger/" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">View</a> 
                        </button>                       
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={3}>
                    <Card shadow={5} style={{width:'75%',height:'75%', marginTop:'3em', marginLeft:'5em'}}>
                        <CardTitle style={{color: 'yellow', height:'350px', background :'url(https://biz-file.com/c/2005/555786.jpg)'}}>
                            <h3 style={{fontFamily:'sans', fontWeight:'bold'}}>visitour</h3>
                        </CardTitle>
                        <CardText style={{width: '100%',color: 'white',backgroundColor:'brown', opacity:'.4'}}>
                            <h5>View some interesting places</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'lightcyan'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/visitour.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">GitHub link</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}

export default MyProjects;