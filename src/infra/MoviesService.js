import axios from 'axios'

export class MoviesService {
  static getPopularMovies() {
    return axios.get('movie/popular', { baseURL: process.env.REACT_APP_TMDB_BASE_URL, params: {api_key: process.env.REACT_APP_TMDB_API_KEY} })
  }
}
