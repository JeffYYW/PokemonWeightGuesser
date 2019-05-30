import React, {Component} from 'react'
import axios from 'axios'

class Pokecard extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            sprite: "",
            id: 0,
            weight: ""
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
            const pokemon = results.data.species.name
            const pokeImg = results.data.sprites.front_default;
            const pokeWeight = results.data.weight;
            const pokeId = results.data.id;

            // console.log(results.data)

            this.props.getWeight(pokeWeight)
            this.props.getId(pokeId)

            this.setState({
                name: pokemon,
                sprite: pokeImg,
                id: pokeId,
                weight: pokeWeight
            })
        })
    }

    render() {
        return (
            <div class="pokeCard">
                <p>Pokemon name: {this.state.name}</p>
                <img src={this.state.sprite} alt={this.state.name} />
                <p>Weight: {this.state.weight}</p>
            </div>
        )
    }
}

export default Pokecard