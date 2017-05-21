import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Card} from '../Card/Card'

// import both the container and the component we want to wrap
import MovieContainer from '../containers/MovieContainer';
import CardHolder from '../CardHolder/CardHolder.js';

const middleware = [thunk]

const mockStore = configureMockStore(middleware)({
  movies: { 'Star Wars': {
    movie_id: 66,
    poster_path: 'posterURL',
    overview: 'The battle between the light and the dark',
    title: 'Star Wars',
    release_date: '20151215',
    vote_average: '10',
  }
  }
});

const setup = () => {
  console.log('above', mockStore.getState());
  const Container = mount(<Provider store={mockStore}><MovieContainer /></Provider>);
  console.log('below');
  const Component = Container.find(CardHolder);
  return {
    Container,
    Component
  };
};


describe('CreateUserContainer', () => {
  const { Container, Component } = setup();
  it.only('should pass the appropriate props from state', () => {
    // console.log(Component.props());
    expect(Component.props().movies).toContain(movie)
  });

  // it.only('should pass down the correct action creators', () => {
  //   expect(Object.keys(Component.props())).toContain('handleRemove');
  //   expect(Object.keys(Component.props())).toContain('handleFavorites');
  // });
});
