import React, { useState, useEffect }  from 'react'
import PostProducto from '../services/PostProductos'
import PostServicios from '../services/PostServicios'
import PostTestimonio from '../services/PostTestimonio'
import getProductos from '../services/GetProductos'
import '../styles/FormAdmi.css'

function FormAdmi() {

  const [datosProducto, setProducto] = useState([]);

  const [imagen, setimagen] = useState('');
  const [descripcion, setdescrip] = useState('');
  const [precioP, setprecioP] = useState('');


  const [servicio, setServicio] = useState('');
  const [precioS, setprecioS] = useState('');


  const [persona, setPersona] = useState('');
  const [fecha, setFecha]= useState('');
  const [testimonio, setTestimonio] = useState('');



  useEffect(() => {
    const fetchProducto = async () => {
      const data = await getProductos();
     
      
      setProducto(data);
 
    };
    fetchProducto();
  }, []);
  
  
  const cargaimag = (event) => {
    const img = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
       setimagen(reader.result);
    };
    reader.readAsDataURL(img);
  };

  const cargaDescrip = (event) => {
    setdescrip(event.target.value);
  };

  const cargaPrecioP = (event) => {
    setprecioP(event.target.value);
  };




  const cargaServicio = (event) => {
    setServicio(event.target.value);
  };

  const cargaPrecioS = (event) => {
    setprecioS(event.target.value);
  };





  const cargaPersona = (event) => {
    setPersona(event.target.value);
  };

  const cargafecha = (event) => {
    setFecha(event.target.value);
  };

  const cargaTestimonio = (event) => {
    setTestimonio(event.target.value);
  };



  const cargaNewProduct = () => {
    PostProducto(imagen, precioP, descripcion)
  }

  const cargaNewServices = () => {
    PostServicios(servicio, precioS)
  }

  const cargaTestimonios = () => {
    PostTestimonio(persona,fecha, testimonio)
  }






  return (
    <div>

      <br />
      <br />
      <br />

        <div className='contenedorAP'>
          <h1 className='titulo'>Agregar Nuevo Producto</h1>
          <p className='identificar'>Ingrese Imagen</p>
          <input className='input' type="file" onChange={cargaimag}/>
          <p className='identificar'>Ingrese Descripcion (Opcional)</p>
          <input className='input' type="text" onChange={cargaDescrip} value={descripcion}/>
          <p className='identificar'>Ingrese Precio</p>
          <input className='input' type="text" onChange={cargaPrecioP} value={precioP} />
          <button className='boton' onClick={cargaNewProduct}>Agregar</button>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className='contenedorAS'>
          <h1 className='titulo'>Agregar Servicios</h1>
          <p className='identificar'>Ingrese Servicio</p>
          <input className='input' type="text" onChange={cargaServicio} value={servicio}/>
          <p className='identificar'>Ingrese Precio</p>
          <input className='input' type="text" onChange={cargaPrecioS} value={precioS} />
          <button className='boton' onClick={cargaNewServices}>Agregar</button>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className='contenedorAT'>
          <h1 className='titulo'>Agregar Testimonio</h1>
          <p className='identificar'>Nombre de la persona</p>
          <input className='input' type="text" onChange={cargaPersona} value={persona} />
          <p className='identificar'>Fecha del testimonio</p>
          <input className='input' type="datetime-local" onChange={cargafecha} value={fecha}/>
          <p className='identificar'>Testimonio o Reseña Proporcionada</p>
          <input className='input' type="text" onChange={cargaTestimonio} value={testimonio} />
          <button className='boton' onClick={cargaTestimonios}>Agregar</button>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className='historial'>Historial</h1>
        <div>
        <ul>
          {datosProducto.map((producto) => (
            <li key={producto.id}>
              <br />
              <img className='imgRecid' src={producto.imagen}  /> <br />
              {producto.precioP} <br /> {producto.descripcion}</li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormAdmi