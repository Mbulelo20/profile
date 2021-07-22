import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import Mycv from '../images/UpdatedCV-MbuleloPani.pdf'

export class Homepage extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container" style={{paddingLeft: '0.75rem', paddingRight: '0.75rem', marginRight: 'auto', marginLeft: 'auto'}}>
                    <div className="masthead-subheading" style={{
                        
                    }}>
                        Hello, I'm Mbulelo Pani
                    </div>

                    <div className="masthead-heading" style={{
                        fontSize: '58px'
                    }}>
                        I'm A Junior Web Developer
                    
                    </div>
                    <Button className="btn btn-primary" href="#aboutme" style={{borderRadius: '0rem', backgroundColor: '#4FBFA8', margin:'1em'}} >View profile</Button>
                    <Button className="btn btn-primary" href={Mycv} target='_blank 'style={{borderRadius: '0rem', backgroundColor: '#4FBFA8', margin:'1em'}} >View my CV</Button>

                </div>
            </header>
        )
    }
}

export default Homepage;