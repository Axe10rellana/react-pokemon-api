//importaciones
import React from "react";

//react-router
import { Routes, Route } from "react-router-dom";

//componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

//paginas
import Home from "./pages/Home";
import PokemonID from "./pages/PokemonID";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonID />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
