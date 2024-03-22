import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { format } from 'date-fns';

function CriptoHistorial({history}) {

    

    return (
        (history) && (
            <div className=''>
                <h2>Gráfica histórica</h2>
                <div className='grafica'>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={history}>
                        <CartesianGrid strokeDasharray='5 5' />
                        <XAxis 
                            dataKey='date' 
                            tickFormatter={(str) => {
                            const date = new Date(str);
                            return format(date, 'dd/MM');
                            }}
                        />
                        <YAxis />
                        
                        <Legend />
                        <Bar dataKey='priceUsd' name='Precio (USD)' fill='#8884d8'/>
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        )
     );
}

export default CriptoHistorial;