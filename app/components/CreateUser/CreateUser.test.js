import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock'
import CreateUser from '../CreateUser/CreateUser.js';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore()({
  user:
  { name: 'Chris Bandrowsky',
    email: 'email.com',
    password: 'password',
  }
})

const wrapper = mount(<Provider store = {mockStore}><CreateUser /></Provider>)
const Component = wrapper.find(CreateUser);

console.log(CreateUser)


describe('Create user component', () =>{

  it('should have a form for creating a user', () =>{
    expect(wrapper.find('form').length).toEqual(1)
  })

  it('should have several inputs for creating a user', () =>{

    const inputs = wrapper.find('input').first()

    expect(wrapper.find('input').length).toEqual(3)
  })

  // it('should change state with input', () =>{
  //
  //   console.log(wrapper)
  //   const nameInput = wrapper.find('input').first()
  //   const emailInput = wrapper.find('input').at(1)
  //   const passInput = wrapper.find('input').last()
  //
  //   nameInput.simulate('change', {target: {value: 'Chris'}} )
  //   emailInput.simulate('change', {target: {value: 'chris.bandrowsky@email.com'}} )
  //   passInput.simulate('change', {target: {value: 'password'}} )
  //
  //   expect(wrapper.state()).toEqual({name: 'Chris', email: 'chris.bandrowsky@email.com', password: 'password', id: ''})
  // })


})
