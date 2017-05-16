import key from './key.js'
import cleaner from './helpers/cleaner'

export const getMovies = () => {
  const nowPlaying = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
    .then(response => response.json())
    .then(movies => cleaner(movies))
    .catch('we need movies')
  )

  return {
    type: 'GET_MOVIES',
    movies: nowPlaying
  }
}
