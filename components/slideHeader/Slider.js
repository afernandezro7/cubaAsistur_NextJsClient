import React from 'react'
import { Carousel } from 'antd';
import { data } from '../../data/carousel-data';


const contentStyle = {
    height: '500px',
    width: '100%'
};

const imgStyle = {
    height: 'auto',
    width: '100%',
    objectFit: 'cover'
}
  

    
export const Slider = () => {
    return (

        <>

            <Carousel autoplay >
                {
                    data.map( slide => (
                        <div key={slide.id} className="carousel-item active position-relative" style={contentStyle}>
                            <img
                                className="d-block"
                                src={slide.img}
                                alt={slide.alt}
                                style={contentStyle}
                            />
                            <div className="carousel-caption">
                                <h1>{ slide.title.toUpperCase() }</h1>
                                <h5>{ slide.subtitle.toUpperCase() }</h5>
                            </div>
                        </div>

                    ))
                }

                
            </Carousel>

            <style jsx>{`
                .carousel-caption {
                    font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
                    left: 50%;
                    bottom: 10%;
                    position: absolute;
                    width: 80%;
                    text-align: left;
                }
                .carousel-caption h1 {
                    color: #fff;
                    font-size: 25px;
                    font-weight: 900;
                    padding: 0px;
                    margin: 0px;
                }
                
                .carousel-caption h5 {
                    color: #fff;
                    text-shadow: 2px 2px 4px #000000;
                }
                @media (max-width: 1023px) {
                    .carousel-caption {
                        visibility: hidden;
                    }
                }
                @media (min-width: 1283px) {
                    .carousel-caption {
                        left: 11%;
                        bottom: 7%;
                        position: absolute;
                        width: 80%;
                        text-align: left;
                    }
                }
            `}</style>
        </>
        
        
    )
}









  
