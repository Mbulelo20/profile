import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
export class InfoCarousel extends Component {
    render() {
        return (
            <div class="row container justify-content-md-center" >
                <Carousel zoom-in style={{marginLeft: '2em'}}>
                    <Carousel.Item interval={300}>
                        <div class="container text-center" data-interval="300">
                            <h5 style={{color: 'green'}}>
                                <i class="fas fa-phone"></i>
                            </h5>
                            <h5>(073) 703 6422</h5>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={300}>
                    <div class="container text-center" interval={100}>
                            <h5 style={{color: 'brown'}}>
                                <i class="fas fa-envelope"></i>
                            </h5>
                            <h5>mbulelopani09@gmail.com</h5>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={300}>
                        <div  class="container text-center" data-interval="300">
                            <h5>
                            <i class="fas fa-city" style={{color: 'blue'}}></i>
                            </h5>
                            <h5>Cape Town, Western Cape</h5>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default InfoCarousel;
