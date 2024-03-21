import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [criptos, setCriptos] = useState();
  
  const API_URL = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then(data => 
        //console.log(data)
        setCriptos(data.data.data)
        )
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
