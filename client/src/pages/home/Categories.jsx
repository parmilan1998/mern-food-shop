import React from 'react'

const Categories = () => {
  const categoriesItems = [
    {
      id: 1,
      title: 'Break Fast',
      des: '12 break fast',
      image: '../images/home/breakfast.jpg',
    },
    {
      id: 2,
      title: 'Lunch',
      des: '45 dishes',
      image: '../images/home/lunch.jpg',
    },
    {
      id: 3,
      title: 'Dessert',
      des: '40 dessert',
      image: '../images/home/dessert.jpg',
    },
    {
      id: 4,
      title: 'All Menu',
      des: '255 items',
      image: '../images/home/allfood.jpeg',
    },
  ]
  return (
    <div className='container-section py-16'>
      {/* Title and Sub-title */}
      <div className='text-center'>
        <p className='sub-title'>Customer Favourites</p>
        <h1 className='title py-4'>Popular Categories</h1>
      </div>
      {/* Category Items */}
      <div className='flex flex-col sm:flex-row flex-wrap justify-around items-center gap-6 mt-10'>
        {categoriesItems.map((item, index) => (
          <div
            key={index}
            className='shadow-md rounded-md text-white p-5 w-72 cursor-pointer hover:-translate-y-1 transition-all duration-300'
          >
            <div className='flex justify-center items-center mx-auto'>
              <img
                src={item.image}
                alt='Categories'
                className='w-[120px] h-[120px] rounded-full p-3 bg-primaryBlue'
              />
            </div>
            <div className='mt-4 space-y-1 text-center'>
              <h2 className='text-xl font-semibold text-neutral-700 mx-auto'>
                {item.title}
              </h2>
              <p className='text-lg text-neutral-500'>({item.des})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
