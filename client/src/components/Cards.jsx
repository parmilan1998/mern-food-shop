/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import Receipe from '/receipe.png'
import { AuthContext } from '../contexts/AuthProvider'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const Cards = ({ item }) => {
  const { _id, name, price, recipe, image, category } = item
  const { user } = useContext(AuthContext)
  const [isHeartFill, setIsHeartFill] = useState(false)
  const handleHeartClick = () => {
    setIsHeartFill(!isHeartFill)
  }

  const navigate = useNavigate()
  const location = useLocation()

  // Add to Cart
  const handleAddToCart = () => {
    // console.log('Add button clicked', item)
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        price,
        recipe,
        category,
        email: user.email,
      }
      console.log(cartItem)

      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          toast.success('Item Add To Cart Successfully.', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        })
    } else {
      Swal.fire({
        title: 'Please Login Now?',
        text: "Without an account can't able to add the product!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SignUp Now',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signup')
        }
      })
    }
  }
  return (
    <div className='my-2'>
      <div className='flex justify-center card w-[280px] bg-base-100 shadow-xl relative m-2'>
        <div
          className={` z-10 rating gap-1 absolute right-2 top-2 p-4 heartStar bg-primaryBlue hover:bg-neutral-600 rounded-full font-semibold ${
            isHeartFill ? 'text-rose-600' : 'text-white'
          } `}
          onClick={handleHeartClick}
        >
          <FaHeart className='h-5 w-5 cursor-pointer' />
        </div>
        <Link to={`/menu/${item._id}`}>
          <figure>
            <img
              src={item.image}
              alt='Shoes'
              className='hover:scale-100 transition-all duration-200 md:h-48 py-6 px-2 rounded-full'
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
            <button
              onClick={() => handleAddToCart(item)}
              className='px-4 py-2 rounded-full bg-primaryBlue text-white hover:bg-gray-600'
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
