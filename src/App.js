import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard/characterCard";
import Wrapper from "./components/Wrapper/Wrapper";
import NavBar from "./components/NavBar/navBar";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import characters from "./characters.json";
import "./App.css";

// import {headShake} from 'react-animations';
// import {StyleSheet, css} from 'aphrodite';

// const styles = StyleSheet.create({
//     headShake: {
//         animationName: headShake,
//         animationDuration: '1s'
//     }
// });

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

  shuffleCharacters = () => {
    shuffle(characters)
    this.setState({ characters });
  };

  pushClick = (id) => {
    const NewArray = this.state.characters.filter(character => character.id === id);
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
            this.setState({
              title: "You guessed correctly!",
              counter: (this.state.counter + 1)
            });  
          }
        }
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
