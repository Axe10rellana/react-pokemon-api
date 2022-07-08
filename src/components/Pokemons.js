//importaciones
import React from "react";

//componentes
import Pokemon from "./Pokemon";
import Loader from "./Loader";

//estilos css
import "../styles/Pokemons.css";

const Pokemons = ({ loading, pokemons, error, search }) => {
  const filteredPokemons = pokemons?.results?.filter((pokemon) =>
    pokemon?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ul>
        {loading && <Loader />}
        {error && <p>{error.message}</p>}
      </ul>
      <ul className="list">
        {pokemons &&
          filteredPokemons?.map((pokemon, index) => (
            <Pokemon key={index} pokemon={pokemon} />
          ))}
      </ul>
    </>
  );
};

export default Pokemons;
