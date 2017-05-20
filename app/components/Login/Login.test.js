import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock'
import Login from '../Login/Login.js';

describe('Login Component', () =>{
  it('should have several inputs for login', () =>{
    const wrapper = shallow(<Login />)

    expect(wrapper.find('input').length).toEqual(2)
  })

})
