import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const { id } = useParams();
    const [dentist, setDentist] = useState(null);

    useEffect(() => {
      const fetchDentistDetail = async () => {
      try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);  
      const Data = await response.json();
      setDentist(Data);
      
      } catch (error) {
        console.error("error fetching dentist details", error);
      }
    };
    fetchDentistDetail();
  }, [id])

  return (
    <>
      <h1>Información del dentintas </h1>

      {dentist ? (
        <div>
          <h2>{dentist.name}</h2>
          <h3>Correo: {dentist.email}</h3>
          <p>Telefono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </div>
      ) : (
        <p>Cargando información del dentista...</p>
      )}
      </>
  );
};

export default Detail