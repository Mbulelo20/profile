import React from 'react'
import {Grid, Cell, Footer} from 'react-mdl'

const Home = () => {
    return (
        <div style={{width: '100', margin: 'auto'}}>
            <Grid classname="homepage">
                <Cell>
                    <img src="https://pbs.twimg.com/profile_images/1053055123193122816/IUwo6l_Q_400x400.jpg"
                    className="my-image"
                    alt="pic"
                    /></Cell>
                <Cell>
                    <div className="info">
                        <h1><center>Junior Web Deloper</center></h1>
                        <hr></hr>
                        <p><center>HTML/CSS |   Bootstrap   |   JavaScript  |   react   |   MongoDb </center></p>
                            <div className="profiles">
                                <a href="www.github.com/Mbulelo20"  rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                <a href="www.linkedin.com/in/mbulelo-pani-638b4b196" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="https://www.freecodecamp.org/mbulelo97" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                            </div>
                    </div>
                </Cell>
            </Grid>
            <Grid className="contact-info">
                <Cell className="contact-phone">
                    <div className="contact" style={{marginTop:'5em', backgroundColor:'rgb(63, 76, 78)', width:'100%'}}>
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        <text style={{color:'white'}}>(+27)73 7036 422</text>
                        
                    </div>
                </Cell>
                <Cell>
                    <div className="email" style={{marginTop:'5em',backgroundColor:'rgb(63, 76, 78)', width:'100%'}}>
                        <i className="fa fa-envelope-square" aria-hidden="true" style={{marginBottom: '0em'}}/>
                        <text style={{color:'white'}}>mbulelopani09@gmail.com</text>
                    </div>
                </Cell>
                <Cell>
                    <div className="email" style={{marginTop:'5em',backgroundColor:'rgb(63, 76, 78)', width:'100%'}}>
                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                        <text style={{color:'white'}}>
                            21 167 Tambo Road, Mandela Park 7784 <br/>
                        </text>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Home; 