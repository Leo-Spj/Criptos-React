import './404.css';
import { NavLink } from 'react-router-dom'

function Pagina404() {
    return ( 
        <div className='no-404'>
            <h1>Página no encontrada</h1>
            <span>La página solicitada, no existe</span>
            <span>
                <NavLink to="/criptos-react/">Volver</NavLink>
            </span>
        </div>
     );
}

export default Pagina404;