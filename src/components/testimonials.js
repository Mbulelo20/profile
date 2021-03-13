import React, { Component, Fragment } from 'react'

export class Testimonials extends Component {
    render() {
        return (
            <Fragment >
            <div className="container testimonials" >
            <br/>
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Testimonials</h2>
                        <h3 className="section-subheading text-muted" style={{fontSize:'18px', marginBottom: '2rem'}}>Comments from my lecturer, and a few of my classmates</h3>

                    </div>
                    <br/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="container card border-0">
                           <br/>
                                <h5 className="testimonial-text text-center">
                                    <div className="container text-desc text-center">
                                        Mbulelo is a well-behaved student who has
                                        shown sound skills in backend and frontend development.
                                        He is someone who manages to work within given timelines.
                                    </div>
                                    
                                </h5>
                                <br/>
                            <div className="container text-desc">
                                <h3>- Godwin Dzvapatsva</h3>
                                <h6 style={{marginLeft: '20px'}}>Lecturer, LifeChoices Academy</h6>
                            </div>
                            
                            <br/>
                         </div>
                    </div>
                    <div className="col-md-6">
                    <div className="container card border-0">
                           <br/>
                           
                                <h5 className="testimonial-text text-center">
                                    <div className="container text-desc text-center">
                                        Mbulelo is a focused individual, and it's with 
                                        this how he aproaches his work. One thing I learned
                                        from him is that one has to focus on the task at hand
                                        to achieve the best results.
                                    </div>
                                </h5>
                                <br/>
                            <div className="container text-desc">
                                <h3>- Siyamthanda Mgoqi</h3>
                                <h6 style={{marginLeft: '20px'}}>Former classmate, LifeChoices Academy</h6>
                            </div>
                            
                            <br/>
                         </div>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="container card border-0">
                           <br/>
                                <h5 className="testimonial-text text-center">
                                    <div className="container text-desc text-center">
                                        Mbulelo is a really curious person  
                                        who invests a lot of his time in getting work done.
                                        I'd recommend working with him to anyone.
                                    </div>
                                    <div>
                                        -
                                    </div>
                                </h5>
                                <br/>
                            <div className="container text-desc">
                                <h3>- Asaph Franks</h3>
                                <h6 style={{marginLeft: '20px'}}>Lecturer, LifeChoices Academy</h6>
                            </div>
                            
                            <br/>
                         </div>
                    </div>
                    <div className="col-md-6">
                    <div className="container card border-0">
                           <br/>
                           
                                <h5 className="testimonial-text text-center">
                                    <div className="container text-desc text-center">
                                    Mbulelo is one of the hardest  working people I met at the Academy.
                                    Working and learning with him has been a valuable experience.
                                    </div>
                                </h5>
                                <br/>
                            <div className="container text-desc">
                                <h3>- Lukhanyo Vakele</h3>
                                <h6 style={{marginLeft: '20px'}}>Former classmate, LifeChoices Academy</h6>
                            </div>
                            
                            <br/>
                         </div>
                    </div>
                   
                </div>
                
            </div>
            </Fragment>
            
        )
    }
}

export default Testimonials
