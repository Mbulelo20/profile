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

                    <div class="masthead-heading text-uppercase" style={{
                        fontSize: '62px'
                    }}>
                        It's Nice To Meet You
                    
                    </div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#section2">View some more</a>
                </div>
            </header>
        )
    }
}

export default Homepage;