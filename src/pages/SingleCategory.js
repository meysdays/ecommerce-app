// import Slide from '../components/SimpleSlider/Slide'
import { useParams } from 'react-router-dom'
// import { useGlobalContext } from '../context'
import { useEffect } from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SingleCategory = () => {
  const { cateId } = useParams()
  const url = 'http://localhost:8080/product/'
  const [tor, setTor] = useState([])

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

  useEffect(() => {
    const getCate = async () => {
      try {
        const response = await fetch(`${url}${cateId}`)
        const data = await response.json()
        setTor(data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCate()
  }, [tor])

  return (
    <div>
      <Slider {...settings}>
        {tor.map((items) => (
          <div className="card" key={items.id}>
            <img
              src={items.imageURL}
              alt={items.name}
              style={{ width: '100%' }}
            />

            <div>
              <h1>{items.name}</h1>
              <p className="price">${items.price}</p>
              <p>{items.description}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default SingleCategory
