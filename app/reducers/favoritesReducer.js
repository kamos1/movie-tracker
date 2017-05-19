export const favoritesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      console.log(action);
      return Object.assign({}, state, { [action.movie.title]: action.movie });
    case 'REMOVE_FAVORITE':
      const newState = delete state[action.movie.title];
      return Object.assign({}, state, newState);
    case 'ADD_ALL_FAVORITES':
      console.log('Add all Favorites');
      console.log(action.movies);
      return Object.assign({}, action.movies);
    default:
      return state;
  }
};
