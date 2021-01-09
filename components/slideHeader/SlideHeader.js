import React from 'react'
import { Quote } from './Quote'
import { Slider } from './Slider'

export const SlideHeader = () => {
    return (
         
        <div className="carousel-inner">
            <Slider/>
            
            <Quote/>
        </div>

    )
}
