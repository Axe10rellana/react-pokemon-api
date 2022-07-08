//importaciones
import React from "react";

//componentes
import Left from "./Left";
import Right from "./Right";

//estilos css
import "../styles/Buttons.css";

const Buttons = ({ page, setPage, next }) => {
  //funciones
  const handlePrevious = (e) => {
    e.preventDefault();
    if (page === 0) return;
    setPage(page - 20);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (next === null) return;
    setPage(page + 20);
  };

  return (
    <div className="buttons__container">
      <button className="buttons__btn" onClick={handlePrevious}>
        <Left />
      </button>
      <button className="buttons__btn" onClick={handleNext}>
        <Right />
      </button>
    </div>
  );
};

export default Buttons;
