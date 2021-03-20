import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
export class InfoCarousel extends Component {
    render() {
        return (
            <div class="row container justify-content-md-center" >
                
                <Carousel fade style={{marginLeft: '1em'}}>
                
                    <Carousel.Item interval={1300} style={{transition: 'opacity 1s ease-in-out !important'}}>
                        <div class="container text-center" data-interval="300">
                            <h6 style={{color: 'green'}}>
                                <i class="fas fa-phone"><h6>(073) 703 6422</h6></i>
                            </h6>
                            
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1300} style={{transition: 'opacity 1s ease-in-out !important'}}>
                    <div class="container text-center" interval={100}>
                            <h6 style={{color: 'brown'}}>
                                <i class="fas fa-envelope"><h6>mbulelopani09@gmail.com</h6></i>
                            </h6>
                            
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1300} style={{transition: 'opacity 1s ease-in-out !important'}}>
                        <div  class="container text-center" data-interval="300">
                            <h6>
                            <h6>Cape Town, Western Cape</h6>
                            </h6>
                            
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default InfoCarousel;
