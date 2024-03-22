import './Menu.css';

import { NavLink } from 'react-router-dom'; // 'imrl' snippet

function Menu() {
    return ( 
        <nav className="main-menu">
            <ul>
                    {/* 'rnl' snippet */}
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Criptomonedas</NavLink></li>
                <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            </ul>
        </nav>
     );
}

export default Menu;