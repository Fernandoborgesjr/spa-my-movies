import { useEffect } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";

import { Home } from './views/Home'
import { About } from './views/About'
import { MovieDetail } from './views/MovieDetail'


const Redirect = ({ to }) => {
  const nav = useNavigate()
  useEffect(() => nav(to, { replace: true }))
  return null
}

export const router = createBrowserRouter([

  {
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movie/:id',
        element: <MovieDetail />
      }
    ],
  },
  {
    path:"*",
    element: <Redirect to="/" />
  }
])