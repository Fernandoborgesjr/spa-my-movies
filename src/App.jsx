import { useEffect } from 'react'
import { Outlet, Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Home } from './views/Home'
import { About } from './views/About'
import { MovieDetail } from './views/MovieDetail'

import { Header } from './components/Header'

import './index.css'

const queryClient = new QueryClient()

const Redirect = ({ to }) => {
  const nav = useNavigate()
  useEffect(() => nav(to, { replace: true }))
  return null
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>
          <Route path="*" element={<Redirect to="/" />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
