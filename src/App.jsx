import { useCallback, useEffect, useState } from 'react'

import { Header } from './components/Header'
import { MoviesList } from './components/MoviesList'
import { MoviesContainer } from './components/styled/MoviesContainer'
import { MoviesService } from './infra/MoviesService'

import './index.css'

const App = () => {
  const [movies, setMovies] = useState([])

  const getMovies = useCallback(() => {
    MoviesService.getPopularMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(e => e)
  }, [])

  useEffect(getMovies, [getMovies])

  return (
    <>
      <Header />
      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </>
  )
}

export default App
