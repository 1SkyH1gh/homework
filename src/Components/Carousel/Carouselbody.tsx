import * as React from 'react'
import {FunctionComponent} from "react";
import {Carousel} from "react-responsive-carousel";
import testAva from './Carousel.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './CarouselStyle.css'
export interface CarouselbodyProps {

}

export const Carouselbody:FunctionComponent<CarouselbodyProps>=()=>{
    return(
        <Carousel className="carousel-slider"
                  width={'1150'}

        >

            <div className="carouselSlide">
                <img src=''/>

            </div>

        </Carousel>
    )
}