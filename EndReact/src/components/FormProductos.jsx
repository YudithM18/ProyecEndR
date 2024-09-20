import React, { useState, useEffect } from 'react';
import getServicios from '../services/GetServicios'; // Importa la función para obtener servicios
import getProductos from '../services/GetProductos'; // Importa la función para obtener productos
import '../styles/FormProductos.css'; // Importa los estilos CSS

function FormProductos() {
  // Estados para manejar los datos de productos y servicios
  const [datosProductos, setProductos] = useState([]);
  const [datoServicios, setServicios] = useState([]);

  // useEffect para cargar los productos al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos(); // Obtiene los datos de productos
      setProductos(data); // Actualiza el estado con los productos
    };
    fetchProductos(); // Llama a la función para obtener productos
  }, []);

  // useEffect para cargar los servicios al montar el componente
  useEffect(() => {
    const fetchServicios = async () => {
      const dato = await getServicios(); // Obtiene los datos de servicios
      setServicios(dato); // Actualiza el estado con los servicios
    };
    fetchServicios(); // Llama a la función para obtener servicios
  }, []);

  return (
    <div>  
      <h1 className='tituloProduct'>Productos Disponibles</h1>
      <div className='TablaProdc'>
        <ul>
          {/* Mapea los productos y los muestra en una lista */}
          {datosProductos.map((productos) => (
            <li key={productos.id}>
              <br />
              <img className='imagen' src={productos.imagen} alt={productos.descripcion} /> {/* Muestra la imagen del producto */}
              <br />
              {productos.precioP} <br /> {productos.descripcion} {/* Muestra el precio y la descripción */}
            </li>
          ))}
        </ul>
      </div>

      <h1 className='tituloServs'>Servicios Disponibles</h1>
      <div>
        <ul>
          {/* Mapea los servicios y los muestra en una lista */}
          {datoServicios.map((servicio) => (
            <li className='texto' key={servicio.id}>
              {servicio.servicio} <br /> {servicio.precioS} {/* Muestra el nombre del servicio y su precio */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormProductos;
