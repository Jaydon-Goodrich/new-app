import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import review1 from '../assets/review1.jpg';
import mass2 from '../assets/relax.jpg';

export const Footer = () => (
    <div style={{paddingTop: "5px",paddingBottom: "5px", backgroundColor: "#E1DEEE"}} class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={review1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={review1}
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={review1}
                    alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    </div>
)