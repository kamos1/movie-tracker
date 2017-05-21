import * as actions from './actions.js';

describe('Actions tests', () => {
  it('should import a bunch of movies ', () => {
    const movie = {
      'Star Wars': {
        movie_id: 66,
        poster_path: 'posterURL',
        overview: 'The battle between the light and the dark',
        title: 'Star Wars',
        release_date: '20151215',
        vote_average: '10',
      },
    };

    const expectedAction = {
      type: 'MOVIE_SUCCESS',
      movies: movie,
    };

    expect(actions.movieSuccess(movie)).toEqual(expectedAction);
  });

  it('should log a user in', () => {
    const user = {
      'chris.bandrowsky@email.com': {
        email: 'chris.bandrowsky@email.com',
        password: 'take an l',
      },
    };

    const expectedAction = {
      type: 'USER_LOGIN_SUCCESS',
      user,
    };

    expect(actions.userLogin(user)).toEqual(expectedAction);
  });

  it('should create a user', () => {
    const newUser = {
      'chris.bandrowsky@email.com': {
        name: 'Chris B',
        email: 'chris.bandrowsky@email.com',
        password: 'take an l',
      },
    };

    const expectedAction = {
      type: 'CREATE_USER',
      user: newUser,
    };
    expect(actions.createUser(newUser)).toEqual(expectedAction);
  });

  it('should logg out a user', () => {
    const user = {
      'chris.bandrowsky@email.com': {
        email: 'chris.bandrowsky@email.com',
        password: 'take an l',
      },
    };

    const expectedAction = {
      type: 'USER_LOGOUT_SUCCESS',
      user,
    };

    expect(actions.userLogout(user)).toEqual(expectedAction);
  });

  it('should add a favorite', () => {
    const movie = {
      'Star Wars': {
        movie_id: 66,
        poster_path: 'posterURL',
        overview: 'The battle between the light and the dark',
        title: 'Star Wars',
        release_date: '20151215',
        vote_average: '10',
      },
    };

    const expectedAction = {
      type: 'ADD_TO_FAVORITES',
      movie,
    };

    expect(actions.addToFavorites(movie)).toEqual(expectedAction);
  });

  it('should remove a favorite', () => {
    const movie = {
      'Star Wars': {
        movie_id: 66,
        poster_path: 'posterURL',
        overview: 'The battle between the light and the dark',
        title: 'Star Wars',
        release_date: '20151215',
        vote_average: '10',
      },
    };

    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      movie,
    };

    expect(actions.removeFavorite(movie)).toEqual(expectedAction);
  });

  it('add all favorites from the server', () => {
    const movies = { 'Star Wars': {
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

    const expectedAction = {
      type: 'ADD_ALL_FAVORITES',
      movies,
    };

    expect(actions.addAllFavorites(movies)).toEqual(expectedAction);
  });
});
