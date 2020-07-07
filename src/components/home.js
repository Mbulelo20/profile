import React from 'react'
import {Grid, Cell} from 'react-mdl'

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
                                <a href="www.github.com"  target="github.com">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                <a href="www.google.com" >
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="www.google.com" rel="noopener noreferrer">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                            </div>
                    </div>
                </Cell>
            </Grid>
            <Grid className="contact-info">
                <Cell className="contact-phone">
                    <div className="contact">
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        <h4>(+27)73 7036 422</h4>
                    </div>
                </Cell>
                <Cell>
                    <div className="email">
                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                        <h4>mbulelopani09@gmail.com</h4>
                    </div>
                </Cell>
                <Cell>
                    <div className="address">
                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                        <h4>(+27)73 7036 422</h4>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default Home; 