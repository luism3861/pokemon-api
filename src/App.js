import React, { Component } from "react";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";

class App extends Component {
  
  state = {
    pokemon: [],
    pokeImageUrl:{}
  };

  componentDidMount() {
    this.consultarPokemons();
  }

  consultarPokemons = () => {
    let url = "https://pokeapi.co/api/v2/pokemon/6";
    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(poke => {
        this.setState({
          pokemon: poke,
          pokeImageUrl:poke.sprites.front_default,
        })   
      
      })
  };


  

  render() {
    
      return (
        <div className="App">
          <Header titulo="POKEMON API" />
          <div className="container white contenedor-noticias">
          {/* {
            this.state.pkemones.map(elemnt => {
              return <Pokemon />
            })
          } */}
            <Pokemon 
              pokemon = {this.state.pokemon}
              pokeImageUrl = {this.state.pokeImageUrl}
            />
          </div>
         
        </div>
      );
    
    
    
  }
}

export default App;
