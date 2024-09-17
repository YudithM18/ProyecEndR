import React , { useState, useEffect } from 'react'
import '../styles/FormHome.css'
import GetTestimonio from '../services/GetTestimonio'

function FormHome() {

  const [datosTestimonios, setTestiminios] = useState([]);


  useEffect(() => {
    const fetchTestimonio = async () => {
      const data = await GetTestimonio();
     
      
      setTestiminios(data);
 
    };
    fetchTestimonio();
  }, []);




  return (
    <div>
        <div>
            <h1 className='TituloInicio'>BIENVENIDOS</h1>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className='contenedorTest'>
        <br />
  
        <h1 className='tituloTest'>Testimonios</h1>
        <ul>
          {datosTestimonios.map((testimonios) => (
            <li key={testimonios.id}>{testimonios.persona} <br /> {testimonios.fecha} <br /> {testimonios.testimonio}</li>
          ))}
        </ul>
        <br />
        
        </div>
    </div>
  )
}

export default FormHome