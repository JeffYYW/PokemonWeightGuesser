import React, {Component} from 'react';
import axios from 'axios';
import './App.css';


class Header extends Component {
  render() {
    return (
      <div>
        <h1>Who's heavier? {this.props.name}</h1>
      </div>
    )
  }
}

class Pokecard extends Component {
  render() {
    return (
      <div>
        <p>Pokemon name: {this.props.name}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "phoenix"
    }
  }


  componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=10"
    axios({
      method: 'GET',
      url: url,
      dataResponse: 'json'
    }).then(results=> {
      console.log(results.data.results)
      const pokemon = results.data.results[0].name;
      console.log(pokemon)
      this.setState({
        name:pokemon
      })
    })
  }


  
  render(){
    
    return (
      <div className="App">
        <Header name="snorlax" />
        <Pokecard name={this.state.name}/> 
        
    </div>
    );
  }
}

export default App;
