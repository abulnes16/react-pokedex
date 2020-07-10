import React, { useState, useEffect } from "react";
import "./css/App.css";

/* Components */
import Header from "./components/Header";
import Form from "./components/Form";
import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

/* Services */
import { getPokemons } from "./services/pokedex";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterPokemons, setFilterPokemons] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPokemons(20)
      .then((res) => {
        setPokemonList(res);
        setFilterPokemons(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const filterList = (name) => {
    if (!name) {
      setFilterPokemons(pokemonList);
    }

    let regex = new RegExp(name, "i");
    let filter = pokemonList.filter((pokemon) => regex.test(pokemon.name));
    setFilterPokemons(filter);
  };

  return (
    <div className="App">
      <Header logoPath="./assets/img/logo.png" />
      <main className="main">
        <Form filter={filterList} />
        {loading ? <Spinner /> : 
        error ? "Ocurrió un error al traer la lista :(":<PokemonList list={filterPokemons} />}
      </main>
      <Footer author="@abulnes16" />
    </div>
  );
}

export default App;
