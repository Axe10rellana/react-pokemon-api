/*
  COMPONENTE SIN USAR
*/
//importaciones
import React, { useState, useEffect } from "react";

//api
import { getPokemon } from "../api/api";

const Move = ({ m }) => {
  //variables de estado
  const [move, setMove] = useState({});

  //useEffect
  useEffect(() => {
    getPokemon(setMove, m.move.url);
  }, [m.move.url]);

  return (
    <div>
      {move?.flavor_text_entries?.map((move, index) => {
        return move.language.name === "es" ? (
          <p key={index}>{move?.flavor_text}</p>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default Move;
