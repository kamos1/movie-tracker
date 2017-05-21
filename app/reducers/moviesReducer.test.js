import { moviesReducer as reducer } from './moviesReducer';

describe('Movie reducer tests', () => {
  it('should return an empty object on default', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('reduce a movie', () => {
    const action = {
      type: 'MOVIE_SUCCESS',
      movies: { 'Star Wars': {
        movie_id: 66,
        poster_path: 'posterURL',
        overview: 'The battle between the light and the dark',
        title: 'Star Wars',
        release_date: '20151215',
        vote_average: '10',
      },
      },
    };
    const expected = { 'Star Wars': {
      movie_id: 66,
      poster_path: 'posterURL',
      overview: 'The battle between the light and the dark',
      title: 'Star Wars',
      release_date: '20151215',
      vote_average: '10',
    },
    };

    expect(reducer(undefined, action)).toEqual(expected);
  });
});
