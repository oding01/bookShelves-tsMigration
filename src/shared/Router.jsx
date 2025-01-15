import Layout from '@/layout/layout'
import Details from '@/pages/Details'
import Help from '@/pages/Help'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import { createBrowserRouter } from 'react-router-dom'

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
        path: '/help',
        element: <Help />,
      },
      {
        path: '/details/:id',
        errorElement: <NotFound />,
        element: <Details />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
