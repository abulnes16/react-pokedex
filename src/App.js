import React, { useState, useEffect } from "react";
import "./css/App.css";

/* Components */
import Header from "./components/Header";
import Form from "./components/Form";
import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer";
import Spinner from './components/Spinner'

/* Services */
import { getPokemons } from "./services/pokemon";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filtePokemons, setFilterPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPokemons(150)
      .then((data) => {
        setPokemonList(data);
        setFilterPokemons(data);
      })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const filterList = (name) => {
    if(!name){
      setFilterPokemons(pokemonList)
    }

    let regex = new RegExp(name, 'i')
    let filter = pokemonList.filter((pokemon)=> regex.test(pokemon.name))
    setFilterPokemons(filter);
  }

  return (
    <div className="App">
      <Header logo="./assets/img/logo.png" />
      <main className="main">
        <Form filterList={filterList} />
        {
          loading ? <Spinner/> : 
            error ? "Hubo un error al traer los pokemon :/" : <PokemonList list={filtePokemons} />
        }
        
      </main>
      <Footer author={"@abulnes16"} />
    </div>
  );
}

export default App;
