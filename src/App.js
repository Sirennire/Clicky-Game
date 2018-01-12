import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard/characterCard";
import Wrapper from "./components/Wrapper/Wrapper";
import NavBar from "./components/NavBar/navBar";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import characters from "./characters.json";
import "./App.css";
import backgroundMusic from "./sounds/background.mp3";

// import {headShake} from 'react-animations';
// import {StyleSheet, css} from 'aphrodite';
// const styles = StyleSheet.create({
//     headShake: {
//         animationName: headShake,
//         animationDuration: '1s'
//     }
// });
//var backgroundMusic = new Audio("./components/Soundy/sounds/background.mp3") 

var arrayHasDuplicates = require("array-has-duplicates")
var shuffle = require("shuffle-array");
shuffle(characters); 

class App extends Component {
  state = {
    characters,
    check: false, 
    counter: 0, 
    topScore: 0, 
    newArray: [],
    title: "Click an image to begin!"
  };

  componentDidMount() {
    var backgroundMusic = document.getElementById("music");
    console.log(backgroundMusic); 
    backgroundMusic.play();
  }

  shuffleCharacters = () => {
    shuffle(characters)
    this.setState({ characters });
  };  

  pushClick = (id) => {
    console.time("loop");
    const NewArray = this.state.characters.filter(character => character.id === id);
    console.log(NewArray);
      this.state.newArray.push(NewArray[0].id);
        if (arrayHasDuplicates(this.state.newArray)) { 
          alert("oops! Game Over.");
          this.setState({
            title: "You guessed incorrectly. Try again!"
          });
          if (this.state.counter > this.state.topScore) { 
            this.setState({
              topScore: this.state.counter
            });
          }
          this.setState({
            counter: 0,
            newArray: []
          });
        }
        else {
          if (this.state.counter > 19){ 
            alert("perfect score!");
            this.setState({
              counter: 0,
              newArray: []
            }); 

          }
          else {
            var soundEffect = NewArray[0].greetings;
            var musicEffect = new Audio(soundEffect);
            musicEffect.play();
            console.log(soundEffect);
            this.setState({
              title: "You guessed correctly!",
              counter: (this.state.counter + 1)
            });  
          }
        }
        console.timeEnd("loop");
  };

  render() {
    return (
      <div>
        <NavBar 
          counter={this.state.counter}
          topScore={this.state.topScore}
          title={this.state.title}
        />

        <Header />

        <audio id="music" preload="auto" src={backgroundMusic}></audio>
        
        <Wrapper className="container">
          {this.state.characters.map(character => (
        
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              class={character.class}
              race={character.race}
              location={character.location}
              greeting={character.greetings}
              shuffleCharacters={this.shuffleCharacters}
              pushClick={this.pushClick}
            />
          ))}
        </Wrapper>

        <Footer />
      </div>
    );
  }
}

export default App;
