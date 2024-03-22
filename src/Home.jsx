import './Home.css';
import { Link } from 'react-router-dom'

function Home() {
    return ( 
        <div className="home-container">
        <h1 className="title">Bienvenido a CriptoApp</h1>
        <p className="subtitle">Cónoce las 100 criptos más usadas</p>
        <Link to="/criptos-react/criptomonedas" className="link">Ver criptomonedas</Link>
        </div>
     );
}

export default Home;