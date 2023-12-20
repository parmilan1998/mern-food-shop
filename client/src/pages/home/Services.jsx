/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Catering',
      des: 'Savour perfection with our catering service, where every dish is a masterpiece, and every event is a celebration.',
      image: '/images/services/Catering Service.png',
    },
    {
      id: 2,
      title: 'Free Delivery',
      des: 'Enjoy complimentary delivery on orders exceeding Rs.5000 because great service should always come free.',
      image: '/images/services/catering.png',
    },
    {
      id: 3,
      title: 'Online Ordering',
      des: 'Seamless satisfaction, Experience the ease of online ordering for your culinary cravings.',
      image: '/images/services/Online Order.png',
    },
    {
      id: 4,
      title: 'Order Tracking',
      des: "Track your food's journey in real-time because anticipation adds to the flavour.",
      image: '/images/services/Order Tracking.png',
    },
  ]
  return (
    <div className='container-section my-20'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
        <div className='md:w-1/2 flex justify-center'>
          <div className='text-left md:w-5/6 space-y-3'>
            <p className='sub-title'>Our Services</p>
            <h1 className='title py-4'>Our Journey and Services</h1>
            <blockquote className='my-3 leading-8 text-slate-400'>
              "Savor excellence at our food haven, where every dish is a
              symphony of taste. Our restaurant serves not just meals but
              moments, crafting culinary memories that linger long after the
              last bite. Discover the art of dining, where impeccable service
              meets gastronomic delight."
            </blockquote>
            <button className='px-6 py-2 text-white bg-primaryBlue text-lg font-semibold rounded-full hover:bg-neutral-500 ease-in duration-300'>
              Explore
            </button>
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='grid md:grid-col-1 sm:grid-cols-2 grid-cols-1 gap-4 items-center'>
            {servicesList.map((service) => (
              <div
                key={service.id}
                className='bg-white shadow py-5 px-7 rounded-xl text-center cursor-pointer space-y-1 hover:bg-primaryBlue hover:text-white transition-all duration-300'
              >
                <img src={service.image} alt='Service' className='mx-auto' />
                <h4 className='py-2 font-semibold text-xl'>{service.title}</h4>
                <p className='tracking-wide leading-7'>{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
