export const favoritesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return Object.assign({}, state, { [action.movie.title]: action.movie });
    case 'REMOVE_FAVORITE':
      const newState = delete state[action.movie.title];
      return Object.assign({}, state, newState);
    case 'ADD_ALL_FAVORITES':
      return Object.assign({}, action.movies);
    default:
      return state;
  }
};
