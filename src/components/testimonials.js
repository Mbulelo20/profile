import React, {Fragment} from 'react'
import {Grid, Cell} from 'react-mdl'


const Testimonials = () => {
    return (
        <Fragment >
            <div className="testimonials" >
                <div>
                    <h1 style={{fontFamily: 'Trebuchet MS', textAlign: 'center', color:'grey'}}>Testimonials</h1>
                    <h5 style={{fontFamily: 'Trebuchet MS', textAlign: 'center', color:'grey'}}>Comments from a few of my past instructors and fellow cohorts at LC Academy</h5>
                </div>
            <div className="container" style={{marginTop:'-8em'}}>
            <Grid className="demo-grid-ruler" style={{marginTop:'12em'}}>
                <Cell col={6}>
                    <div class="flip-card" style={{margin:'2em'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'rgb(63, 76, 78)', color:'white'}}>
                                <h2 style={{margin:'22%'}}>Godwin Dzvapatsva</h2>
                            </div>
                            <div class="flip-card-back">
                                <h6><br/>
                                <p>......................................</p>
                                    Mbulelo is a well-behaved student who has <br/> 
                                    shown sound skills in backend and frontend development.
                                    <br/>He is someone who manages to work <br/> within given timelines.
                                </h6>
                                <p>......................................</p>
                            </div>
                        </div>
                    </div>
                    
                </Cell>
                <Cell col={6}>
                    <div class="flip-card" style={{margin:'2em'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'rgb(63, 76, 78)', color:'white'}}>
                                <h2 style={{margin:'22%'}}>Siyamthanda Mgoqi</h2>
                            </div>
                            <div class="flip-card-back" >
                            <h6><br/>
                                <p>......................................</p>
                                Mbulelo is a focused individual, and it's with <br/>
                                 this how he aproaches his work. One thing I learned<br/>
                                 from him is that one has to focus on the task at hand<br/>
                                to achieve the best results.
                                </h6>
                                <p>......................................</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
            </Grid>
            <Grid className="demo-grid-ruler" >
                <Cell col={6}>
                    <div class="flip-card" style={{margin:'2em'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'rgb(63, 76, 78)', color:'white'}}>
                                <h2 style={{margin:'22%'}}>Asaph Franks</h2>
                            </div>
                            <div class="flip-card-back">
                                <h6><br/><br/>
                                    <p>......................................</p>
                                        Mbulelo is a really curious person<br/> 
                                        who invests a lot of his time in getting work done.
                                    <br/> I'd recommend working with him to anyone.
                                    </h6>
                                    <p>......................................</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
                <Cell col={6}>
                    <div class="flip-card" style={{margin:'2em'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'rgb(63, 76, 78)', color:'white'}}>
                                <h2 style={{margin:'22%'}}>Lukhanyo Vakele</h2>
                            </div>
                            <div class="flip-card-back">
                                <h6><br/><br/>
                                <p>......................................</p>
                                Mbulelo is one of the hardest  working people <br/> I met at the Academy.
                                    Working and learning with him has been a valuable experience.<br/>
                                </h6>
                                <p>......................................</p>
                                
                            </div>
                        </div>
                    </div>
                </Cell>
            </Grid>
            </div>
            </div>
        </Fragment>
    )
}

export default Testimonials