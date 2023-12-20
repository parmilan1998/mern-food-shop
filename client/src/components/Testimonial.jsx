/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <div className='container-section mx-4'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
        <div className='md:w-1/2 flex justify-center'>
          <img
            src='/images/home/testimonial.png'
            alt='Testimonial'
            className=' rounded-full'
          />
        </div>
        <div className='md:w-1/2'>
          <div className=' text-left md:w-5/6 space-y-3'>
            <p className='sub-title'>Testimonials</p>
            <h1 className='title py-4'>What Our Customers Say About Us</h1>
            <blockquote className='my-3 leading-8 text-slate-400'>
              "Stepping into The Soleful Delight, every bite tells a story of
              culinary craftsmanship. An enchanting fusion of flavours that
              leaves a lasting imprint on the palate."
            </blockquote>
          </div>
          <div className='flex item-center gap-4 flex-wrap my-3'>
            <div className='avatar-group -space-x-6 rtl:space-x-reverse'>
              <div className='avatar'>
                <div className='w-12'>
                  <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' />
                </div>
              </div>
              <div className='avatar'>
                <div className='w-12'>
                  <img src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg' />
                </div>
              </div>
              <div className='avatar'>
                <div className='w-12'>
                  <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                </div>
              </div>
              <div className='avatar placeholder'>
                <div className='w-12 bg-neutral text-neutral-content'>
                  <span>+99</span>
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <h4 className='font-bold'>Customer Feedback</h4>
              <div className='flex flex-row items-center space-x-1'>
                <FaStar className='text-yellow-400' />
                <span className=' font-medium'>4.9</span>
                <span className=' text-gray-400'>(20.4k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
