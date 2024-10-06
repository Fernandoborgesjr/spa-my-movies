import { useMemo } from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'

import { MoviesService } from '../infra/MoviesService'

import { Loading } from '../components/Loading'

export const MovieDetail = () => {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['movies-detail', id],
    queryFn: () => MoviesService.getMovieById(id).then(({ data }) => data),
    initialData: {},
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
    initialDataUpdatedAt: Date.now() - 1000 * 60 * 10,
    enabled: !!id,
  })

  const details = useMemo(() => data, [data])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>{details.title}</h1>
          <article>{details.overview}</article>
        </div>
      )}
    </>
  )
}
