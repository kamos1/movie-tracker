export const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return Object.assign({}, state, {[action.user.email]: action.user})
    case 'USER_LOGIN_SUCCESS':
      return Object.assign({}, state, {[action.user.email]: action.user})
    default:
      return state
  }
}
