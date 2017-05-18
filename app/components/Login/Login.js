import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      id: ''
    };
  }

  verifyLogin(state) {
    let user
    fetch('/api/users/', {
      method: 'GET',
    })
      .then(res => res.json())
      .then((users) => {
        const foundUser = users.data.find(user => {
          return user.email === this.state.email
        }) || '';
        this.setState({id: foundUser.id})

        if (foundUser.password === this.state.password) {
          this.props.handleSubmit(this.state);
          this.props.history.replace('/');

          fetch(`api/users/${foundUser.id}/favorites`, {
            method: 'GET',
          })
            .then(res => res.json())
            .then(favs =>{
              if(!favs.data.length){
                return {}
              } else {
                // let favsArray = Object.keys(favs.data)
                //
                // Object.assign({}, favsArray[movie.title])
                this.props.handleFavorites(favs.data)
              }
            })
            .catch(err => console.log('THIS IS FUCKING ERROR'))

        } else {
          alert('Email and Password do not match');
        }
      })
      .catch('error posting to api');
  }

  render() {
    return (
      <form>
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
          this.verifyLogin(this.state);
        }}>
        Submit</button>
      </form>
    );
  }
}
