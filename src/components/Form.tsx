import React from "react";
import { useAppDispatch } from "../store";
import { savePokemonName } from "../store/slices/pokemon/pokemon.actions";

const Form: React.FC<any> = () => {
  const dispatch = useAppDispatch();

  const setPokemonName = (name: string) => {
    dispatch(savePokemonName(name));
  };

  return (
    <section className="form-container">
      <form className="form">
        <input
          type="text"
          placeholder="Nombre del pokemon"
          onChange={(event) => setPokemonName(event.target.value)}
        />
      </form>
    </section>
  );
};

export default Form;
