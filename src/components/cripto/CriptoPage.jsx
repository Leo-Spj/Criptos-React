import './CriptoPage.css';

import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



function CriptoPage() {

    const param = useParams()

    const API_URL = import.meta.env.VITE_API_URL;

    const [cryptoData, setCryptoData] = useState(null);
    const [history, setHistory] = useState([]);
    
    useEffect(() => {
        axios.get(`${API_URL}assets/${param.id}`)
            .then(data => {
            setCryptoData(data.data.data);
            })
            .catch(error => console.error(error))

        axios.get(`${API_URL}assets/${param.id}/history?interval=d1`)
            .then(data => {
            console.log(data);
            setHistory(data.data.data);
            })
            .catch(error => console.error(error))
    }, []);



    if (!cryptoData || !history) { 
        return(
           <h1 className='app-container'>Cargando...</h1> 
        )
    }


    return (
        <div className='app-container'>
            <h1>{cryptoData && cryptoData.name}</h1>
            <div className='info'>
                <ul>
                    {cryptoData && Object.entries(cryptoData).map(([key, value]) => (
                        <li key={key}><span className='label'>{key}</span>: {value}</li>
                    ))}
                </ul>
            </div>

            <div className='history'>
                <h2>Historial</h2>
                <BarChart width={Math.max(Math.min(window.innerWidth, 1280), 250)} height={200} data={history}>
                    <CartesianGrid strokeDasharray='5 5' />
                    <XAxis dataKey='date' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='priceUsd' fill='#8884d8' />
                </BarChart>
            </div>
        </div>
    );
}

export default CriptoPage;