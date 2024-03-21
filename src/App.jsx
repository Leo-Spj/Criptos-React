import React, { useState, useEffect } from 'react';

function App() {

  const [criptos, setCriptos] = useState();
  
  const API_URL = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then(response => response.json())
      .then(data => setCriptos(data.data))
      .catch(error => console.log(error))
  }, []);

  if (!criptos) { return <h1>Cargando...</h1> }

  return (
    <>
      <h1>Lista de criptomonedas</h1>

      <ol>
        {
          criptos.map( cripto =>(
            <li key={cripto.id}>{cripto.name} - Precio: {cripto.priceUsd} </li>          
          ))
        }
      </ol>
    </>
  )
}

export default App
