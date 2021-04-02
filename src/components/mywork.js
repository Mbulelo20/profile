import React, { Component, Fragment } from 'react'
import {Button} from 'react-bootstrap';

import Gitimage from '../images/git.jpg'
import Visitour from '../images/visitour.png'
import Contactkeeper from '../images/contactkeeper.jpg'
import Portfolio from '../images/portfolio.png'
import Pylot from '../images/pytonlot.jpg'

export class Mywork extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <br/>
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase" style={{color:'#555555', fontFamil: 'Roboto'}}>My Work</h2>
                    </div>
                    <br/>
                    <br/>
                    <div className="row" data-aos="zoom-out">
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white'}}>
                                <div>
                                <img src={Gitimage} alt="Avatar" className="image" />
                                </div>
                                
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                            <h3>Github Finder</h3>
                                            <h5>Search and find your favorite github users and repos...</h5>
                                            <br/>
                                            <div>
                                                <Button style={{margin: '2px'}}>
                                                    <a href="https://github.com/Mbulelo20/Github-project-finder.git" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">GitHub link</a>                        
                                                </Button>
                                                <Button  style={{margin: '2px'}} >
                                                    <a href="https://githubseeker.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">View demo</a>                        
                                                </Button>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white'}}>
                                <div>
                                    <img src={Visitour} alt="Avatar" className="image" style={{minHeight: '250px'}}/>
                                </div>
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                        <h3>Visi-Tour</h3>
                                        <h5>Register and login and <br/> view cool pictures of your <br/>favorite places </h5>
                                        <br/>
                                        <div>
                                            <Button style={{margin: '2px'}}>
                                                <a href="https://github.com/Mbulelo20/visitour.git" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">GitHub link</a>                        
                                            </Button>
                                            <Button  style={{margin: '2px'}} >
                                                <a href="https://polar-coast-73088.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">View demo</a>                        
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white'}}>
                                <div>
                                    <img src={Contactkeeper} alt="Avatar" className="image" />
                                </div>
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                        <h3>Contact Keeper</h3>
                                        <h5>Manages and records a registered user's contacts.  </h5>
                                        <br/>
                                        <div>
                                            <Button style={{margin: '2px'}}>
                                                <a href="https://github.com/Mbulelo20/Contacts-Keeper.git" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">GitHub link</a>                        
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row" data-aos="zoom-out">
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white'}}>
                                <div>
                                <img src={Portfolio} alt="Avatar" className="image"  style={{minHeight:'250px'}}/>
                                </div>
                                
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                        <h3>Portfolio</h3>
                                        <h5>My very first portfolio.</h5>
                                        <br/>
                                        <div>
                                            <Button style={{margin: '2px'}}>
                                                <a href="https://github.com/Mbulelo20/my-portfolio" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">Github link</a>                        
                                            </Button>
                                            <Button  style={{margin: '2px'}} >
                                                <a href="https://mbulelo20.github.io/my-portfolio/" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">View demo</a>                        
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white'}}>
                                <div>
                                    <img src="https://www.enca.com/sites/default/files/1388612_58676202.jpg" alt="Avatar" className="image" />
                                </div>
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                        <h3>Currency Exchange</h3>
                                        <h5>Python currency converter</h5>
                                        <h6>.exe file</h6>

                                        <br/>
                                        <div>
                                            <Button style={{margin: '2px'}}>
                                                <a href="https://github.com/Mbulelo20/Currency-Exchange.git" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">GitHub link</a>                        
                                            </Button>
                                            <Button  style={{margin: '2px'}} >
                                                <a href="https://github.com/Mbulelo20/CurrencyExchangeApp/raw/master/Currencyconverter.exe" rel="noopener noreferrer" target="_blank" className="btn btn-primary ">View demo</a>                        
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="containerI" style={{width: "85%", color: 'white'}}>
                                <div>
                                    <img src={Pylot} alt="Avatar" className="image" />
                                </div>
                                <div className="overlay">
                                    <div className="container text-center">
                                        <br/><br/>
                                        <h3>Pylot</h3>
                                        <h5> Python lottery game.</h5>
                                        <h5>.exe file</h5>
                                        <br/>
                                        <div>
                                            <Button style={{margin: '2px'}}>
                                                <a href="https://github.com/Mbulelo20/PyLot.git" rel="noopener noreferrer" target="_blank" className="Button btn-primary">Github link</a> 
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </Fragment>
            
        )
    }
}

export default Mywork
