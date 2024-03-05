import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import React from 'react'
const Home = React.lazy(() => import('@/views/home'))
const route: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <div>关于</div>
  },
  {
    path: '*',
    element: <div>404</div>
  }
]

export { route }
