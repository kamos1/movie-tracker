import { favoritesReducer as reducer } from './favoritesReducer';

describe('Favorite Reducer Tests', () => {
  it('should return an empty object on default', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('Add a Movie to Favorites', () => {
    const action = {
      type: 'ADD_TO_FAVORITES',
      movie: { 'Star Wars': {
        movie_id: 66,
        poster_path: 'posterURL',
        overview: 'The battle between the light and the dark',
        title: 'Star Wars',
        release_date: '20151215',
        vote_average: '10',
      },
      },
    };
    const expected = {'undefined': { 'Star Wars': {
      movie_id: 66,
      poster_path: 'posterURL',
      overview: 'The battle between the light and the dark',
      title: 'Star Wars',
      release_date: '20151215',
      vote_average: '10',
    },
    }
  }
    expect(reducer(undefined, action)).toEqual(expected)
  });

  it('Remove a Movie to Favorites', () => {
    const actionRemove = {
      type: 'REMOVE_FAVORITE',
      movie: { 'Star Wars': {
        movie_id: 66,
        poster_path: 'posterURL',
        overview: 'The battle between the light and the dark',
        title: 'Star Wars',
        release_date: '20151215',
        vote_average: '10',
      },
      },
    };

    const actionAdd = {
      type: 'ADD_TO_FAVORITES',
      movie: { 'Star Wars': {
        movie_id: 66,
        poster_path: 'posterURL',
        overview: 'The battle between the light and the dark',
        title: 'Star Wars',
        release_date: '20151215',
        vote_average: '10',
      },
      },
    };

    const expected = {'undefined': { 'Star Wars': {
      movie_id: 66,
      poster_path: 'posterURL',
      overview: 'The battle between the light and the dark',
      title: 'Star Wars',
      release_date: '20151215',
      vote_average: '10',
    },
    }
  }

    expect(reducer(undefined, actionAdd)).toEqual(expected)

    expect(reducer(undefined, actionRemove)).toEqual({});
  });

  it('Should show all favorites from the server', () => {
    const action = {
      type: 'ADD_ALL_FAVORITES',
      movies: { 'Star Wars': {
        movie_id: 66,
        poster_path: 'posterURL',
        overview: 'The battle between the light and the dark',
        title: 'Star Wars',
        release_date: '20151215',
        vote_average: '10',
      },
        'Guardians of the Galaxy, Vol2': {
          movie_id: 2,
          poster_path: 'posterURL',
          overview: 'Peter Quill plays some music on a cassette',
          title: 'Guardians of the Galaxy, Vol2',
          release_date: '20170509',
          vote_average: '11',
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
      'Guardians of the Galaxy, Vol2': {
        movie_id: 2,
        poster_path: 'posterURL',
        overview: 'Peter Quill plays some music on a cassette',
        title: 'Guardians of the Galaxy, Vol2',
        release_date: '20170509',
        vote_average: '11',
      },
    };

    expect(reducer(undefined, action)).toEqual(expected);
  });
});
