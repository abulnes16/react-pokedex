import React from "react";

/* Components */
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <section className="pokemon-list">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </section>
  );
};

export default PokemonList;
