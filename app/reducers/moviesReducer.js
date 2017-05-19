export const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'MOVIE_SUCCESS':
      console.log(action);
      return Object.assign({}, action.movies);
    default:
      return state;
  }
};
