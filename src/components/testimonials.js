import React from 'react'
import {Grid, Cell} from 'react-mdl'


const Testimonials = () => {
    return (
        <div>
            <Grid>
                
            </Grid>
            <Grid>
                <Cell>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front" style={{backgroundColor: 'purple', color:'white'}}>
                                <h2>Godwin Dzvapatsva</h2>
                                <h4>Head of Curriculum and Learnind</h4>
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
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="https://www.logolynx.com/images/logolynx/s_f4/f460eba97a71bb6d15ffaec2b34164c7.jpeg" alt="personal info" style={{width:'500px', height: '300px'}}/>
                            </div>
                            <div class="flip-card-back">
                                <h1>Mbulelo Pani</h1>
                                <h4>Cape Town</h4>
                                <p>Nationality: South Africa</p>
                                <p>Gender: Male</p>
                                <p>Date Of Birth: 1997/08/29</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
            </Grid>
            <Cell>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="https://www.logolynx.com/images/logolynx/s_f4/f460eba97a71bb6d15ffaec2b34164c7.jpeg" alt="personal info" style={{width:'500px', height: '300px'}}/>
                            </div>
                            <div class="flip-card-back">
                                <h1>Mbulelo Pani</h1>
                                <h4>Cape Town</h4>
                                <p>Nationality: South Africa</p>
                                <p>Gender: Male</p>
                                <p>Date Of Birth: 1997/08/29</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Cell>
        </div>
    )
}

export default Testimonials