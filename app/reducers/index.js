import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { loginReducer } from './loginReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  moviesReducer,
  loginReducer,
  userReducer
})

export default rootReducer
