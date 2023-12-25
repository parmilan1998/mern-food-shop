import React from 'react'

const CartPage = () => {
  return (
    <div className='container-section font-poppins'>
      {/* Cart Item Cart */}
      <div className='py-28 flex flex-col justify-center items-center'>
        <div className='space-y-7 px-4'>
          {/* Banner Heading */}
          <h2 className='text-4xl leading-snug md:leading-snug font-poppins font-medium'>
            Add Items to the
            <span className=' text-primaryBlue px-2'>Cart</span>
          </h2>
        </div>
      </div>

      {/* Cart Item Table */}
      <div>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='bg-primaryBlue text-white'>
                <th className='py-4 text-base'>No</th>
                <th className='py-4 text-base'>Food</th>
                <th className='py-4 text-base'>Item Name</th>
                <th className='py-4 text-base'>Quantity</th>
                <th className='py-4 text-base'>Price</th>
                <th className='py-4 text-base'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img
                          src='/tailwind-css-component-profile-3@56w.png'
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div className='font-bold'>Brice Swyre</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className='badge badge-ghost badge-sm'>
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <button className='btn btn-ghost btn-xs'>details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CartPage
