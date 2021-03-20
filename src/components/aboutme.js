import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import InfoCarousel from './carousel'
import './MbuleloPaniCV.pdf'
export class Aboutme extends Component {
    render() {
        return (
            <div className="container">
                <br/><br/>
                <div className="row">
                <div className="col-md-5" data-aos="fade-right">
                        <center>
                            <img src="https://lh3.googleusercontent.com/oHiv3GlozvRKLa9SynzTA9_LX4a0F8V81L04C19oc8Jd7pYAKbw0HPAW9gjye4zjNFwH9RbZKfR4iR1AEnbR3nY4DcHcIdBwDQuvUBoiTZGTy5OyZtODiHq2c4ib2VrPXI7-04nnk9sY_d9Mu1QHH_YafEiIdGW7e5gFczCKbk5W39jtO-F0QYrW4Pff2I9ovBySNJIh3ekpzmSI1kEFXf8GbW07-bWCwPoSAqhqxY07vQ-6e_2Pkj1fpyKyPnXqtgBuNiRt8Y9DdJeWozle4QmAeXArdiEk1SvxsjhJNRBVLEyKvCbWM9iiel9d28xas2GUnNp5LOzbfOettXEd7wcw76SjXIOGJgqskMNuPrRIWdOAUqQkoyyJeR4ysBVf1QLHcNmXKjcuPgy-lM0NUsuHz10ENKPKAtvx1qVxtclkhyVe9I0XKSXGuVtglOuEH_dN-3i4-1utLjFbqjt6omd3Hx8PJtFKjxBYQ0Mh4jJ-r5KpkwMzawiVRhw_OjasVtgXNJddt9cw4WWwvEKvTzYmLrDiAwsWfZa0CK7ZYgseJ8V4Z9O07afPR7Z2107K2oyNdXioAjsm9bwFO5Xz6KPy-LE1ihIzkiGkJY23jq1BUw4AS8s1by34QPd7q9l0xwdcWz4v0DmBMueILn7v88XjuTBcdMvY0YOBUD3jTN3-swJkqoF7_atGOBi6i1Ba974ycSCis_Ge6hrttKEpeVXp=w433-h538-no?authuser=0" alt="img" style={{width: '100%', margin: '0.3rem'}}/>
                        </center>
                    </div><br/>
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
                            <Button href="./MbuleloPaniCV.pdf" style={{borderRadius: '0rem', backgroundColor: '#f5f5f5',color: '#4fbfa8', borderRadius: '50%'}}>
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
                            <div className="col-sm-7">
                                <InfoCarousel/>
                            </div>
                        </div>
                        

                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default Aboutme;
