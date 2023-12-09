import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../layout/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export default router
