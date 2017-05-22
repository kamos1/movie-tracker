import React from 'react';
// import './Card.css';

export const Card = (props) => {
  const { title, overview, poster_path, user, history,
          handleFavorites, handleRemove, favorites, movies } = props;

  return (
    <div className="card-box">
      <img src={ poster_path } />
      <h2 className="movie-title">{title}</h2>
      <article className="movie-details">
        <p>{ overview }</p>
      </article>
      {buttonDisplay(props)}
    </div>
  );
};

const buttonDisplay = (props) => {
  const { title, overview, poster_path, user, history,
          handleFavorites, handleRemove, favorites, movies } = props;

  if (!Object.keys(user).length) {
    return (
      <button className="fav-btn"
              onClick={ () => { history.replace('/signup'); } }>add <span className="title-btn">{ title }</span> to favorites</button>
    );
  } else if (Object.keys(favorites).includes(title)){
    return (
        <button className="fav-btn"
                onClick={ () => { favoritesClick(user, history, handleFavorites, handleRemove, favorites, title, movies); } }>Remove <span className="title-btn">{ title }</span> from favorites</button>
              )
  }
  return (
      <button className="fav-btn"
              onClick={ () => { favoritesClick(user, history, handleFavorites, handleRemove, favorites, title, movies); } }>Add <span className="title-btn">{ title }</span> to favorites</button>
  );
};

const favoritesClick = (user, history, handleFavorites, handleRemove, favorites, title, movies) => {
  const userArray = Object.keys(user);
  const favKeys = Object.keys(favorites);
  console.log(Object.keys(favorites))
  console.log(title)

  const postNewFavorite = {
    movie_id: movies[title].movie_id,
    user_id: user[userArray[0]].id,
    title: movies[title].title,
    poster_path: movies[title].poster_path,
    release_date: movies[title].release_date,
    vote_average: movies[title].vote_average,
    overview: movies[title].overview,
  };

  const postRemoveFavorite = {
    user_id: user[userArray[0]].id,
    movie_id: movies[title].movie_id,
  };

  if (!userArray.length) {
    console.log('STOP');
    history.replace('/signup');
  } else if (favKeys.includes(title)) {
    fetch(`/api/users/${user[userArray[0]].id}/favorites/${movies[title].movie_id}`, {
      method: 'DELETE',
      body: JSON.stringify(postRemoveFavorite),
      headers: { 'Content-Type': 'application/json' },
    });
    handleRemove(movies[title]);
  } else {
    fetch('api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(postNewFavorite),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(resp => resp.json());
    handleFavorites(movies[title]);
  }
};
