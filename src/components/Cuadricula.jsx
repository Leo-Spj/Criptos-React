import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Cuadricula.css';

import Cripto from './cripto/Cripto';

function Cuadricula() {

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

  if (!criptos) { 
    return(
       <h1 className='app-container'>Cargando...</h1> 
    )
  }

  return (
    <div className='app-container'>

      <h1>Lista de criptomonedas</h1>

      <div className='cripto-container'>
        {
          criptos.map( cripto =>(
            <Cripto 
              key={cripto.id}
              id={cripto.id}
              name={cripto.name} 
              priceUsd={cripto.priceUsd} 
              symbol={cripto.symbol} 
              changePercent24Hr={cripto.changePercent24Hr} 
            />     
          ))
        }
      </div>
    </div>
  )
}

export default Cuadricula
