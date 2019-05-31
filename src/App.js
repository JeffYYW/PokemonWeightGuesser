import React, {Component} from 'react';
// import axios from 'axios';
import Header from './Header.js'
import Pokecard from './Pokecard.js'
import EndMessage from './EndMessage.js'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokeWeightArray: [],
      pokeIdArray: [],
      message: ""
    }

  }

  handleClick = (weight) => {

    const otherTwo = this.state.pokeWeightArray.filter((item) => 
      item !== weight
    )
    if (weight >= otherTwo[0] && weight > otherTwo[1]) {
      // console.log('You win!');
      this.setState({
        message: "That's correct!"
      })
    } else {
      // console.log('You lose!');
      this.setState({
        message: "Sorry, better luck next time!"
      })
    }
  }
  
// duplicate weights  
// change random numbers in each pokecard  
// refresh game when it has ended  
// display weight on game end. How to render <p> tag?

  getPokemonWeight = (weight) => {
    const newWeightsArray = [...this.state.pokeWeightArray]
    newWeightsArray.push(weight);
    // console.log("Pokemon weights", newWeightsArray);

    this.setState({
      pokeWeightArray: newWeightsArray 
    })
  }

  getPokemonId = (id) => {
    const newIdArray = [...this.state.pokeIdArray]
    newIdArray.push(id);
    // console.log("Pokemon Ids", newIdArray);

    this.setState({
      pokeIdArray: newIdArray
    })
  }

  render(){
    
    return (
      <div className="App">
        <Header />
        <div className="pokeCards">
          <Pokecard 
            getWeight={this.getPokemonWeight} 
            getId={this.getPokemonId}
            click={this.handleClick}
          />
          <Pokecard 
            getWeight={this.getPokemonWeight} 
            getId={this.getPokemonId}
            click={this.handleClick}
          />
          <Pokecard 
            getWeight={this.getPokemonWeight} 
            getId={this.getPokemonId}
            click={this.handleClick}
          /> 
        </div>

        <EndMessage message={this.state.message}/>


    </div>
    );
  }
}

export default App;
