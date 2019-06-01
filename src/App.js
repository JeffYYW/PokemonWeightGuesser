import React, {Component} from 'react';
import Header from './Header.js'
import Pokecard from './Pokecard.js'
import EndMessage from './EndMessage.js'
import RenderButton from './RenderButton.js'
import './App.css';

class App extends Component {
  
  constructor() {
    super()
  
    this.state = {
      pokeWeightArray: [],
      message: "",
      display: false
    }
  }
  
  handleClick = (weight) => {
    const otherTwo = this.state.pokeWeightArray.filter((item) => 
      item !== weight
    )
    if (weight >= otherTwo[0] && weight >= otherTwo[1]) {
      this.setState({
        message: "That's correct!",
        display: true
      })
    } else {
      this.setState({
        message: "Sorry, better luck next time!",
        display: true
      })
    }
  }

  getPokemonWeight = (weight) => {
    const newWeightsArray = [...this.state.pokeWeightArray]
    newWeightsArray.push(weight);
    
    this.setState({
      pokeWeightArray: newWeightsArray 
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="pokeCards">
            <Pokecard 
              getWeight={this.getPokemonWeight} 
              click={this.handleClick}
              displayWeight={this.state.display}

            />
          <Pokecard 
            getWeight={this.getPokemonWeight} 
            click={this.handleClick}
            displayWeight={this.state.display}
          />
          <Pokecard 
            getWeight={this.getPokemonWeight} 
            click={this.handleClick}
            displayWeight={this.state.display}
          /> 
        </div>
        <EndMessage message={this.state.message}/>
        {this.state.display ? <RenderButton /> : null}
    </div>
    );
  }
}

export default App;
