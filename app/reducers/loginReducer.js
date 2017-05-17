export const loginReducer = (state={}, action) => {
  switch(action.type) {
    case 'USER_LOGIN_SUCCESS':
      return Object.assign({}, action.user)
    default:
      return state;
  }
}