import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../layout/RootLayout'
import Menu from '../pages/shop/menu'
import Signup from '../components/Signup'
import UpdateProfile from '../pages/dashboard/UpdateProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/update-profile',
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: '/signup',
    element: <Signup />,
  },
])

export default router
