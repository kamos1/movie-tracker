import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock'
import { NavBar } from '../NavBar/NavBar.js';
import configureMockStore from 'redux-mock-store';
import NavBarContainer from '../containers/NavBarContainer';

describe('NavBar', () => {
  it('NavBar has a home, login, and signup button when there is not user', () => {
    const wrapper = shallow(<NavBar user={{}}/>)
    const navLinks = wrapper.find('NavLink')
    expect((navLinks).length).toEqual(3)
    expect(navLinks.nodes[0].props.children).toEqual('Home')
    expect(navLinks.nodes[1].props.children).toEqual('Login')
    expect(navLinks.nodes[2].props.children).toEqual('Signup')
  })

  it('NavBar has a home, login, and signup button when there is not user', () => {
    const wrapper = shallow(<NavBar user={{guy:{email: 'guy@aol.com', password: 'guy'}}}/>)
    const navLinks = wrapper.find('NavLink')

    expect((navLinks).length).toEqual(3)
    expect(navLinks.nodes[0].props.children).toEqual('Home')
    expect(navLinks.nodes[1].props.children).toEqual('Favorites')
    expect(navLinks.nodes[2].props.children).toEqual('Logout')
  })
})
