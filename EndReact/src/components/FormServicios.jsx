import React from 'react';
import '../styles/FormServicios.css'; // Importa los estilos CSS
import Canoa0 from '../img/Canoas0.jpg'; // Imágenes de mantenimiento de canoas
import Canoa1 from '../img/Canoas1.jpg';
import Canoa2 from '../img/Canoas2.jpg';

import piscina1 from '../img/picina1.jpg'; // Imágenes de mantenimiento de piscinas
import piscina from '../img/piscina2.jpg';

import jardin1 from '../img/jardin1.jpg'; // Imágenes de mantenimiento de jardines
import jardin2 from '../img/jardin2.jpg';
import jardin3 from '../img/jardin3.jpg';
import jardin4 from '../img/jardin4.jpg';
import jardin5 from '../img/jardin5.jpg';
import jardin6 from '../img/jardin6.jpg';
import jardin7 from '../img/jardin7.jpg';
import jardin8 from '../img/jardin8.jpg';

function FormServicios() {
  return (
    <div>
      <br />
      <h1 className='servicios'>Mantenimiento de Canoas</h1>
      <br />
      <div className='contenedorCanoas'>
        {/* Muestra imágenes del mantenimiento de canoas */}
        <img src={Canoa1} alt="despues" className='canoa' />
        <img src={Canoa2} alt="despues" className='canoa' />
        <img src={Canoa0} alt="antes" className='canoa1' />
      </div>

      <br />
      <h1 className='servicios'>Mantenimiento de Piscinas</h1>
      <br />
      <div className='contenedorPiscina'>
        {/* Muestra imágenes del mantenimiento de piscinas */}
        <img src={piscina} className='piscina' />
        <img src={piscina1} className='piscina' />
      </div>

      <br />
      <h1 className='servicios'>Mantenimiento de Jardines</h1>
      <br />
      <div className='contenedorJardin'>
        {/* Muestra imágenes del mantenimiento de jardines */}
        <img src={jardin1} className='jardin' />
        <img src={jardin2} className='jardin' />
        <img src={jardin3} className='jardin' />
        <img src={jardin4} className='jardin' />
        <img src={jardin5} className='jardin' />
        <img src={jardin6} className='jardin' />
        <img src={jardin7} className='jardin' />
        <img src={jardin8} className='jardin' />
      </div>

      {/* Mensaje para los clientes sobre información y cotizaciones */}
      <p>📠NOSOTROS TRABAJAMOS SEGUN LAS NECESIDADES DEL CLIENTE, SI REQUIERE INFORMACION O UNA COTIZACION DIRIGASE A LA PAGINA DE CONTACTOS</p>
    </div>
  );
}

export default FormServicios;
