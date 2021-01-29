import React, {Fragment} from 'react'
import {Grid, Cell} from 'react-mdl'


const Testimonials = () => {
    return (
        <Fragment >
            <div >
                    <h1 style={{fontFamily: 'Trebuchet MS', textAlign: 'center', color:'grey'}}>Testimonials</h1>
                    <h5 style={{fontFamily: 'Trebuchet MS', textAlign: 'center', color:'grey'}}>Comments from a few of my past instructors and fellow cohorts at LC Academy</h5>
                    <center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdRZ1gCU_q-kxXoXZsQhewRIfU5lzxhvo4A&usqp=CAU" style={{width:'85px'}}/></center>
                </div>
            <div className="container" style={{marginTop:'-8em'}}>
            <Grid className="demo-grid-ruler" style={{marginTop:'12em'}}>
                <Cell col={6}>
                    <div class="flip-card" style={{margin:'2em'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'rgb(63, 76, 78)', color:'white'}}>
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
                <Cell col={6}>
                    <div class="flip-card" style={{margin:'2em'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'rgb(63, 76, 78)', color:'white'}}>
                                <h2>Siyamthanda Mgoqi,</h2>
                                <h4>fellow classmate,</h4>
                                <h5>says this...</h5>
                            </div>
                            <div class="flip-card-back" >
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
            <Grid className="demo-grid-ruler" >
                <Cell col={6}>
                    <div class="flip-card" style={{margin:'2em'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'rgb(63, 76, 78)', color:'white'}}>
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
                <Cell col={6}>
                    <div class="flip-card" style={{margin:'2em'}}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'rgb(63, 76, 78)', color:'white'}}>
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
        </Fragment>
    )
}

export default Testimonials