import React, { useState } from "react";

interface FormProps {
  filterList: (name: string) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const [pokemonName, setPokemonName] = useState("");

  const searchPokemon = (event: React.FormEvent) => {
    event.preventDefault();
    props.filterList(pokemonName);
  };

  return (
    <section className="form-container">
      <form className="form" onSubmit={searchPokemon}>
        <input
          type="text"
          placeholder="Nombre del pokemon"
          onChange={(event) => setPokemonName(event.target.value)}
        />
        <input className="button" type="submit" value="Buscar" />
      </form>
    </section>
  );
};

export default Form;
