import React, {Component} from 'react';
// import axios from 'axios';
import Header from './Header.js'
import Pokecard from './Pokecard.js'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      pokeWeightArray: [],
      pokeIdArray: []
    }
  }
 
  
  getPokemonWeight = (weight) => {
    const newWeightsArray = [...this.state.pokeWeightArray]
    newWeightsArray.push(weight);
    console.log(newWeightsArray);

    this.setState({
      pokeWeightArray: newWeightsArray 
    })
  }

  getPokemonId = (id) => {
    const newIdArray = [...this.state.pokeIdArray]
    newIdArray.push(id);
    console.log(newIdArray);

    this.setState({
      pokeIdArray: newIdArray
    })
  }

  render(){
    
    return (
      <div className="App">
        <Header />
        <div className="pokeCards">
          <Pokecard getWeight={this.getPokemonWeight} getId={this.getPokemonId}/>
          <Pokecard getWeight={this.getPokemonWeight} getId={this.getPokemonId}/>
          <Pokecard getWeight={this.getPokemonWeight} getId={this.getPokemonId}/> 
        </div>
    </div>
    );
  }
}

export default App;
