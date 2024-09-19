
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../Routes/ProtectedRoute'; 
import PaginaPrincipal from '../pages/PaginaPrincipal'
import Contacto from '../pages/Contacto'
import Administracion from '../pages/Administracion'
import AsiSomos from '../pages/AsiSomos'
import Login from '../pages/Login'
import Productos from '../pages/Productos'
import Servicios from '../pages/Servicios'
import Ubicacion from '../pages/Ubicacion'
import AdministracionUsers from '../pages/AdministracionUsers';

const Routing = () => {
    return (
      <Router>
        <Routes>
            <Route path='/' element={<PaginaPrincipal />} />
            <Route path='/Productos' element={<Productos />} />
            <Route path='/Servicios' element={<Servicios />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/AsiSomos' element={<AsiSomos />} />
            <Route path='/Ubicacion' element={<Ubicacion />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Administracion' element={<ProtectedRoute><Administracion /></ProtectedRoute>} />
            <Route path='/AdministracionUsers' element={<ProtectedRoute><AdministracionUsers /></ProtectedRoute>} />
         </Routes>
      </Router>
    )
}

export default Routing;