import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

const Profile = () => {
  const { user, logOut } = useContext(AuthContext)

  // Logout the user
  // const handleLogOut = () => {
  //   return logOut()
  //     .then(() => {
  //       alert('Logout Successfully')
  //     })
  //     .catch((error) => {
  //       // console.log(error)
  //     })
  // }
  return (
    <div>
      <div className='dropdown dropdown-end font-poppins'>
        <div
          tabIndex={0}
          role='button'
          className='btn btn-ghost btn-circle avatar'
        >
          <div className='w-12 rounded-full'>
            {user.photoURL ? (
              <img alt='Profile' src={user.photoURL} />
            ) : (
              <img
                alt='Profile'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            )}
          </div>
        </div>
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li className='py-1'>
            <a className='justify-between' href='/update-profile'>
              Profile
              {/* <span className='badge'>New</span> */}
            </a>
          </li>
          <li className='py-1'>
            <a>Orders</a>
          </li>
          <li className='py-1'>
            <a>Settings</a>
          </li>
          <li className='py-1'>
            <a>Logout</a>
            {/* onClick={handleLogOut} */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
