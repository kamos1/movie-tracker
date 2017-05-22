import React, { Component } from 'react';
import CreateUserContainer from '../containers/CreateUserContainer';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',

    };
  }

  verifyUser(obj) {

    fetch('/api/users',{
      method: 'GET',
    })
      .then(resp => resp.json())
      .then(userData => {
        let match = userData.data.find((user) =>{
          return user.email === this.state.email
        })

        if (match){
          alert('Email has already been used')
        } else {
          this.props.handleCreateUser(this.state);
          fetch('/api/users/new', {
            method: 'POST',
            body: JSON.stringify({ name: this.state.name, email: this.state.email, password: this.state.password }),
            headers: { 'Content-Type': 'application/json' },
          })
          .catch('error posting to api');
          this.props.history.replace('/login');
        }
      })
  }

  render() {
    return (
      <form id='create-user-form'>
        <input
          type='text'
          onChange={e => this.setState({ name: e.target.value })}
          placeholder='Name'/>
        <input
          type='text'
          onChange={e => this.setState({ email: e.target.value })}
          placeholder='Email'/>
        <input
          type='text'
          onChange={e => this.setState({ password: e.target.value })}
          placeholder='Password'/>
        <button onClick={(e) => {
          e.preventDefault();
          this.verifyUser(this.state);
        }}>
        Submit</button>
      </form>
    );
  }
}

export default CreateUserContainer(CreateUser);
