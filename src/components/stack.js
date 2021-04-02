import React, { useEffect, Fragment } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import {FaJs} from 'react-icons/fa';
import {FaPython} from 'react-icons/fa'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaVuejs} from 'react-icons/fa'
import {FaDatabase} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaGit} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'



const Stack = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
        return (
            <Fragment>
            <div className="container mystack">
            <br/>
                <div className="container">
                    <h3 className="section-heading text-uppercase text-center" style={{fontSize: '55px', color: 'black'}}>Stack <i className="fas fa-tools" style={{color: '#808080'}}></i></h3>
                </div>
                <br/>
                <div className="row container" >
                    <div className="col-md-3">
                        <div className="text-center " style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Javascript</h2>
                        </div>
                        <FaJs aria-hidden="true" style={{fontSize: '115px',textAlign: 'center', color: '#4fbfa8', width: '100%',}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3 ">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Python</h2>
                        </div>
                        <FaPython aria-hidden="true" style={{fontSize: '115px', color: 'lightBlue', textAlign: 'center', width: '100%'}}/>
                        <hr style={{color: 'green'}}/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Html5</h2>
                        </div>
                        <FaHtml5 aria-hidden="true" style={{fontSize: '115px', color: 'orange', textAlign: 'center', backgroundColor: '#white', width: '100%'}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3 ">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Css3</h2>
                        </div>
                        <FaCss3 aria-hidden="true" style={{fontSize: '115px', color: '#1583c9', textAlign: 'center', width: '100%'}}/>
                        <hr/>
                    </div>
                </div>
                
                <div className="row container">
                    <div className="col-md-3 stack">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">React js</h2>
                        </div>
                        <FaReact aria-hidden="true" style={{fontSize: '115px',textAlign: 'center', color: '#1583c9',width: '100%'}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Vue js</h2>
                        </div>
                        <FaVuejs aria-hidden="true" style={{fontSize: '115px', color: '#4fbfa8', textAlign: 'center',width: '100%'}}/>
                        <hr/>
                    </div>
                    
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">MongoDb</h2>
                        </div>
                        <FaDatabase aria-hidden="true" style={{fontSize: '115px', color: '#4fbfa8', textAlign: 'center', width: '100%'}}/>
                        <hr/>

                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Node js</h2>
                        </div>
                        <FaNodeJs aria-hidden="true" style={{fontSize: '115px', color: '#1583c9', textAlign: 'center', width: '100%'}}/>
                        <hr/>
                    </div>
                </div>
                <div className="row container text-center justify-content-md-center">
                    <div className="col-md-3 stack">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Bootstrap4</h2>
                        </div>
                        <FaBootstrap aria-hidden="true" style={{fontSize: '115px',textAlign: 'center', color: 'orange',width: '100%'}}/>
                        <hr/>
                    </div>
                    <div className="col-md-3">
                        <div className="text-center" style={{color:'grey'}}>
                            <h2 className="section-heading text-uppercase">Git</h2>
                        </div>
                        <FaGit aria-hidden="true" style={{fontSize: '115px', color: '#555', textAlign: 'center',width: '100%'}}/>
                        <hr/>
                    </div>
                    
                    
                </div>
            
            </div>
            </Fragment>
        )
    }


export default Stack;