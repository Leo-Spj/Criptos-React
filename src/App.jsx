
import Menu from "./components/menu/Menu";

import { Outlet } from 'react-router-dom' // 'imro' snippet

function App() {
    return ( 
        <>
            <Menu/>
            <Outlet /> {/* Renderiza el componente que corresponde a la ruta actual (hijas) */}
        </>
     );
}

export default App;