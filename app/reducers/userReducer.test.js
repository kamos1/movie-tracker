import { userReducer as reducer } from './userReducer'

describe('User reducer tests', ()=>{

  it('should return an empty boject on default', () =>{
    expect(reducer(undefined, {})).toEqual({})
  })

  it('Creates a user if successfull', () =>{
    const action = {
      type: 'CREATE_USER',
      user: {
          name: 'Chris Bandrowsky',
          email: 'email.com',
          password: 'take an l',
          }
        }

    const expected = { 'email.com': {
        'name': 'Chris Bandrowsky',
        'email': 'email.com',
        'password': 'take an l'
        }
      }

    expect(reducer(undefined, action)).toEqual(expected)
  })

  it('Logs in a user', () =>{
    const action = {
      type: 'USER_LOGIN_SUCCESS',
      user: {
          email: 'email.com',
          password: 'take an l',
          }
        }

    const expected = { 'email.com': {
        'email': 'email.com',
        'password': 'take an l'
        }
      }

    expect(reducer(undefined, action)).toEqual(expected)
  })
})
