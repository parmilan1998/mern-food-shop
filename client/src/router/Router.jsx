import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../layout/RootLayout'
import Menu from '../pages/shop/menu'

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
    ],
  },
])

export default router
