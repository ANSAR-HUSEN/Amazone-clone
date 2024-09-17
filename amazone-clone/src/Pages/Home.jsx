import React from 'react'
import NavBar from '../Components/Navbar/NavBar'
import CarouselEffect from '../Components/Carousel/CarouselEffect'
import Category from '../Components/Category/Category'
import Product from '../Components/Product/Product'

function Home() {
  return (
    <>
        <NavBar/>
        <CarouselEffect/>
        <Category/>
        <Product/>
    </>
  )
}

export default Home