import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthProvider'
import Loader from '../components/Loader'

const Layout = () => {
  const { loading } = useContext(AuthContext)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  )
}

export default Layout

// {loading ? (
//   <Loader />
// ) : (
//   <div>
//     <Navbar />
//     <Outlet />
//     <Footer />
//   </div>
// )}
