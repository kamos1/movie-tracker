export const favoritesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return Object.assign({}, state, { [action.movie.title]: action.movie });
    default:
      return state;
  }
};
