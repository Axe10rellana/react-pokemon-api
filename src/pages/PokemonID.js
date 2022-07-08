//importaciones
import React, { useState, useEffect } from "react";

//react-router
import { useParams, Link } from "react-router-dom";

//assets
import noimage from "../assets/images/noimage.png";

//componentes
import Loader from "../components/Loader";
import Species from "../components/Species";

//estilos css
import "../styles/PokemonID.css";

const PokemonID = () => {
  //variables de estado
  const [pokemon, setPokemon] = useState({});

  //react-router
  const params = useParams();

  //useEffect
  useEffect(() => {
    const getPokemon = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((data) => data.json())
        .then((json) => setPokemon(json));
    };

    getPokemon();
  }, [params.id]);

  if (!pokemon?.sprites) return <Loader />;

  //variables
  let image =
    pokemon?.sprites?.front_default || pokemon?.sprites?.front_shiny || noimage;
  let name = pokemon?.name || "Sin Nombre";

  return (
    <>
      <article className="card">
        <img className="card__img" src={image} alt={name} title={name} />
        <div className="card__information">
          <h1 className="card__title">{name}</h1>
          <Species pokemon={pokemon} />
        </div>
      </article>
      <Link to="/" className="card__button">
        Volver
      </Link>
    </>
  );
};

export default PokemonID;
