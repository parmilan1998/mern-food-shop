import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Cards from '../../components/Cards'

const SpecialDishes = () => {
  const [recipe, setRecipe] = useState([])
  const slider = React.useRef(null)
  // Fetch the data from menu.json file
  useEffect(() => {
    fetch('/menu.json')
      .then((res) => res.json())
      .then((data) => {
        // Filter food by popular
        const special = data.filter((item) => item.category === 'popular')
        setRecipe(special)
      })
  }, [])
  // Slider Settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
    <div className='container-section my-16'>
      <div className='text-left'>
        <p className='sub-title'>Special Dishes</p>
        <h1 className='title py-4'>Standout Dishes</h1>
      </div>
      <div>
        <Slider {...settings}>
          {recipe.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SpecialDishes
