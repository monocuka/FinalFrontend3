import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";

const Card = ({ name, username, id }) => {
  
  const[errorMessage, setErrorMessage] = useState('');

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const storedFav =localStorage.getItem('favorites');

    const favorites = storedFav ? JSON.parse(storedFav) : [];

    const isFavorited = favorites.some(fav => fav.id === id);

    if(!isFavorited) {
      const favNew = {id, name ,username};
      const updateFav = [...favorites, favNew];

      localStorage.setItem('favorites', JSON.stringify(updateFav));

      setErrorMessage('')
    }else{
        setErrorMessage('Esta Card ya es favorita.');
    }
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/details/${id}`}>
          <h2>{name}</h2>
          <h3>{username}</h3>
          <p>ID: {id}</p>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>

        {errorMessage && <p className="errorM">{errorMessage}</p>}
    </div>
  );
};

export default Card;
