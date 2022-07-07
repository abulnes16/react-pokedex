import React from "react";
import { PokemonShortInfo } from "../models";

/* Components */
import PokemonItem from "./PokemonItem";

interface PokemonListProps {
  list: PokemonShortInfo[];
}

const PokemonList: React.FC<PokemonListProps> = (props) => {
  return (
    <section className="pokemon-list">
      {props.list.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default PokemonList;
