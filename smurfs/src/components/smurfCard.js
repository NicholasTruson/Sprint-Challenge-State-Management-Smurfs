import React from 'react';

// SMURF CARD (ADD ID IF STRETCH)

const SmurfCard = props => {
  return (
    <div>

        <h1>Name: {props.smurfList.name}</h1>

        <p> Height: {props.smurfList.height}</p>
        <p> Age: {props.smurfList.age}</p>
        
    </div>
  );
};

export default SmurfCard;