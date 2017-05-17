import MovieApi from '../helpers/movieApi'

// const MoviesClass = new MovieApi()

export const loadMovies = () => {
  return (dispatch) =>{
    return MovieApi.getMovies()
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

export const userLogin = (email, password) => {
  return {
    type: 'USER_LOGIN_SUCCESS',
    email,
    password
  }
}
