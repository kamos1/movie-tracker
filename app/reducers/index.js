import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { favoritesReducer } from './favoritesReducer'

const rootReducer = combineReducers({
  moviesReducer,
  userReducer,
  favoritesReducer
});

export default rootReducer;
