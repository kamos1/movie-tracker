import { combineReducers } from 'redux'
// import * from '../reducers'
import { moviesReducer } from './moviesReducer'
import { loginReducer } from './loginReducer'
const rootReducer = combineReducers({
  moviesReducer,
  loginReducer
})

export default rootReducer
