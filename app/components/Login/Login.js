import React, { Component } from 'react'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <form>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Password'/>
        <button>Submit</button>
      </form>
    )
  }
}
