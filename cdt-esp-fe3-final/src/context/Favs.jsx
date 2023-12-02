import React from "react";
import Card from "../Components/Card"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const storedFavs =localStorage.getItem("favorites");
  const favorites = storedFavs ? JSON.parse(storedFavs) : [];

  return (
    <>
      <h1>Dentista Favorito</h1>
      <div className="card-grid">
        {favorites.map((fav) => (
          <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
