import React, { Fragment } from 'react'
import {Grid, Cell} from 'react-mdl';

const MyProjects = () => {
    return (
        <Fragment >
            <div className="projectsI">
                <div className="container" >
                    <h1 style={{fontFamily: 'Trebuchet MS', textAlign: 'center', color:'grey', }}>My Projects</h1>
                </div>
               
                <Grid className="container" style={{marginTop: '8em'}}>
                    <Cell col={4}>
                        <div class="containerI" style={{width: "90%"}}>
                            <img src="https://i.pinimg.com/originals/31/8c/21/318c21f5dbe767634543ac1020bc1cfa.jpg" alt="Avatar" class="image"
                            />
                            
                            <div class="overlay">
                                <div class="text" style={{marginBottom:'3em'}}>
                                        <h3 style={{margin:'0em'}}>Github Finder</h3>
                                        <h5 style={{margin:'1em'}}>Search and <br/>find your favorite <br/> github users and repos...</h5>
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
                        <div class="containerI" style={{width: "90%"}}>
                            <img src="https://www.australia.com/content/australia/en/places/sydney-and-surrounds/guide-to-byron-bay/_jcr_content/imagePortrait.adapt.740.medium.jpg" alt="Avatar" class="image"
                            
                            
                            />
                            
                            <div class="overlay">
                                <div class="text" style={{marginBottom:'3em'}}>
                                    <h1>Visi-Tour</h1>
                                    <h4 style={{margin:'1em'}}>Register and login and <br/> view cool pictures of your <br/>favorite places <br/> github users and repos...</h4>
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
                        <div class="containerI" style={{width: "90%"}}>
                            <img src="https://cdn.osxdaily.com/wp-content/uploads/2012/06/iphone-contacts.jpg" alt="Avatar" class="image"
                            style={{height:'700px'}}
                            />
                            
                            <div class="overlay">
                                <div class="text" style={{marginBottom:'3em'}}>
                                    <h3 style={{margin:'1em'}}>Contact <br/>Keeper</h3>
                                    <h5 style={{margin:'1em'}}>Manages a registered user's <br/>contacts with functions such as <br/>
                                        create, read, update and delete
                                    </h5>
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
            <div class="containerI" style={{width: "90%"}}>
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
                                        <a href="https://github.com/Mbulelo20/my-portfolio" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">Github link</a>                        
                                    </btn>
                                </Cell>
                                <Cell  style={{marginLeft: '2em'}}>
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
                <div class="containerI" style={{width: "90%"}}>
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
                                        <btn >
                                            <a href="https://github.com/Mbulelo20/Currency-Exchange.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">GitHub link</a>                        
                                        </btn>
                                        </Cell>
                                        <Cell style={{marginLeft: '2em'}}>
                                        <btn >
                                            <a href="https://github.com/Mbulelo20/CurrencyExchangeApp/raw/master/Currencyconverter.exe" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">View Demo</a>                        
                                        </btn>
                                        </Cell>
                                    </Grid>
                            {/* <Grid>
                                <Cell>
                                    <btn>
                                        <a href="https://github.com/Mbulelo20/Currency-Exchange.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Github link</a> 
                                    </btn>
                                </Cell>
                                <Cell style={{marginLeft: '2em'}}>
                                    <btn>
                                        <a href="https://github.com/Mbulelo20/CurrencyExchangeApp/raw/master/Currencyconverter.exe" rel="noopener noreferrer" target="_blank" class="btn btn-primary stretched-link">Download</a>
                                    </btn>
                                </Cell>
                            </Grid> */}
                        </div>
                    </div>
                </div>

                </Cell>
                <Cell col={4}>
                <div class="containerI" style={{width: "90%"}}>
                    <img src="https://www.controcampus.it/estrazioni-2/" alt="Avatar" class="image"
                    style={{height:'400px'}}
                    />
                    
                    <div class="overlay">
                        <div class="text" style={{marginBottom:'3em'}}>
                            <h1>PyLott</h1>
                            <h4> Python lottery game.
                            </h4>
                            <Grid>
                            <Cell>
                                <btn>
                                    <a href="https://github.com/Mbulelo20/PyLot.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary">Github link</a> 
                                </btn>
                                    
                            </Cell>
                            </Grid>
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