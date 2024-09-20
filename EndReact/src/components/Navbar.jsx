import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div>
        <div className='navegar'>
            {/* Enlaces de navegación a diferentes rutas de la aplicación */}
            <Link to="/" className='link'>Menú <br /> Home</Link>
            <Link to="/Productos" className='link'>Productos <br /> Products</Link>
            <Link to="/Servicios" className='link'>Servicios <br /> Services</Link>
            <Link to="/Contacto" className='link'>Contacto <br /> Contacts</Link>
            <Link to="/Ubicacion" className='link'>Ubicación <br /> Location</Link>
            <Link to="/AsiSomos" className='link'>Así Somos <br /> About Us</Link>
            {/* Enlaces protegidos que pueden requerir autenticación */}
            <Link to="/Administracion" className='linkProtegido'>Gerencia</Link>
            <Link to="/AdministracionUsers" className='linkProtegido'>Usuarios</Link>
        </div>
    </div>
  );
}

export default Navbar;
