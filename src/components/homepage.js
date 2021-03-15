import React, { Component } from 'react';


export class Homepage extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container" style={{paddingLeft: '0.75rem', paddingRight: '0.75rem', marginRight: 'auto', marginLeft: 'auto'}}>
                    <div class="masthead-subheading" style={{
                        
                    }}>
                        Hello, I'm Mbulelo Pani
                    </div>

                    <div class="masthead-heading" style={{
                        fontSize: '58px'
                    }}>
                        I'm A Junior Web Developer
                    
                    </div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#aboutme" style={{borderRadius: '0rem', backgroundColor: '#4FBFA8'}} >View some more</a>
                </div>
            </header>
        )
    }
}

export default Homepage;