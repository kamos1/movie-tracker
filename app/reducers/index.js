import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  moviesReducer,
  userReducer,
});

export default rootReducer;
