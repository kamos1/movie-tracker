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
    fetch('/api/users/',{
      method: 'GET'
    })
      .then((res) => res.json())
      .then((users) => {
        const foundUser = users.data.find(user => user.email === this.state.email)
          if (foundUser.password === this.state.password) {
            this.props.handleSubmit(this.state)
            this.props.history.replace('/')
          } else {
            this.props.history.replace('/signup')
          }
      })
      .catch('error posting to api')
  }

  render() {
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
