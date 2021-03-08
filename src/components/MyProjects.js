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
                                    <div className="container">
                                        <h3>Github Finder</h3>
                                        <h5>Search and <br/>find your favorite <br/> github users and repos...</h5>
                                    </div>
                                    <Grid>
                                        <Cell>
                                        <btn >
                                            <a href="https://github.com/Mbulelo20/Github-project-finder.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">GitHub link</a>                        
                                        </btn>
                                        </Cell>

                                        <Cell style={{marginLeft: '2em'}}>
                                        <btn >
                                            <a href="https://githubseeker.herokuapp.com/" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">View demo</a>                        
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
                                        <div className="container">
                                            <h3 >Visi-Tour</h3>
                                            <h5>Register and login and <br/> view cool pictures of your <br/>favorite places <br/> github users and repos...</h5>
                                        </div>
                                        <Grid>
                                            <Cell>
                                            <btn >
                                                <a href="https://github.com/Mbulelo20/visitour.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">GitHub link</a>                        
                                            </btn>
                                            </Cell>
                                            <Cell style={{marginLeft: '2em'}}>
                                            <btn >
                                                <a href="https://polar-coast-73088.herokuapp.com/" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">View demo</a>                        
                                            </btn>
                                            </Cell>
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4}>
                        <div class="containerI" style={{width: "90%"}}>
                            <img src="https://lh3.googleusercontent.com/QZjDASaZnw4KvJm5-U7zunLMfyw4cMeB933_TYAzc0k26Hc5DDQCsmOwMl_FXJsCxaPTLhqPJPC2SYBtjW_09EYO9A9Z5QKun87OCKbp8y7rOCyOfSHjBYaSpbtrtUgFII0scy-waLr38lPkPbybEQpmNGmaONS0q79N1nsudfqEJBWRsNjavPhA3spwRWVzvAah7mrHAzjOdhI0-4rsdd7INm4ACcjjWbNxoq5G93B3gJral8r8IahYJu7A-60nU_uGP1z5d-LuTSat-lg4w9jGJOmkDj7dc8H31EMVRZrA0wXnNQKzPI7C5UapjVOQt8o5NIQ5Oh2T8AhNNOsxW7iAY9jJLMdC4NsioK3KEERQBEu3luo1gHqM-Mm5-aFukRybUw1snMPNyaJQDkMhYp4cmA4b9254iHDDRSLXX2iwSOdwDvXxzVOJNYF2l3Q84wNeJu4t0_rMNk6qmUDTQwLCUo7lt1l8H0SYMaIzzGd-rQNNSRS0YTDOfSNUyI3AR4WwAmnQH2WtZooXN94qgBNagDvrb7FSsgKFEDDcHcI80tqm3PTMemEFsR8I1mUHUx_NNqmWv9EJfar7x5LI7PBTeeXhJFQmQfKGlpQjdPXsmaGYKtIomIQKYizMzlHp_kzLfXH4h1YNA1NVmiddk7Op-lQdtCgeIVgTu8ZBN59e6SpcxjYGzIisWf7UFg=w815-h757-no?authuser=0" alt="Avatar" class="image"
                            style={{height:'700px'}}
                            />
                            
                            <div class="overlay">
                                <div class="text" style={{marginBottom:'3em'}}>
                                    <div className="container">
                                        <h3>Contact Keeper</h3>
                                        <h5>Manages and records <br/>a registered user's contacts. 
                                        </h5>
                                        
                                    </div>
                                    
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
                    <img src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png" alt="Avatar" class="image"
                    style={{height:'700px'}}/>
                    
                    <div class="overlay">
                        <div class="text" style={{marginBottom:'3em'}}>
                            <h1>Portfolio I</h1>
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
                                        <a href="https://mbulelo20.github.io/my-portfolio/" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">View demo</a>                        
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
                            <div className="container">
                            <h3>Currency <br/> Exchange</h3>
                            <h5>Python currency converter
                            </h5>
                            <h5>.exe file</h5>
                            </div>
                            <Grid>
                                <Cell>
                                <btn >
                                    <a href="https://github.com/Mbulelo20/Currency-Exchange.git" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">GitHub link</a>                        
                                </btn>
                                </Cell>
                                <Cell style={{marginLeft: '2em'}}>
                                <btn >
                                    <a href="https://github.com/Mbulelo20/CurrencyExchangeApp/raw/master/Currencyconverter.exe" rel="noopener noreferrer" target="_blank" class="btn btn-primary ">View demo</a>                        
                                </btn>
                                </Cell>
                            </Grid>
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
                            <div className="container">
                                <h3>PyLott</h3>
                                <h5> Python lottery game.</h5>
                                <h5>.exe file</h5>
                            </div>
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