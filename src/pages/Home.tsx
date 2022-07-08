import { error } from "console";
import React, { useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";
import Spinner from "../components/Spinner";
import { RequestState } from "../models";
import { useAppDispatch, useAppSelector } from "../store";
import { savePokemonName } from "../store/slices/pokemon/pokemon.actions";
import { fetchPokemons } from "../store/slices/pokemon/pokemon.thunks";

const Home = () => {
  const { pokemonName, list, request } = useAppSelector(
    (state) => state.pokemonReducer
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchPokemons(150));
  }, []);

  const filterPokemons = useMemo(() => {
    if (pokemonName === "") {
      return list;
    }

    const regex = new RegExp(pokemonName, "i");
    return list.filter((pokemon) => regex.test(pokemon.name));
  }, [list, pokemonName]);

  return (
    <div className="App">
      <Header logo="./assets/img/logo.png" />
      <main className="main">
        <Form />
        {request === RequestState.LOADING ? (
          <Spinner />
        ) : request === RequestState.ERROR ? (
          "Hubo un error al traer los pokemon :/"
        ) : (
          <PokemonList list={filterPokemons} />
        )}
      </main>
      <Footer author={"@abulnes16"} />
    </div>
  );
};

export default Home;
