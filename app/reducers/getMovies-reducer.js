export const getMovies = (state={}, action) => {
  switch(action.type) {
    case 'GET_MOVIES':
      return Object.assign({}, action.movies)
    default:
      return state;
  }
}
