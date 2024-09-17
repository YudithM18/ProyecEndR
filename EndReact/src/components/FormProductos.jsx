import React, { useState, useEffect } from 'react'
import getServicios from '../services/GetServicios'
import getProductos from '../services/GetProductos'
import '../styles/FormProductos.css'

function FormProductos() {

  const [datosProductos, setProductos] = useState([]);
  const [datoServicios, setServicios] = useState([]);
  


  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos();
     
      
      setProductos(data);
 
    };
    fetchProductos();
  }, []);



  useEffect(() => {
    const fetchServicios= async () => {
      const dato = await getServicios();
     
      
      setServicios(dato);
 
    };
    fetchServicios();
  }, []);


  

  
  return (
    <div>  

         <h1 className='tituloProduct'>Productos Disponibles</h1>

        <div className='TablaProdc'>
        <ul>
          {datosProductos.map((productos) => (
            <li key={productos.id}>
              <br />
              <img className='imagen' src={productos.imagen}  /> <br />
              {productos.precioP} <br /> {productos.descripcion}</li>
          ))}
        </ul>
        </div>

          <h1 className='tituloServs'>Servicios Disponibles</h1>

        <div>
        <ul>
          {datoServicios.map((servicio) => (
            <li className='texto' key={servicio.id}>{servicio.servicio} <br /> {servicio.precioS}</li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormProductos