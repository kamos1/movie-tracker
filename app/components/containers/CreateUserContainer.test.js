import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// import both the container and the component we want to wrap
import CreateUserContainer from '../containers/CreateUserContainer';
import CreateUser from '../CreateUser/CreateUser.js';

const mockStore = configureMockStore()({
  newUser:
  { name: 'Chris Bandrowsky',
    email: 'email.com',
    password: 'take an l',
  },
});


const setup = () => {
  // Mount our container component *within* a Provider that has our new mockStore as a prop
  const Container = mount(<Provider store={mockStore}><CreateUserContainer /></Provider>);

  // Find the component we're wrapping so we can check its props later
  const Component = Container.find(CreateUser);

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
    expect(Component.props().newUser).toEqual(
      { name: 'Chris Bandrowsky',
        email: 'email.com',
        password: 'take an l',
      });
  });

  // Verify the container correctly bound our action creators as props
  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('createUser');
  });
});
