/*
  COMPONENTE SIN USAR
*/
//importaciones
import React from "react";

//componentes
import Move from "./Move";

const Moves = ({ pokemon }) => {
  return (
    <div>
      <h2>Movimientos</h2>
      {pokemon?.moves?.map((m, index) => (
        <Move key={index} m={m} />
      ))}
    </div>
  );
};

export default Moves;
