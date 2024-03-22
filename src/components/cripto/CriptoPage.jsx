import './CriptoPage.css';

import usePetition from '../hooks/usePetition';

import CriptoInfo from './info/CriptoInfo';
import CriptoHistorial from './info/CriptoHistorial';

import { useParams } from 'react-router-dom';



function CriptoPage() {

    const param = useParams()

    const cryptoData = usePetition(`assets/${param.id}`);
    const history = usePetition(`assets/${param.id}/history?interval=d1`);

    if(!cryptoData || !history) {
        return (
            <div className='cripto-page-container'>
                <h1>Cargando...</h1>
            </div>
        );
    }

    return (
        <>
        <div className='cripto-page-container'>
            {(cryptoData) && (<CriptoInfo cryptoData={cryptoData}/>)}
        </div>
        <div className='grafica-container'>
            {(history) && <CriptoHistorial history={history} />}
        </div>
        </>
    );
}

export default CriptoPage;