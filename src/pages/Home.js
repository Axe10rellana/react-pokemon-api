//importaciones
import React, { useState, useEffect } from "react";

//componentes
import Pokemons from "../components/Pokemons";
import Buttons from "../components/Buttons";

//estilos css
import "../styles/Home.css";

const Home = () => {
  //variables de estado
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const limit = 20;

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=${limit}`
        );
        const data = await response.json();

        if (!response.ok)
          throw new Error("Error: No se pudo obtener los datos");

        setPokemons(data);
        setLoading(false);
        setError("");
      } catch (err) {
        let errorMesage = `${err.status}: ${err.statusText || err.message}`;
        setError(errorMesage);
        console.error(errorMesage);
      }
    };

    fetchData();
  }, [page]);

  //variables
  const next = pokemons?.next;

  return (
    <>
      <input
        type="search"
        placeholder="Buscar un personaje"
        className="home__input"
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
        autoComplete="off"
        required
      />
      <Buttons page={page} setPage={setPage} next={next} />
      <Pokemons
        loading={loading}
        pokemons={pokemons}
        error={error}
        search={search}
      />
    </>
  );
};

export default Home;
