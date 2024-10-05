import { MovieItem } from '../MovieItem'

export const MoviesList = ({ movies }) => {
  return (
    <section>
      <ul>
        {movies.map(({ id, title }) => (
          <MovieItem key={id} title={title} />
        ))}
      </ul>
    </section>
  )
}
