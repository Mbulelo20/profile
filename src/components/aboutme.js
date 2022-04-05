import React, { Component } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaEnvelopeOpen } from 'react-icons/fa';
// import { FaFile } from 'react-icons/fa';


import Mbulelo from '../images/mbulelobg2.png'
// import Mycv from '../images/MbuleloPaniCV.pdf';
export class Aboutme extends Component {
    render() {
        return (
            <div className="container">
                <br/><br/>
                <div className="row">
                    <div className="col-md-5" data-aos="fade-right">
                        <center>
                            <img src={Mbulelo} alt="img" style={{width: '100%', margin: '0.3rem'}}/>
                        </center>
                    </div>
                    <br/>
                    <div className="col-md-7" data-aos="fade-left" style={{marginTop:'2em'}}>
                        <div>
                            <h1 className="" style={{color: '#777', marginBottom:'2rem', textAlign: 'bottom'}}>About me</h1>
                        </div>
                            My name is Mbulelo Pani. I'm a web developer from Cape Town.
                            I enjoy working on projects that challenge my critical thinking and require a little bit of imagination,
                            from authentication and databases, to forms and animations.
                        <br/>
                        <br/>
                            I was first interested in programming during college, where I was studying Logical Systems.
                            I then pursued this interest when I took a brief programming course, and during that time
                            I also volunteered at a career expo NGO where I was an assistant, introducing basic programming to high school pupils.
                        <br/>
                        <br/>
                            I started a fullstack web development course at Lifechoices, graduating the same year, 2020. I gained experience in studying and
                            working alone, but I also gained valuable experience working within a team.
                        <br/>
                        <br/>
                            I enjoy the time being in a team, sharing ideas and solutions and trouble shooting. Outside my work, my interests include robotics, physics and gaming.
                        <br/>
                        <br/>
                        <br/>
                         
                        
                        
                       
                        <div className="row" style={{color: '#555heroku o'}}>
                            <div className="col-sm-3">
                                    <p>
                                        
                                        <FaMapMarkerAlt className="icons"/>
                                        Cape Town, WC
                                    </p>
                            </div>
                            |
                            <div className="col-sm-3">
                                    <p>
                                        <FaMobileAlt className="icons"/>
                                        073 703 6422
                                    </p>
                            </div>
                            |
                            <div className="col-sm-5">
                                    <p>
                                        <FaEnvelopeOpen className="icons"/>
                                        mbulelopani09@gmail.com
                                    </p>
                            </div>
                            
                            {/* <div className="col-sm-1">
                                <Button href="https://www.freecodecamp.org/mbulelo97" style={{borderRadius: '0rem', backgroundColor: '#f5f5f5',color: 'green',width: '40px',borderRadius: '50%'}}>
                                    <i class="fab fa-free-code-camp" aria-hidden="true" style={{fontSize: '14px'}}></i>
                                </Button>
                            </div>
                            <div className="col-sm-1">
                                <Button href="https://www.linkedin.com/in/mbulelo-pani-638b4b196" rel="noopener noreferrer" target="_blank" style={{borderRadius: '0rem', backgroundColor: '#f5f5f5', color:'blue', borderRadius: '50%'}}>
                                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                                </Button>
                            </div> */}
                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;
