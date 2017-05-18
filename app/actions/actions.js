import MovieApi from '../helpers/movieApi';

export const loadMovies = () => dispatch => MovieApi.getMovies()
      .then(movies => dispatch(movieSuccess(movies)))
      .catch('error with getMovies at actions.js');

export const movieSuccess = movies => ({
  type: 'MOVIE_SUCCESS',
  movies,
});

export const userLogin = user => ({
  type: 'USER_LOGIN_SUCCESS',
  user,
});

export const createUser = user => ({
  type: 'CREATE_USER',
  user,
});

export const userLogout = user => ({
  type: 'USER_LOGOUT_SUCCESS',
  user,
});

export const addToFavorites = movie => ({
  type: 'ADD_TO_FAVORITES',
  movie,
});

export const removeFavorite = movie => ({
  type: 'REMOVE_FAVORITE',
  movie,
});
