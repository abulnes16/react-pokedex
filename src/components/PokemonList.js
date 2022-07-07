import React from "react";

/* Components */
import PokemonItem from "./PokemonItem";

const PokemonList = (props) => {
  return (
    <section className="pokemon-list">
      {props.list.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default PokemonList;
