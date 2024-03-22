import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'

import App from './App.jsx'
import Home from './Home.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Pagina404 from './components/404.jsx'

import { HashRouter as Router } from 'react-router-dom' // 'imbr' snippet
import { Routes, Route } from 'react-router-dom' // 'imrr' snippet
import CriptoPage from './components/cripto/CriptoPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

 <Router>

    <Routes>

      <Route path="*" element={<Pagina404 />} />

      <Route path="/" element={<App />}>
          <Route index element={<Home />} />
      </Route>  

      <Route path="/criptomonedas" element={<App />}>
          <Route index element={<Cuadricula />} />
          <Route path=":id" element={<CriptoPage/>} />
      </Route>  

    </Routes>

 </Router>

)
