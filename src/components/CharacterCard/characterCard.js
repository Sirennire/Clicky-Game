import React from "react";
import "./characterCard.css";

function play (url)  {
    var myAudio = new Audio(url);
    myAudio.play();
}

const CharacterCard = props => (
  <div onClick={() => {play(props.greetings);props.shuffleCharacters()}} className="card click-item">
    <div className="img-container" onClick={()=> props.pushClick(props.id)} >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CharacterCard;
