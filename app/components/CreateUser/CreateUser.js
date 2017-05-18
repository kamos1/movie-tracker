import React, { Component } from 'react'
import CreateUserContainer from '../containers/CreateUserContainer'

class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  verifyUser(obj) {
    const keys = Object.keys(this.props.users)

    if(keys.includes(this.state.email)) {
      alert('Email has already been used')
    }

    this.props.handleCreateUser(this.state)
    fetch('/api/users/new',{
      method: 'POST',
      body: JSON.stringify({'name': this.state.name, 'email': this.state.email, 'password': this.state.password}),
      headers: {'Content-Type': 'application/json'},
    })
      .then((res) => console.log(res))
      .catch('error posting to api')

      this.props.history.replace('/')
  }


  render() {
    return (
      <form>
        <input
          type='text'
          onChange={(e) => this.setState({name: e.target.value})}
          placeholder='Name'/>
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
          this.verifyUser(this.state)
        }}>
        Submit</button>
      </form>
    )
  }
}

export default CreateUserContainer(CreateUser)
