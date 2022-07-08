//importaciones
import React, { useState, useEffect } from "react";

//react-router
import { Link } from "react-router-dom";

//assets
import noimage from "../assets/images/noimage.png";

//estilos css
import "../styles/Pokemon.css";

const Pokemon = ({ pokemon }) => {
  //variables de estado
  const [pokemonID, setPokemonID] = useState({});

  //useEffect
  useEffect(() => {
    const getPokemon = () => {
      fetch(pokemon.url)
        .then((data) => data.json())
        .then((json) => setPokemonID(json));
    };

    getPokemon();
  }, [pokemon.url]);

  //variables
  let image =
    pokemonID?.sprites?.front_default ||
    pokemonID?.sprites?.front_shiny ||
    noimage;
  let id = pokemonID.id;

  return (
    <li className="li">
      <Link to={`/pokemon/${id}`} className="li__link">
        <img
          className="li__img"
          src={image}
          alt={pokemon.name}
          title={pokemon.name}
        />
        <h2 className="li__title">{pokemon.name}</h2>
      </Link>
    </li>
  );
};

export default Pokemon;
