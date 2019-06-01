import React, {Component} from 'react'
import axios from 'axios'

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

    componentDidMount() {

        const randNum = this.random(0, 900)

        const url = "https://pokeapi.co/api/v2/pokemon/" + randNum
        
        axios({
            method: 'GET',
            url: url,
            dataResponse: 'json'
        }).then(results => {
            const pokemon = results.data.species.name
            const pokeImg = results.data.sprites.front_default;
            const pokeWeight = results.data.weight;
            const pokeId = results.data.id;

            this.props.getWeight(pokeWeight)
            
            this.setState({
                name: pokemon,
                sprite: pokeImg,
                id: pokeId,
                weight: pokeWeight
            })
        })
    }

    render() {
        let disabledClick;
        if (this.props.displayWeight === true) {
            disabledClick = this.state.clearClick
        }
        return (
            <div 
                tabindex="0"
                className={"pokeCard " + disabledClick}  
                onClick={() => {this.props.click(this.state.weight)}}
            >
                <p>Pokemon name: {this.state.name}</p>
                <img src={this.state.sprite} alt={this.state.name} />
                {this.props.displayWeight ? <p className="weightDisplay">Weight: {this.state.weight}</p> : null}
            </div>
        )
    }
}

export default Pokecard
