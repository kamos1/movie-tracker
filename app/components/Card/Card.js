import React from 'react';

export const Card = (props) => {
  const { title, synopsis, poster, user, history } = props;

  return (
    <div>
      <img src={ poster } />
      <h2>Title: {title}</h2>
      <button onClick={ () => {favoritesClick(user, history)} }>Favorites</button>
      <p>{ synopsis }</p>
    </div>
  );
};


//NOTE: Action/reducer needs to be created for adding favorited cards to favorites array
//NOTE: Move to helper folder??? Also use function from previous projects to toggle css and/or use store prop
//NOTE: SignOut button should have action/reducer to reset user back to empty object

const favoritesClick = (user, history, action) => {
  let userArray = Object.keys(user)
  if(!userArray.length) {
    history.replace('/signup')
  } else {

    console.log('ADD A FAVORITES CSS PROP');
  }
}
