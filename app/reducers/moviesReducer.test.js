import { moviesReducer as reducer } from './moviesReducer'

describe('Movie reducer tests', ()=>{

  it('should return an empty object on default', () =>{
    expect(reducer(undefined, {})).toEqual({})
  })

  it('reduce a movie', () =>{
    const action = {
      type: 'MOVIE_SUCCESS',
      movies: {'Star Wars': {
          id: 66,
          poster: 'posterURL',
          synopsis: 'The battle between the light and the dark',
          title: 'Star Wars',
          }
        },
      }
    const expected = { "Star Wars": {
        "id": 66,
        "poster": "posterURL",
        "synopsis": "The battle between the light and the dark",
        "title": "Star Wars",
         }
       }

    expect(reducer(undefined, action)).toEqual(expected)
  })
})
