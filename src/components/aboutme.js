import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import InfoCarousel from './carousel'
import './MbuleloPaniCV.pdf'
import Mbulelo from '../images/mbulelobg2.png'
import Mycv from './MbuleloPaniCV.pdf'

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
                    <div className="col-md-7" data-aos="fade-left">
                        <div>
                            <h2 className="section-heading text-uppercase" style={{color: '#4FBFA8', marginBottom:'2rem', textAlign: 'bottom'}}>About me</h2>
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
                            working within alone, but I also gained experience with working as a team.
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-sm-1">
                                <Button src={Mycv} style={{borderRadius: '0rem', backgroundColor: '#f5f5f5',color: '#4fbfa8', borderRadius: '50%'}}>
                                    <i class="fas fa-file" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <div className="col-sm-1">
                                <Button href="https://www.github.com/Mbulelo20" rel="noopener noreferrer" target="_blank" style={{borderRadius: '0rem', backgroundColor: '#f5f5f5',color: 'black', borderRadius: '50%'}}>
                                    <i class="fab fa-github-square" aria-hidden="true"></i>
                                </Button>
                            </div>
                            <div className="col-sm-1">
                                <Button href="https://www.linkedin.com/in/mbulelo-pani-638b4b196" rel="noopener noreferrer" target="_blank" style={{borderRadius: '0rem', backgroundColor: '#f5f5f5', color:'blue', borderRadius: '50%'}}>
                                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;
