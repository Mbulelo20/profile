import React from 'react'
import {Grid, Cell} from 'react-mdl'


const Testimonials = () => {
    return (
        <div>
            <Grid className="demo-grid-ruler">
                <Cell >
                    <div class="flip-card" style={{width:"430px"}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'green', color:'white'}}>
                                <h2>Godwin Dzvapatsva</h2>
                                <h4>Head of Curriculum and Learning</h4>
                                <h5>says...</h5>
                            </div>
                            <div class="flip-card-back">
                                <h5><br/>
                                    <p>......................................</p>
                                        Mbulelo is a well-behaved student <br/> 
                                        who has shown sound skills in back end and front end development<br/>
                                    <br/>He is someone who manages to work within given timelines.
                                    </h5>
                                    <p>......................................</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
                <Cell>
                    <div class="flip-card" style={{width:"430px"}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'blue', color:'white'}}>
                                <h2>Siyamthanda Mgoqi,</h2>
                                <h4>fellow classmate,</h4>
                                <h5>says this...</h5>
                            </div>
                            <div class="flip-card-back" style={{width:"430px"}}>
                            <h5>
                                <p>......................................</p>
                                Mbulelo is a focused individual, and <br/>
                                it's with this how he aproaches his work. One thing<br/>
                                I learned from him is that one has to focus on the task at hand<br/>
                                to achieve the best results! 
                                <br/>
                                </h5>
                                <p>......................................</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
            </Grid>
            <Grid className="demo-grid-ruler">
                <Cell>
                    <div class="flip-card" style={{marginTop:'2em', width: '430px'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'brown', color:'white'}}>
                                <h2>Asaph Franks</h2>
                                <h4>Another fellow classmate</h4>
                                <h5>says...</h5>
                            </div>
                            <div class="flip-card-back">
                                <h5><br/>
                                    <p>......................................</p>
                                        Mbulelo is a really curious person<br/> 
                                        who invests a lot of his time in getting work done.<br/>
                                    <br/> I'd recommend working with him to anyone.
                                    </h5>
                                    <p>......................................</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
                <Cell>
                    <div class="flip-card" style={{marginTop:'2em', width: '430px'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'purple', color:'white'}}>
                                <h2><h5>While</h5>Lukhanyo Vakele,</h2>
                                <h5>has this to say...</h5>
                            </div>
                            <div class="flip-card-back">
                                <br/>
                                <p>......................................</p>
                                <h5>Mbulelo is one of the hardest <br/> working people I met at the Academy.</h5>
                                <h5>Working and learning with him has been a valuable experience.<br/>
                                    I do hope to he stays hungry for knowledge</h5>
                                <p>......................................</p>
                                
                            </div>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Testimonials