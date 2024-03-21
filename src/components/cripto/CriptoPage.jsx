import './CriptoPage.css';
import usePetition from '../hooks/usePetition';

import { useParams } from 'react-router-dom';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns';



function CriptoPage() {

    const param = useParams()

    const cryptoData = usePetition(`assets/${param.id}`);
    const history = usePetition(`assets/${param.id}/history?interval=d1`);



    if (!cryptoData || !history) { 
        return(
           <h1 className='app-container'>Cargando...</h1> 
        )
    }


    const width = Math.max(window.innerWidth * 0.9, 300);

    return (
    <>

        <div className='cripto-page-container'>

            {
                (cryptoData) && (
                    <div className='info'>

                        <div className='main-info'>
                            <span>Ranking: {cryptoData.rank}</span>
                            <h1>{cryptoData.name}</h1>
                            <span className='symbol'>{cryptoData.symbol}</span>
                        </div>

                        <div className='details'>
                            <ul>
                                {cryptoData && Object.entries(cryptoData).map(([key, value]) => {
                                    if (key !== 'id' && key !== 'rank' && key !== 'symbol' && key !== 'name') {
                                        return (
                                            <li key={key}>
                                                <span className='label'>{key}: </span>
                                                <span>{value}</span>
                                            </li>
                                        );
                                    }
                                    <li key={key}></li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }
        
            

            {
                (history) && (
                    <div className=''>
                        <h2>{`Historia`}</h2>
                        <BarChart width={width} height={200} data={history}>
                            <CartesianGrid strokeDasharray='5 5' />
                            <XAxis 
                                dataKey='date' 
                                tickFormatter={(str) => {
                                const date = new Date(str);
                                return format(date, 'dd/MM');
                                }}
                            />
                            <YAxis />
                            <Tooltip/>
                            <Legend />
                            <Bar dataKey='priceUsd' name='Precio (USD)' fill='#8884d8'/>
                        </BarChart>
                    </div>
                )
                
            }

        </div>
    </>
    );
}

export default CriptoPage;