//importaciones
import React, { useState, useEffect } from "react";

//estilos css
import "../styles/Species.css";

const Species = ({ pokemon }) => {
  //variables de estado
  const [species, setSpecies] = useState({});

  //useEffect
  useEffect(() => {
    const getPokemon = () => {
      fetch(pokemon?.species?.url)
        .then((data) => data.json())
        .then((json) => setSpecies(json));
    };

    getPokemon();
  }, [pokemon?.species?.url]);

  return (
    <div>
      <h2 className="card__subtitle">Información</h2>
      {species?.flavor_text_entries?.map((specie, index) => {
        let especie = specie?.language?.name === "es";
        return (
          <p className="card__text" key={index}>
            {especie && specie?.flavor_text}
          </p>
        );
      })}
    </div>
  );
};

export default Species;
