import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndumentariaView from './components/Pages/Indumentaria/IndumentariaView';
import Landing from './components/Landing';
import MatafuegosView from './components/Pages/Matafuegos/MatafuegosView';
import NavBar from './components/NavBar/NavBar';
import ProtectoresCorporalesView from './components/Pages/ProtectoresCorporales/ProtectoresCorporalesView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route exact path='/' element= {<Landing/>}/>
        <Route exact path='/Pages/Matafuegos' element= {<MatafuegosView/>}/>
        <Route exact path='/Pages/Indumentaria' element={<IndumentariaView/>}/>
        <Route exact path='/Pages/ProtectoresCorporales' element={<ProtectoresCorporalesView/>}/>


      </Routes>

    </BrowserRouter>
    
  </React.StrictMode>
);