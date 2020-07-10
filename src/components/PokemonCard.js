import React from "react";

const PokemonCard = () => {
  return (
    <article className="pokemon-item">
      <span className="pokemon-number"># 25</span>
      <img src={"./assets/img/pikachu.png"} alt="pokemon-img" />
      <div className="pokemon-detail">
        <h4>Pikachu</h4>
        <div className="type-list">
          <span>Eléctrico</span>
        </div>
      </div>
    </article>
  );
};

export default PokemonCard;
