import React from 'react';

export const Card = (props) => {
  const { title, synopsis, poster } = props;

  return (
    <div>
      <img src={ poster } />
      <h2>Title: {title}</h2>
      <p>{ synopsis }</p>
    </div>
  );
};
