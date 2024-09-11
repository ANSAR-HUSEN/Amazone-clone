import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img from './images/data'
import classes from './Carousel.module.css'


function CarouselEffect() {
  return (
    <>
         <Carousel
         autoPlay = {true}
         infiniteLoop={true}
         showIndicators={false}
         showThumbs = {false}
         
         
         >

          {img.map((singleImg) => {
            return <img src={singleImg} alt="banner" />
          })}
               
            </Carousel>
            <div className={classes.hero__img}></div>

    </>
  )
}

export default CarouselEffect