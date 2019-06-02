import React, {Component} from 'react';
import Header from './Header.js'
import Pokecard from './Pokecard.js'
import EndMessage from './EndMessage.js'
import RenderButton from './RenderButton.js'
import './App.css';
import oak from './assets/profOak.png'

class App extends Component {
  
  constructor() {
    super()
  
    this.state = {
      pokeWeightArray: [],
      message: "",
      display: false,
      tab: "0"
    }
  }
  
  handleClick = (weight) => {
    const otherTwo = this.state.pokeWeightArray.filter((item) => 
      item !== weight
    )
    if (weight >= otherTwo[0] && weight >= otherTwo[1]) {
      this.setState({
        message: "That's correct! Great guess!",
        display: true,
        tab: null
      })
    } else {
      this.setState({
        message: "Sorry, better luck next time!",
        display: true,
        tab: null
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
              tabNumber={this.state.tab}
            />
          <Pokecard 
            getWeight={this.getPokemonWeight} 
            click={this.handleClick}
            displayWeight={this.state.display}
            tabNumber={this.state.tab}
          />
          <Pokecard 
            getWeight={this.getPokemonWeight} 
            click={this.handleClick}
            displayWeight={this.state.display}
            tabNumber={this.state.tab}
          /> 
        </div>
        <EndMessage message={this.state.message}/>
        {this.state.display ? <RenderButton /> : null}

        {/* <div className="professor">
          <img src={oak} alt="Professor Oak"/>
        </div> */}
    </div>
    );
  }
}

export default App;
