import React, { useState, useEffect } from 'react';
import axios from 'axios';

function usePetition(endpoint) {

    const API_URL = import.meta.env.VITE_API_URL;

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}${endpoint}`)
            .then(data => {
                setData(data.data.data);
            })
            .catch(error => console.error(error))
    }, []);

    return data
}

export default usePetition;