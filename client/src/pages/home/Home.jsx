import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import SpecialDishes from './SpecialDishes'
import Testimonial from '../../components/Testimonial'

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonial />
    </>
  )
}

export default Home
