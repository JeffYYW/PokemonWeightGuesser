import React, {Component} from 'react'
import axios from 'axios'
import MissingNo from './assets/Missingno.png'

class Pokecard extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            sprite: "",
            id: 0,
            clearClick: "divDisabled",
            weight: ""
        }
    }

    random = (min, max) => {
        let num = Math.floor(Math.random() * (max - min)) + min;
        return num;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    componentDidMount() {

        const randNum = this.random(0, 900)

        const url = "https://pokeapi.co/api/v2/pokemon/" + randNum
        
        axios({
            method: 'GET',
            url: url,
            dataResponse: 'json'
        }).then(results => {
            const pokemon = this.capitalizeFirstLetter(results.data.species.name)
            const pokeImg = results.data.sprites.front_default;
            const pokeWeight = (results.data.weight / 10);
            const pokeId = results.data.id;

            this.props.getWeight(pokeWeight)
            
            this.setState({
                name: pokemon,
                sprite: pokeImg,
                id: pokeId,
                weight: pokeWeight
            })
        }).catch(error => {
            this.setState({
                name: "MissingNo.",
                sprite: MissingNo,
                weight: "10"
            })
        })
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.click(this.state.weight)
        }
    }

    render() {
        let disabledClick;
        if (this.props.displayWeight === true) {
            disabledClick = this.state.clearClick;
        }

        return (
            <div 
                tabindex={this.props.tabNumber}
                className={"pokeCard " + disabledClick}  
                onClick={() => {this.props.click(this.state.weight)}}
                onKeyPress={this.handleKeyPress}
            >
                <h3>{this.state.name}</h3>
                <img src={this.state.sprite} alt={this.state.name} />
                {this.props.displayWeight ? <p className="weightDisplay">Weight: {this.state.weight} kg</p> : null}
            </div>
        )
    }
}

export default Pokecard

    // References
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript