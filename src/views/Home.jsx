import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

import { Loading } from '../components/Loading'
import { MoviesList } from '../components/MoviesList'
import { MoviesContainer } from '../components/styled/MoviesContainer'

import { MoviesService } from '../infra/MoviesService'

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: () => MoviesService.getPopular().then(({ data }) => data),
    initialData: { results: [] },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
    initialDataUpdatedAt: Date.now() - 1000 * 60 * 10,
  })

  const movies = useMemo(() => data.results, [data.results])

  return <MoviesContainer>{isLoading ? <Loading /> : <MoviesList movies={movies} />}</MoviesContainer>
}
