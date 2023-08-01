// import React, { Component } from 'react'
import Slider from 'react-slick'
// import '../SimpleSlider/slick.css'
// import '../SimpleSlider/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Product from '../Product'
// import { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context'

// const url = 'http://localhost:8080/product/'

const Slide = () => {
  const { prod } = useGlobalContext()

  // const [prod, setProd] = useState([])

  // const getProduct = async () => {
  //   try {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setProd(data)
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   getProduct()
  // }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <Slider {...settings}>
        {prod.map((produce) => (
          <Product key={produce.id} produce={produce} />
        ))}
      </Slider>
    </div>
  )
}

export default Slide
