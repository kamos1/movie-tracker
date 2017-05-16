import MovieApi from '../helpers/movieApi'

const MoviesClass = new MovieApi()

export const loadMovies = () => {
  return (dispatch) =>{
    return MoviesClass.getMovies()
      .then((movies) => dispatch(movieSuccess(movies)))
      .catch('error with getMovies at actions.js')
  }
}

export const movieSuccess = (movies) =>{
  return {
    type: 'MOVIE_SUCCESS',
    movies
  }
}
