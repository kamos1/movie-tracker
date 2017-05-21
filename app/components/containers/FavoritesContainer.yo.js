import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// import both the container and the component we want to wrap
import FavoritesContainer from '../containers/FavoritesContainer';
import CardHolder from '../CardHolder/CardHolder.js';

const mockStore = configureMockStore()({
  favorites: { 'Star Wars': {
    movie_id: 66,
    poster_path: 'posterURL',
    overview: 'The battle between the light and the dark',
    title: 'Star Wars',
    release_date: '20151215',
    vote_average: '10',
  },
  },
});


const setup = () => {
  // Mount our container component *within* a Provider that has our new mockStore as a prop
  const Container = mount(<Provider store={mockStore}><FavoritesContainer /></Provider>);

  // Find the component we're wrapping so we can check its props later
  const Component = Container.find(CardHolder);

  return {
    Container,
    Component,
  };
};


describe('CreateUserContainer', () => {
  // Grab our container and component from the setup method we wrote
  const { Container, Component } = setup();

  // Verify that our initial state was passed down as props
  it('should pass the appropriate props from state', () => {
    console.log(Component.props());
    expect(Component.props().favorites).toEqual(
      {
        'Star Wars': {
          movie_id: 66,
          poster_path: 'posterURL',
          overview: 'The battle between the light and the dark',
          title: 'Star Wars',
          release_date: '20151215',
          vote_average: '10',
        },
      });
  });

  // Verify the container correctly bound our action creators as props
  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('createUser');
  });
});
