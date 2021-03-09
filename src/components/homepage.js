import React, { Component } from 'react';


export class Homepage extends Component {
    render() {
        return (
            <header class="masthead">
            <div class="container">
                <div class="masthead-subheading" style={{
                    fontFamily: "Droid Serif",
                    fontSize: '36px',
                    fontStyle: 'italic'
                }}>
                    Hello, I'm Mbulelo Pani
                </div>

                <div class="masthead-heading text-uppercase" style={{
                    fontFamily: "Montserrat",
                    fontSize: '55px',
                }}>It's Nice To Meet You</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
            </header>
        )
    }
}

export default Homepage;