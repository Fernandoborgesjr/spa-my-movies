import axios from 'axios'

export class MoviesService {

  static #options = { baseURL: process.env.REACT_APP_TMDB_BASE_URL, params: {api_key: process.env.REACT_APP_TMDB_API_KEY} }

  static getPopular() {
    return axios.get('movie/popular', this.#options)
  }

  static getMovieById(id){
    return axios.get(`movie/${id}`, this.#options)
  }
}
