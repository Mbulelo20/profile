import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
export class InfoCarousel extends Component {
    render() {
        return (
            <div class="row container">
                <Carousel  style={{}}>
                    <Carousel.Item>
                        <div class="text-center">
                            <h6>
                                <i class="fas fa-phone"></i>
                            </h6>
                            <h6>(074) 704 6422</h6>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div class="text-center">
                            <h6>
                                <i class="fas fa-envelope"></i>
                            </h6>
                            <h6>mbulelopani09@gmail.com</h6>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div  class="text-center">
                            <h6>
                                <i class="fa fa-envelope"></i>
                            </h6>
                            <h6>Cape Town</h6>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default InfoCarousel;
