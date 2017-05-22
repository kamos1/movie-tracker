import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      id: '',
    };
  }

  verifyLogin(state) {
    fetch('/api/users/', {
      method: 'GET',
    })
      .then(res => res.json())
      .then((users) => {
        const foundUser = users.data.find(user => user.email === this.state.email) || '';
        this.setState({ id: foundUser.id });
        this.checkPass(foundUser)
      })
      .catch('error posting to api');


  }

  checkPass(foundUser){
    if (foundUser.password === this.state.password) {
      this.props.handleSubmit(this.state);
      this.props.history.replace('/');
      fetch(`api/users/${foundUser.id}/favorites`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then((favs) => {
          this.getFavorites(favs)
        })
      } else {
        alert('Wrong Password')
      }
    }

  getFavorites(favs){
    if (!favs.data.length) {
      return {};
    }
    const favsArray = Object.keys(favs.data);
    const favsData = favsArray.reduce((acc, movie) => {
      if (!acc[movie.title]) {
        acc[favs.data[movie].title] = {
          title: favs.data[movie].title,
          overview: favs.data[movie].overview,
          poster_path: favs.data[movie].poster_path,
          movie_id: favs.data[movie].movie_id,
          release_date: favs.data[movie].release_date,
          vote_average: favs.data[movie].vote_average,
        };
      }
      return acc;
    }, {});
    this.props.handleAllFavorites(favsData);
  }

  render() {
    return (
      <form id='login-form'>
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
