import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock'
import Login from '../Login/Login.js';

describe('Login Component', () =>{
  it('should have several inputs for login', () =>{
    const wrapper = shallow(<Login />)

    expect(wrapper.find('input').length).toEqual(2)
  })

  it('should have an empty state at default', ()=>{
    const wrapper = shallow(<Login />)

    expect(wrapper.state()).toEqual({email: '', password: '', id: ''})
  })

  it('should change state when a user is entered.', () =>{
    const wrapper = shallow(<Login />)

    const emailInput = wrapper.find('input').first()
    const passInput = wrapper.find('input').last()

    emailInput.simulate('change', {target: {value: 'chris.bandrowsky@email.com'}} )

    passInput.simulate('change', {target: {value: 'password'}} )

    expect(wrapper.state()).toEqual({email: 'chris.bandrowsky@email.com', password: 'password', id: ''})
  })

  it('should change state when a user is and submit is clicked.', () =>{
    let mockFn = jest.fn()
    const wrapper = shallow(<Login onClick = {(e) => {
      e.preventDefault()
      mockFn
    }}/>)

    const emailInput = wrapper.find('input').first()
    const passInput = wrapper.find('input').last()
    const buttonInput = wrapper.find('button').first()

    emailInput.simulate('change', {target: {value: 'chris.bandrowsky@email.com'}} )

    passInput.simulate('change', {target: {value: 'password'}} )

    expect(wrapper.state()).toEqual({email: 'chris.bandrowsky@email.com', password: 'password', id: ''})

    buttonInput.simulate('click')

    expect(mockFn).toHaveBeenCalled(1)
  })

})
