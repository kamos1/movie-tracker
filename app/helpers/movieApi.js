import { cleaner } from '../helpers/cleaner';
import key from './key';

export default class MovieApi {
  static getMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
      .then(response => response.json())
      .then(movies => cleaner(movies))
      .catch('Error with MovieApi in helpers');
  }
}
