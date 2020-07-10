import React, { useState } from "react";

const Form = ({ filter }) => {

  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    /* Levantamos el estado llamando a la función padre */
    filter(name);
  }

  return (
    <section className="form-container">
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nombre del pokemon"
            onChange={(value) => setName(value.target.value)}
          />
          <input className="button" type="submit" value="Buscar" />
        </form>
      </div>
    </section>
  );
};

export default Form;
