import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards'

const Menu = () => {
  const [menu, setMenu] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [selectCategory, setSelectCategory] = useState('all') // Category Selection default = all
  const [sortOption, setSortOption] = useState('default') // sorting option = default

  // Fetch Data
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch('/menu.json') // Json data file
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
  }

  // ShowAll data
  const showAll = () => {
    setFilteredItems(menu)
    setSelectCategory('all')
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
  }

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
        <div className=''>
          <div>Filter and Sorting Section</div>
          <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
            {filteredItems.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
