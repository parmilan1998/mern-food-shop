import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards'
import { FaFilter } from 'react-icons/fa'

const Menu = () => {
  const [menu, setMenu] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [selectCategory, setSelectCategory] = useState('all') // Category Selection default = all
  const [sortOption, setSortOption] = useState('default') // sorting option = default
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(8)

  // Fetch Data
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/menu') // Json data file
        const data = await response.json()
        // console.log(data)
        setMenu(data)
        setFilteredItems(data)
      } catch (error) {
        console.log('Error fetching data', error)
      }
    }
    FetchData()
  }, [])

  // Filtering data by category
  const filterItems = (category) => {
    const filtered =
      category === 'all'
        ? menu
        : menu.filter((item) => item.category === category)
    setFilteredItems(filtered)
    setSelectCategory(category)
    setCurrentPage(1)
  }

  // ShowAll data
  const showAll = () => {
    setFilteredItems(menu)
    setSelectCategory('all')
    setCurrentPage(1)
  }

  // Sorting data
  const handleSortChange = (option) => {
    setSortOption(option)
    let sortItems = [...filteredItems]
    switch (option) {
      case 'A-Z':
        sortItems.sort((a, b) => a.name.localeCompare(b.name)) //Sort by name
        break
      case 'Z-A':
        sortItems.sort((a, b) => b.name.localeCompare(a.name)) //Sort by name
        break
      case 'low-to-high':
        sortItems.sort((a, b) => a.price - b.price) // sort by price
        break
      case 'high-to-low':
        sortItems.sort((a, b) => b.price - a.price) // sort by price
        break
      default:
        break
    }
    setFilteredItems(sortItems)
    setCurrentPage(1)
  }

  // Pagination
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFirstItem = indexOfLastItem - itemPerPage // Fix the typo here
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <div className='font-poppins container-section lg:py-10 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-48 flex flex-col justify-center items-center'>
          <div className='space-y-7 px-4 text-center'>
            {/* Banner Heading */}
            <h2 className='md:text-5xl text-4xl leading-snug md:leading-snug font-poppins font-medium'>
              Gastronomic Symphony at Spice
              <span className=' text-primaryBlue px-2'>Haven</span>
            </h2>
            {/* Banner Paragraph */}
            <p className='text-xl text-secondaryColor font-poppins tracking-wide md:w-5/6 text-center mx-auto'>
              Immerse yourself in an exquisite dining experience that transcends
              the ordinary, leaving you with a symphony of taste and a journey
              through the vibrant palette of culinary artistry.
            </p>
            {/* Order Button */}
            <button className='text-white text-lg bg-primaryBlue px-5 py-2 rounded-full font-semibold hover:bg-neutral-400 ease-in duration-200'>
              Order Now
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
          {/* Category Button */}
          <div className='flex flex-row justify-start md:item-center md:gap-8 gap-8 flex-wrap text-lg font-medium my-10'>
            <button
              onClick={showAll}
              className={
                selectCategory === 'all'
                  ? 'underline underline-offset-4 text-primaryBlue'
                  : ''
              }
            >
              All
            </button>
            <button
              onClick={() => filterItems('salad')}
              className={
                selectCategory === 'salad'
                  ? 'underline underline-offset-4 text-primaryBlue'
                  : ''
              }
            >
              Salad
            </button>
            <button
              onClick={() => filterItems('soup')}
              className={
                selectCategory === 'soup'
                  ? 'underline underline-offset-4 text-primaryBlue'
                  : ''
              }
            >
              Soups
            </button>
            <button
              onClick={() => filterItems('pizza')}
              className={
                selectCategory === 'pizza'
                  ? 'underline underline-offset-4 text-primaryBlue'
                  : ''
              }
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems('dessert')}
              className={
                selectCategory === 'dessert'
                  ? 'underline underline-offset-4 text-primaryBlue'
                  : ''
              }
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems('drinks')}
              className={
                selectCategory === 'drinks'
                  ? 'underline underline-offset-4 text-primaryBlue'
                  : ''
              }
            >
              Drinks
            </button>
          </div>
          {/* Sorting Option */}
          <div>
            <div className='flex justify-end items-center gap-2 my-10'>
              <FaFilter />
              <select
                name='sort'
                id='sort'
                value={sortOption}
                onChange={(e) => handleSortChange(e.target.value)}
                className='px-2 py-1 rounded-md text-white bg-neutral-600'
              >
                <option value='default'>Default</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='low-to-high'>Low To High</option>
                <option value='high-to-low'>High To Low</option>
              </select>
            </div>
          </div>
        </div>
        {/* Pagination  */}

        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
        <div className='flex justify-center my-8'>
          {Array.from({
            length: Math.ceil(filteredItems.length / itemPerPage),
          }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-3 py-1 rounded-full ${
                currentPage === index + 1
                  ? 'text-white bg-primaryBlue'
                  : 'bg-neutral-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
