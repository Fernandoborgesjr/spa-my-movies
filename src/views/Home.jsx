import { useCallback, useEffect, useState } from 'react'

import { MoviesList } from '../components/MoviesList'
import { MoviesContainer } from '../components/styled/MoviesContainer'
import { MoviesService } from '../infra/MoviesService'

export const Home = () => {
  const [movies, setMovies] = useState([])

  const getMovies = useCallback(() => {
    MoviesService.getPopularMovies()
      .then(({ data }) => setMovies(data.results))
      .catch(e => e)
  }, [setMovies])

  useEffect(getMovies, [getMovies])

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  )
}
