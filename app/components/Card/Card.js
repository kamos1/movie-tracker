import React from 'react';
// import './Card.css';

export const Card = (props) => {
  const { title, overview, poster_path, user, history, handleFavorites, handleRemove, favorites, movies } = props;

  return (
    <div className="card-box">
      <img src={ poster_path } />

      <h2 className="movie-title">{title}</h2>

      <article className="movie-details">
        <p>{ overview }</p>
      </article>

      <button className="fav-btn"
              onClick={ () => { favoritesClick(user, history, handleFavorites, handleRemove, favorites, title, movies); } }>add <span className="title-btn">{ title }</span> to favorites</button>
    </div>
  );
};

const favoritesClick = (user, history, handleFavorites, handleRemove, favorites, title, movies) => {
  const userArray = Object.keys(user);
  const favKeys = Object.keys(favorites);

  console.log(userArray[0]);

  const postData = {
    movie_id: movies[title].movie_id,
    user_id: user[userArray[0]].id,
    title: movies[title].title,
    poster_path: movies[title].poster_path,
    release_date: movies[title].release_date,
    vote_average: movies[title].vote_average,
    overview: movies[title].overview,
  };

  if (!userArray.length) {
    history.replace('/signup');
  } else if (favKeys.includes(title)) {
    handleRemove(movies[title]);
  } else {
    console.log(postData);
    fetch('api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(resp => resp.json());
    handleFavorites(movies[title]);
  }
};
