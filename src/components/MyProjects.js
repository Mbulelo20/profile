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
                    <Card shadow={5} style={{width:'75%',height:'75%', marginTop:'3em', marginLeft:'2em'}}>
                        <CardTitle style={{color: 'white', height:'350px', background :'url(https://images.idgesg.net/images/article/2018/02/coding_programming_software_development_thinkstock_871030872-100749644-large.jpg)'}}>
                        </CardTitle>
                        <CardText style={{width: '100%',color: 'white',backgroundColor:'grey'}}>
                        <h3 style={{marginTop:"0em", fontFamily:'fantasy'}}><center>Git Finder</center></h3>
                            <h5 style={{marginBottom:"2em"}}>Search each easily for Git users and repos they've shared</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'silver'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/Github-project-finder.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github link</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={3}>
                    <Card shadow={5} style={{width:'75%',height:'75%', marginTop:'3em', marginLeft:'2em'}}>
                        <CardTitle style={{color: 'white', height:'350px', background:'url(https://cdn.osxdaily.com/wp-content/uploads/2012/06/iphone-contacts.jpg)',backgroundColor:'brown'}}>
                        </CardTitle>
                        <CardText style={{width:'100%',color: 'white',backgroundColor:'gray'}}>
                            <h3 style={{marginTop:"0em", fontFamily:'fantasy'}}><center>Contact Keeper</center></h3>
                            <h5 style={{marginBottom:"2em"}}>Manages a registered user's contacts, and perfomes feautures add, delete and update.</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'silver'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/Contacts-Keeper.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={3}>
                    <Card shadow={5} style={{width:'75%',height:'75%', marginTop:'3em', marginLeft:'2em'}}>
                        <CardTitle style={{ color: 'orange', height:'350px', background:'url(https://5.imimg.com/data5/OP/NN/MY-4030281/notebook-diary-500x500.jpg)'}}>
                        </CardTitle>
                        <CardText style={{width: '100%',color: 'white',backgroundColor:'gray', marginTop:"0em"}}>
                            <h3 style={{marginTop:"0em", fontFamily:'fantasy'}}><center>IT Logger</center></h3>
                            <h5 style={{marginBottom:"2em"}}>Technicians' log app. Keeps records of changes made by technicians</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'silver'}}>
                        <button>
                            <a href="https://github.com/Mbulelo20/IT-Logger.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Github link</a> 
                        </button>
                        <button style={{marginLeft:"6.5em"}}>
                            <a href="https://mbulelo20.github.io/IT-Logger/" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">View</a> 
                        </button>                       
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={3}>
                    <Card shadow={5} style={{width:'75%',height:'75%',marginTop:'3em', marginLeft:'3em'}}>
                        <CardTitle style={{color: 'yellow', height:'350px', background :'url(https://cdn.24.co.za/files/Cms/General/d/6043/bd1b36d3e59b4a02a8391508ba5193a1.jpg)'}}>
                        </CardTitle>
                        <CardText style={{width: '100%',color: 'white',backgroundColor:'gray', marginTop:"0em"}}>
                            <h3 style={{marginTop:"0em", fontFamily:'fantasy'}}><center>Visitour</center></h3>
                            <h5 style={{marginBottom:"2em"}}>Register and login, and view pictures of cool locations. Tour app, uses MongoDB.</h5>
                        </CardText>
                        <CardActions style={{backgroundColor:'silver'}}>
                            <button>
                                <a href="https://github.com/Mbulelo20/visitour.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">GitHub link</a>                        
                            </button>
                            <button style={{marginLeft:"6.5em"}}>
                                <a href="https://polar-coast-73088.herokuapp.com/" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">View</a>                        
                            </button>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
        </Fragment>
    )
}

export default MyProjects;