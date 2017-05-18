import * as actions from './actions.js'

describe('Actions tests', () => {
  it('should import a bunch of movies ', () =>{

  const movie = {
    'Star Wars': {
      title: 'Star Wars',
      synopsis: 'The battle between the light and the dark',
      poster: 'posterURL',
      id: 66
    }
  }

  const expectedAction ={
    type: 'MOVIE_SUCCESS',
    movies: movie
  }

  expect(actions.movieSuccess(movie)).toEqual(expectedAction)
})

  it('should log a user in', () => {
    const user = {
      'chris.bandrowsky@email.com': {
        email: 'chris.bandrowsky@email.com',
        password: 'take an l'
      }
    }

    const expectedAction ={
      type: 'USER_LOGIN_SUCCESS',
      user: user
    }

    expect(actions.userLogin(user)).toEqual(expectedAction)
  })

  it('should create a user', () =>{
    const newUser = {
      'chris.bandrowsky@email.com': {
        name: 'Chris B',
        email: 'chris.bandrowsky@email.com',
        password: 'take an l',
      }
    }

    const expectedAction ={
      type: 'CREATE_USER',
      user: newUser
    }
    expect(actions.createUser(newUser)).toEqual(expectedAction)
  })
})
