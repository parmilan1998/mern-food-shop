import React, { useContext, useEffect, useState } from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import Modal from './Modal'
import { AuthContext } from '../contexts/AuthProvider'
import Profile from './Profile'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  const [isSticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])
  const navItem = (
    <>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className='p-2'>
            <li>
              <a href='/menu'>All</a>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Service</summary>
          <ul className='p-2'>
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  )
  return (
    <header className='max-w-screen-2xl fixed font-poppins container mx-auto z-50 top-0 left-0 right-0 transition-all ease-in-out duration-300'>
      <div
        className={`navbar lg:px-24 ${
          isSticky
            ? ' bg-base-200 shadow-sm transition-all ease-in-out duration-300'
            : ''
        }`}
      >
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItem}
            </ul>
          </div>
          <a className='font-bold text-xl cursor-pointer' href='/'>
            <span className='text-white bg-primaryBlue px-2 py-1 rounded-lg font-inter'>
              MD
            </span>{' '}
            Kitchen
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-2 font-medium text-neutral-500'>
            {navItem}
          </ul>
        </div>
        <div className='navbar-end'>
          <button className='btn btn-ghost btn-circle mr-3 hidden lg:flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
          <Link to='/cart-page'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle mr-3 lg:flex hidden justify-center items-center'
            >
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='badge badge-sm indicator-item'>0</span>
              </div>
            </div>
          </Link>
          {user ? (
            <Profile user={user} />
          ) : (
            <div>
              <button
                onClick={() =>
                  document.getElementById('my_modal_5').showModal()
                }
                className='flex justify-center items-center gap-2 cursor-pointer px-5 py-2 bg-primaryBlue rounded-full text-white font-bold hover:bg-neutral-400 ease-in duration-300'
              >
                <FaUser />
                Login
              </button>
              <Modal />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
