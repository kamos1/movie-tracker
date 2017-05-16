import { cleaner } from '../helpers/cleaner'
import key from './key.js'

export default class MovieApi {
  getMovies(){
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
      .then(response => response.json())
      .then((movies) => {
        return cleaner(movies)
      })
      .catch('Error with MovieApi in helpers')
  }
}
