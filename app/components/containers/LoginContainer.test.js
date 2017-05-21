import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// import both the container and the component we want to wrap
import LoginContainer from '../containers/LoginContainer';
import Login from '../Login/Login.js';

const movie = {'Star Wars': {
  movie_id: 66,
  poster_path: 'posterURL',
  overview: 'The battle between the light and the dark',
  title: 'Star Wars',
  release_date: '20151215',
  vote_average: '10',
 },
}

const user = { 'email': {
  email: 'Dave@dave.com',
  password: 'password',
  id: ','
  }
}


const mockStore = configureMockStore()({
  users: user,
  movies: movie,
});


const setup = () => {
  // Mount our container component *within* a Provider that has our new mockStore as a prop
  mockStore.getState()
  const Container = mount(<Provider store={mockStore}><LoginContainer /></Provider>);
  // Find the component we're wrapping so we can check its props later
  const Component = Container.find(Login);
  return {
    Container,
    Component,
  };
};


describe('CreateUserContainer', () => {
  // Grab our container and component from the setup method we wrote
  const { Container, Component } = setup();
  // console.log(Component);
  // Verify that our initial state was passed down as props
  it.only('should pass the appropriate props from state', () => {
    // console.log(Component.props());
    expect(Component.props().users).toEqual(undefined)
  });

  // Verify the container correctly bound our action creators as props
  it.only('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('handleSubmit');
    expect(Object.keys(Component.props())).toContain('handleFavorites');
  });
});
