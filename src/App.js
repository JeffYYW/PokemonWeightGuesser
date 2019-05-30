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
  constructor() {
    super()

    this.state = {
      name: "poke state"
    }
  }

  random = (min, max) => {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  componentDidMount() {

    const randNum = this.random(0, 500)

    const url = "https://pokeapi.co/api/v2/pokemon/" + randNum
    axios({
      method: 'GET',
      url: url,
      dataResponse: 'json'
    }).then(results => {
      // const pokeList = (results.data.results);
      // console.log(pokeList)
      // console.log(pokeList.length);


      // const pokemon = results.data.results[randNum].name;

      const pokemon = results.data.species.name
      console.log(results.data.species.name)

      this.setState({
        name: pokemon
      })
    })
  }

  render() {
    return (
      <div>
        <p>Pokemon name: {this.state.name}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: ""
    }
  }


  random = (min, max) => {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  // componentDidMount() {

  //   const randNum = this.random(0, 500)

  //   const url = "https://pokeapi.co/api/v2/pokemon/" + randNum
  //   axios({
  //     method: 'GET',
  //     url: url,
  //     dataResponse: 'json'
  //   }).then(results=> {
  //     // const pokeList = (results.data.results);
  //     // console.log(pokeList)
  //     // console.log(pokeList.length);

      
  //     // const pokemon = results.data.results[randNum].name;
      
  //     const pokemon = results.data.species.name
  //     console.log(results.data.species.name)
      
  //     this.setState({
  //       name:pokemon
  //     })
  //   })
  // }


  
  render(){
    
    return (
      <div className="App">
        <Header />
        <Pokecard /> 
        <Pokecard /> 
        <Pokecard /> 
        
    </div>
    );
  }
}

export default App;
