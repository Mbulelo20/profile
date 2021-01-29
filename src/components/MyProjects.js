import React, { Fragment } from 'react'
import {Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import {Link} from 'react-router-dom'

const MyProjects = () => {
    return (
        <Fragment >
            <div>
                <div className="container" >
                    <h1 style={{fontFamily: 'Trebuchet MS', textAlign: 'center', color:'grey', }}>My Projects</h1>
                </div>
                <Grid className='container' style={{textAlign: 'center', color: 'grey', margin:'-4em', marginTop:'1em'}}>
                    <Cell col={1}>
                    <img src='https://thumbs.dreamstime.com/b/node-js-emblem-node-js-vector-logo-backend-programming-javascript-server-development-167619269.jpg' style={{maxWidth:'50%'}}/>
                    </Cell>
                    <Cell col={1}>
                    <img src='https://logodix.com/logo/1764963.png' style={{maxWidth:'50%'}}/>
                    </Cell>
                    <Cell col={1}>
                    <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png' style={{maxWidth:'50%'}}/>
                    </Cell>
                    <Cell col={1}>
                    <img src='https://s.clipartkey.com/mpngs/s/309-3091112_clipart-of-python-and-binatang-transparent-cartoons-python.png' style={{maxWidth:'50%'}}/>
                    </Cell>
                    <Cell col={1}>
                    <img src='https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png' style={{maxWidth:'50%'}}/>
                    </Cell>
                    <Cell col={1}>
                    <img src='https://cledara-public.s3.eu-west-2.amazonaws.com/logo-mongodb.png' style={{maxWidth:'50%'}}/>
                    </Cell>
                </Grid>
                <Grid className="container" style={{marginTop: '8em'}}>
                    <Cell col={4}>
                        <div class="containerI" style={{width: "100%"}}>
                            <img src="https://i.pinimg.com/originals/31/8c/21/318c21f5dbe767634543ac1020bc1cfa.jpg" alt="Avatar" class="image"
                            />
                            
                            <div class="overlay">
                                <div class="text" style={{marginBottom:'3em'}}>
                                    <h1>Github Finder</h1>
                                    <h4>Search and find your favorite <br/> github users and repos...</h4>
                                    <Grid>
                                        <Cell>
                                        <btn >
                                            <a href="https://github.com/Mbulelo20/Github-project-finder.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">GitHub link</a>                        
                                        </btn>
                                        </Cell>
                                    </Grid>
                                </div>
                            </div>
                        </div>

                        </Cell>
                        <Cell col={4}>
                        <div class="containerI" style={{width: "100%"}}>
                            <img src="https://www.australia.com/content/australia/en/places/sydney-and-surrounds/guide-to-byron-bay/_jcr_content/imagePortrait.adapt.740.medium.jpg" alt="Avatar" class="image"
                            
                            
                            />
                            
                            <div class="overlay">
                                <div class="text" style={{marginBottom:'3em'}}>
                                    <h1>Visi-Tour</h1>
                                    <h4>Register and login and <br/> view cool pictures of your <br/>favorite places <br/> github users and repos...</h4>
                                    <Grid>
                                        <Cell>
                                        <btn >
                                            <a href="https://github.com/Mbulelo20/visitour.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">GitHub link</a>                        
                                        </btn>
                                        </Cell>
                                        <Cell style={{marginLeft: '2em'}}>
                                        <btn >
                                            <a href="https://polar-coast-73088.herokuapp.com/" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">View Demo</a>                        
                                        </btn>
                                        </Cell>
                                    </Grid>
                                </div>
                            </div>
                        </div>

                        </Cell>
                        <Cell col={4}>
                        <div class="containerI" style={{width: "100%"}}>
                            <img src="https://cdn.osxdaily.com/wp-content/uploads/2012/06/iphone-contacts.jpg" alt="Avatar" class="image"
                            style={{height:'700px'}}
                            />
                            
                            <div class="overlay">
                                <div class="text" style={{marginBottom:'3em'}}>
                                    <h1>Contact <br/>Keeper</h1>
                                    <h4>Manages a registered user's <br/>contacts with functions such as <br/>
                                    create, read, update and delete
                                    </h4>
                                    <Grid>
                                        <Cell>
                                        <btn >
                                            <a href="https://github.com/Mbulelo20/Contacts-Keeper.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">GitHub link</a>                        
                                        </btn>
                                        </Cell>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                        </Cell>
                    </Grid>
                <Grid className="container">
            
            <Cell col={4}>
            <div class="containerI" style={{width: "100%"}}>
                    <img src="https://www.australia.com/content/australia/en/places/sydney-and-surrounds/guide-to-byron-bay/_jcr_content/imagePortrait.adapt.740.medium.jpg" alt="Avatar" class="image"
                    />
                    
                    <div class="overlay">
                        <div class="text" style={{marginBottom:'3em'}}>
                            <h1>Portfolio (I)</h1>
                            <h4>My very first portfolio.
                            </h4>
                            <Grid>
                                <Cell>
                                <btn >
                                    <a href="https://mbulelo20.github.io/my-portfolio/" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">View</a>                        
                                </btn>
                                </Cell>
                            </Grid>
                        </div>
                    </div>
                </div>
                </Cell>
                <Cell col={4}>
                <div class="containerI" style={{width: "100%"}}>
                    <img src="https://www.enca.com/sites/default/files/1388612_58676202.jpg" alt="Avatar" class="image"
                    style={{height:'400px'}}
                    />
                    
                    <div class="overlay">
                        <div class="text" style={{marginBottom:'3em'}}>
                            <h1>Currency <br/> Exchange</h1>
                            <h4>Python app that fetches data <br/>
                                and does currency conversion <br/>
                                based on user input.
                            </h4>
                            <Grid>
                                <Cell>
                                    <btn>
                                        <a href="https://github.com/Mbulelo20/Currency-Exchange.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Github link</a> 
                                    </btn>
                                </Cell>
                            </Grid>
                        </div>
                    </div>
                </div>

                </Cell>
                <Cell col={4}>
                <div class="containerI" style={{width: "100%"}}>
                    <img src="https://www.controcampus.it/estrazioni-2/" alt="Avatar" class="image"
                    style={{height:'400px'}}
                    />
                    
                    <div class="overlay">
                        <div class="text" style={{marginBottom:'3em'}}>
                            <h1>PyLott</h1>
                            <h4> Python lottery game.
                            </h4>
                            <Cell>
                                    <btn>
                                        <a href="https://github.com/Mbulelo20/Currency-Exchange.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Github link</a> 
                                    </btn>
                                </Cell>
                            
                        </div>
                    </div>
                </div>

                </Cell>
            </Grid>
            </div>
        </Fragment>
    )
}

export default MyProjects;