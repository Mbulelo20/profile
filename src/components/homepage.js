import React, { Component } from 'react';


export class Homepage extends Component {
    render() {
        return (
            <header class="masthead">
            <div class="container"   style={{margin: '0px 66px', padding: '0px 12px'}}>
                <div class="masthead-subheading" style={{
                }}>
                    Hello, I'm Mbulelo Pani
                </div>

                <div class="masthead-heading text-uppercase" style={{
                    fontSize: '62px'
                }}>
                    It's Nice To Meet You
                
                </div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
            </header>
        )
    }
}

export default Homepage;