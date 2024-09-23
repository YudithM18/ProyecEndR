import React, { useState, useEffect } from 'react';
import '../styles/FormHome.css'; // Importa los estilos CSS
import GetTestimonio from '../services/GetTestimonio'; // Importa la función para obtener testimonios

function FormHome() {
  // Estado para manejar los datos de los testimonios
  const [datosTestimonios, setTestiminios] = useState([]);

  // useEffect para cargar los testimonios al montar el componente
  useEffect(() => {
    const fetchTestimonio = async () => {
      const data = await GetTestimonio(); // Obtiene los datos de testimonios

      
      
      setTestiminios(data); // Actualiza el estado con los testimonios
    };
    fetchTestimonio(); // Llama a la función para obtener testimonios
  }, []);

  return (
    <div>
      <div>
        <h1 className='TituloInicio'>BIENVENIDOS</h1> {/* Título principal de bienvenida */}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='contenedorTest'>
        <br />
        <h1 className='tituloTest'>Testimonios</h1> {/* Título de la sección de testimonios */}
        <ul>
          {/* Mapea los testimonios y los muestra en una lista */}
          {datosTestimonios.map((testimonios) => (
            <li key={testimonios.id}>
              {testimonios.persona} <br /> {/* Nombre de la persona */}
              {testimonios.fecha} <br /> {/* Fecha del testimonio */}
              {testimonios.testimonio} {/* Texto del testimonio */}
            </li>
          ))}
        </ul>
        <br />
      </div>
    </div>
  );
}

export default FormHome;
