import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  verifyLogin(user) {
    const keys = Object.keys(this.props.users)
    const foundEmail = keys.find((email) => {
      email === this.state.email
    })
    if(this.props.users[foundEmail].password === this.state.password){
      this.props.handleSubmit(this.state)
    } else {
      alert('Your password is invalid')
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
          this.verifyLogin(this.state)
        }}>
        Submit</button>
      </form>
    )
  }
}
