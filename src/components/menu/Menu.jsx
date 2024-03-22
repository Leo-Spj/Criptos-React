import './Menu.css';

import { NavLink } from 'react-router-dom'; // 'imrl' snippet

function Menu() {
    return ( 
        <nav className="main-menu">
            <ul>
                    {/* 'rnl' snippet */}
                <li><NavLink to="/criptos-react/">Inicio</NavLink></li>
                <li><NavLink to="/criptos-react/criptomonedas">Criptomonedas</NavLink></li>
                <li><NavLink to="/criptos-react/nosotros">Nosotros</NavLink></li>
            </ul>
        </nav>
     );
}

export default Menu;