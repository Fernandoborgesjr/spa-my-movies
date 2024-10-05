import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Home } from './views/Home'
import { About } from './views/About'

import { Header } from './components/Header'

import './index.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
