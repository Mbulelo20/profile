import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
export class InfoCarousel extends Component {
    render() {
        return (
            <div class="row container justify-content-md-center" >
                
                <Carousel fade style={{marginLeft: '1em'}}>
                
                    <Carousel.Item interval={3000} style={{transition: 'opacity 1s ease-in-out !important'}}>
                        <div class="container text-center" data-interval="8000">
                        <h6>
                            <i class="fas fa-phone" style={{color: 'blue'}}></i>
                            </h6>
                            <h6>073 703 6422</h6>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000} style={{transition: 'opacity 1s ease-in-out !important'}}>
                    <div class="container text-center" interval={7000}>
                    <h6>
                            <i class="fas fa-envelope" style={{color: 'blue'}}></i>
                            </h6>
                            <h6>mbulelopani09@gmail.com</h6>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000} style={{transition: 'opacity 1s ease-in-out !important'}}>
                        <div  class="container text-center" data-interval="3000">
                            <h6>
                            <i class="fas fa-city" style={{color: 'blue'}}></i>
                            </h6>
                            <h6>Cape Town, Western Cape</h6>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default InfoCarousel;
