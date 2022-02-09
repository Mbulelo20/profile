import React, { Component, Fragment } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
export class Testimonials extends Component {
    componentDidMount = () => {
        Aos.init({duration: 1000});
      }
    render() {
        return (
            <Fragment >
            <div className="container testimonials">
            <br/>
                    <div className="text-center">
                        <h1 className="section-heading text-uppercase" style={{color:'#555555'}}>Testimonials</h1>

                    </div>
                    <br/>
                <div className="row"  data-aos="zoom-in">
                    <div className="col-md-3">
                        <div className="container card border-0">
                           <br/>
                            <div className="container text-desc  section-heading">
                                Mbulelo is a well-behaved student who has
                                shown sound skills in backend and frontend development.
                                He is someone who manages to work within given timelines.
                            </div>
                            <br/>
                                <div className="container">
                                    <hr/>
                                </div>
                            <br/>
                            <div className="container text-desc section-heading">
                                <h4>Godwin Dzvapatsva,</h4>
                                <h6 >Lecturer, LifeChoices Academy</h6>
                            </div>
                            <br/>
                         </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container card border-0">
                            <br/>   
                            <div className="container text-desc section-heading">
                                Mbulelo is a focused individual, and it's with 
                                this how he aproaches his work. One thing I learned
                                from him is that one has to focus on the task at hand
                                to achieve the best results.
                            </div>
                            <br/>
                                <div className="container">
                                    <hr/>
                                </div>
                            <br/>
                            <div className="container text-desc section-heading">
                                <h4>Siyamthanda Mgoqi,</h4>
                                <h6>Former classmate, LifeChoices Academy</h6>
                            </div>
                            <br/>
                         </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container card border-0">
                            <br/>   
                            <div className="container text-desc section-heading">
                            Mbulelo is one of the best and hardest working people I met at the Academy.
                            Working and learning with him has been a valuable experience. I hope to work with him.
                            </div>
                            <br/>
                                <div className="container">
                                    <hr/>
                                </div>
                            <br/>
                            <div className="container text-desc section-heading">
                                <h4>Lukhanyo <br/>Vakele,</h4>
                                <h6>Former classmate, LifeChoices Academy</h6>
                            </div>
                            <br/>
                         </div>
                    </div>
                    <div className="col-md-3">
                        <div className="container card border-0">
                           <br/>
                            <div className="container  text-desc section-heading">
                                Mbulelo is a really curious person  
                                who invests a lot of his time and energy in getting all of his tasks done.
                                I'd recommend working with him to anyone.
                            </div>
                            <br/>
                                <div className="container">
                                    <hr/>
                                </div>
                            <br/>
                            <div className="container text-desc section-heading">
                                <h4>Asaph <br/>Franks,</h4>
                                <h6>Former classmate, LifeChoices Academy</h6><br/>
                            </div>
                         </div>
                    </div>
                    
                    </div>
                
            </div>
            </Fragment>
            
        )
    }
}

export default Testimonials
