export const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      // if(!state[action.user.email]) {
        state[action.user.email] = action.user
        return Object.assign({}, state)
      // } else {
        // alert('this user exists')
      // }
    default:
      return state
  }
}
