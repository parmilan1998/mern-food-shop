/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import Receipe from '../../public/receipe.png'

const Cards = ({ item }) => {
  const [isHeartFill, setIsHeartFill] = useState(false)
  const handleHeartClick = () => {
    setIsHeartFill(!isHeartFill)
  }
  return (
    <div className='my-5'>
      <div className='card w-96 bg-base-100 shadow-xl relative'>
        <div
          className={` z-10 rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green-400 rounded-full font-semibold ${
            isHeartFill ? 'text-rose-600' : 'text-white'
          } `}
          onClick={handleHeartClick}
        >
          <FaHeart className='h-5 w-5 cursor-pointer' />
        </div>
        <Link to={`/menu/${item._id}`}>
          <figure>
            <img
              src={Receipe}
              alt='Shoes'
              className='hover:scale-100 transition-all duration-200 md:h-72 p-4'
            />
          </figure>
        </Link>
        <div className='card-body'>
          <Link to={`/menu/${item._id}`}>
            <h2 className='card-title'>{item.name}</h2>
          </Link>
          <p>Description of the Item</p>
          <div className='card-actions justify-between items-center mt-2'>
            <h5 className=' font-semibold'>
              <span className='text-sm text-red-500'>$</span>
              {item.price}
            </h5>
            <button className='btn bg-primaryBlue text-white'>Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
