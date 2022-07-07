import React, { useState, useEffect } from "react";

/* Components */
import Spinner from "./Spinner";

/* Services */
import { getPokemonDetail } from "../services/pokemon";
import { Pokemon, PokemonShortInfo } from "../models";

interface PokemonItemProps {
  pokemon: PokemonShortInfo;
}

const PokemonItem: React.FC<PokemonItemProps> = (props) => {
  const [pokemonDetail, setPokemonDetail] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPokemonDetail(props.pokemon.url)
      .then((data) => setPokemonDetail(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [props.pokemon.url]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>No pudimos traer al pokemon :/</p>;
  }

  return (
    <article className="pokemon-item">
      <span className="pokemon-number"> # {pokemonDetail?.id}</span>
      <img src={pokemonDetail?.sprites.front_default} alt="pokemon-img" />
      <div className="pokemon-detail">
        <h4>{pokemonDetail?.name}</h4>
        <div className="type-list">
          {pokemonDetail?.types.map((type) => (
            <span key={type.type.name} className={`badge ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PokemonItem;
