import React, { Component } from 'react'


export default class navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav" >
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt=""/></a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ml-auto">
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#home">Home</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#aboutme">About me</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#stack">Stack</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#mywork">My Work</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#testimonials">Testimonials</a></li>
                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Get in touch</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}