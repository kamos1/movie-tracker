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
    const { handleSubmit } = this.props
    return (
      <form>
        <input
          type='text'
          onChange={(e) => this.setState({email: e.target.value})}
          placeholder='Email'/>
        <input
          type='text'
          onChange={(e) => this.setState({password: e.target.value})}
          placeholder='Password'/>
        <button onClick={(e) => {
          e.preventDefault()
          handleSubmit(this.state)
        }}>
        Submit</button>
      </form>
    )
  }
}
