import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

import { Loading } from '../components/Loading'
import { MoviesList } from '../components/MoviesList'
import { MoviesContainer } from '../components/styled/MoviesContainer'

import { MoviesService } from '../infra/MoviesService'

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: () => MoviesService.getPopularMovies().then(({ data }) => data),
    initialData: { results: [] },
    refetchOnWindowFocus: false,
  })

  const movies = useMemo(() => data.results, [data.results])

  return <MoviesContainer>{isLoading ? <Loading /> : <MoviesList movies={movies} />}</MoviesContainer>
}
