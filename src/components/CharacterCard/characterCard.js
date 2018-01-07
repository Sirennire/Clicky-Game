import React from "react";
import "./characterCard.css";

// const newArray = [];

// var pushId = (id) => {
//     newArray.push(props.id); 
//   }

const CharacterCard = props => (
  <div onClick={props.shuffleCharacters} className="card click-item">
    <div className="img-container" onClick={()=> props.pushClick(props.id)} >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CharacterCard;

