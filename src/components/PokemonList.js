import React from "react";

/* Components */
import PokemonCard from "./PokemonCard";

const PokemonList = ({ list }) => {
  return (
    <section className="pokemon-list">
      {list.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default PokemonList;
