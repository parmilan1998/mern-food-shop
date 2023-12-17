import React from 'react'

const Banner = () => {
  return (
    <div className='font-poppins container-section lg:py-10 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-6'>
        <div className='md:w-1/2'>
          <div className='flex justify-center items-center'>
            {/* Banner Image */}
            <img
              src='/images/home/banner.jpg'
              alt='banner'
              className='rounded-full w-[420px] h-[420px]'
            />
          </div>
          <div className='flex flex-col md:flex-row items-center justify-around gap-3 -mt-14'>
            {/* Banner small cards */}
            <div className='flex items-center px-3 py-2 rounded-2xl gap-3 w-64 shadow bg-white'>
              <img
                src='/images/home/fried Rice.jpg'
                alt='Fried Rice'
                className=' rounded-2xl w-[80px] h-[80px]'
              />
              <div className='space-y-1'>
                <h1>Fried Rice</h1>
                {/* Small Card Rating Section */}
                <div className='rating rating-sm'>
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    readOnly
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    checked
                    readOnly
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    readOnly
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    readOnly
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    readOnly
                  />
                </div>
                <p>Rs.999.00</p>
              </div>
            </div>
            <div className='md:flex hidden items-center px-3 py-2 rounded-2xl gap-3 w-64 shadow bg-white'>
              <img
                src='/images/home/noodles.jpg'
                alt='Fried Rice'
                className=' rounded-2xl w-[80px] h-[80px]'
              />
              <div className='space-y-1'>
                <h1>Noodels</h1>
                {/* Small Card Rating Section */}
                <div className='rating rating-sm'>
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    readOnly
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    checked
                    readOnly
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    readOnly
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    readOnly
                  />
                  <input
                    type='radio'
                    name='rating-2'
                    className='mask mask-star-2 bg-yellow-400'
                    readOnly
                  />
                </div>
                <p>Rs.799.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 space-y-7 px-4'>
          {/* Banner Heading */}
          <h2 className='md:text-5xl text-4xl leading-snug md:leading-snug font-poppins font-medium'>
            Dive into Delights of Delectable
            <span className=' text-primaryBlue px-2'>Food</span>
          </h2>
          {/* Banner Paragraph */}
          <p className='text-xl text-secondaryColor font-poppins tracking-wide'>
            Savour the moment, delight in the flavour. In our restaurant, every
            bite is a journey of culinary bliss.
          </p>
          {/* Order Button */}
          <button className='text-white text-lg bg-primaryBlue px-5 py-2 rounded-full font-semibold flex justify-center items-center hover:bg-neutral-400 ease-in duration-200'>
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
