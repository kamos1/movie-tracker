import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock'
import Login from '../Login/Login.js';

describe('Login Component', () =>{

  // afterEach(() =>{
  //   expect(fetchMock.calls().unmatched).toEqual([])
  //   fetchMock.restore()
  // })

  const resolveAfter2Seconds = () => {
    return new Promise (resolve => {
      setTimeout(() =>{
        resolve();
      }, 2000)
    })
  }

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

    fetchMock.get('/api/users', {
      status : 200,
      body: {'chris.bandrowsky@email.com': {email: 'chrisbandrowsky@email.com', password: 'password', id: '1'}}
    })

    fetchMock.get('*', {
      status : 200
    })

    let mockFn = jest.fn()
    let mockEvent = jest.fn()
    const wrapper = shallow(<Login onClick={mockFn}/>)

    const emailInput = wrapper.find('input').first()
    const passInput = wrapper.find('input').last()
    const buttonInput = wrapper.find('button').first()

    // console.log(buttonInput);


    emailInput.simulate('change', {target: {value: 'chris.bandrowsky@email.com'}} )

    passInput.simulate('change', {target: {value: 'password'}} )

    expect(wrapper.state()).toEqual({email: 'chris.bandrowsky@email.com', password: 'password', id: ''})

    buttonInput.simulate('click', { preventDefault() {} })

    // fetchMock.get('/api/users', {
    //   status : 200,
    //   body: {'chris.bandrowsky@email.com': {email: 'chrisbandrowsky@email.com', password: 'password', id: '1'}}
    // })
    //
    // fetchMock.get('*', {
    //   status : 200
    // })

    expect(wrapper.state()).toEqual({email: '', password: '', id: ''})

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

})
