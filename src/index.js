import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndumentariaView from './components/Indumentaria/IndumentariaView';
import Landing from './components/Landing';
import MatafuegosView from './components/Matafuegos/MatafuegosView';
import NavBar from './components/NavBar/NavBar';
import ProtectoresCorporalesView from './components/ProtectoresCorporales/ProtectoresCorporalesView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route exact path='/' element= {<Landing/>}/>
        <Route exact path='/Matafuegos' element= {<MatafuegosView/>}/>
        <Route exact path='/Indumentaria' element={<IndumentariaView/>}/>
        <Route exact path='/ProtectoresCorporales' element={<ProtectoresCorporalesView/>}/>


      </Routes>

    </BrowserRouter>
    
  </React.StrictMode>
);