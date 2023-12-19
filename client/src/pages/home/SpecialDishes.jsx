import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Cards from '../../components/Cards'
import { GrFormPrevious } from 'react-icons/gr'
import { MdNavigateNext } from 'react-icons/md'

//Slick carousel previous button functionality
const previousButton = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  )
}

// Slick carousel next button functionality
const nextButton = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  )
}

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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    //Responsice
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    nextArrow: <previousButton />,
    prevArrow: <nextButton />,
  }
  return (
    <div className='container-section my-16 relative'>
      <div className='text-left'>
        <p className='sub-title'>Special Dishes</p>
        <h1 className='title py-4'>Standout Dishes</h1>
      </div>
      <div className='md:absolute right-8 top-8 mb-10 md:mr-20'>
        {/* Previous Button */}
        <button onClick={() => slider?.current?.slickPrev()}>
          <GrFormPrevious
            size={36}
            className='rounded-full mx-2 bg-neutral-400 hover:bg-neutral-500 text-white  ease-in duration-200'
          />
        </button>
        {/* Next Button */}
        <button onClick={() => slider?.current?.slickNext()}>
          <MdNavigateNext
            size={36}
            className='rounded-full bg-primaryBlue hover:bg-neutral-500 text-white ease-in duration-200'
          />
        </button>
      </div>
      <div>
        <Slider ref={slider} {...settings}>
          {recipe.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SpecialDishes
