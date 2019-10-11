import React from 'react';

// SMURF CARD (ADD ID IF STRETCH)

const SmurfCard = props => {
  return (
    <div>

        <h1>Name: {props.name}</h1>

        <p> Height: {props.height}</p>
        <p> Age: {props.age}</p>
        
    </div>
  );
};

export default SmurfCard;