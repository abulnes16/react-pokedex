import React, { useState, useEffect } from "react";

/* Modules */
import { getPokemonDetail } from "../services/pokedex";
import Spinner from "./Spinner";

const PokemonCard = ({ pokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPokemonDetail(pokemon.url)
      .then((res) => setPokemonDetail(res))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [pokemon.url]);

  if (loading) {
    return <Spinner />;
  }

  if (error){
    return "No pude traer el pokemon:("
  }

  return (
    <article className="pokemon-item">
      <span className="pokemon-number"># {pokemonDetail.id}</span>
      <img src={pokemonDetail.sprites.front_default} alt="pokemon-img" />
      <div className="pokemon-detail">
        <h4>{pokemonDetail.name}</h4>
        <div className="type-list">
          {pokemonDetail.types.map((type) => (
            <span
              key={type.type.name}
              className={`badge ${type.type.name}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PokemonCard;
