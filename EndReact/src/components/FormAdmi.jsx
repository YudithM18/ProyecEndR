//Llamados al react para utilizar el usestate y useEffect
import React, { useState, useEffect }  from 'react'
// Llamados al servidor para los post, el get y el delete
import PostProducto from '../services/PostProductos'
import PostServicios from '../services/PostServicios'
import PostTestimonio from '../services/PostTestimonio'
import getProductos from '../services/GetProductos'
import deleteProductos from '../services/DeleteProductos'
import updateProductos from '../services/UpDateProductos'
//llamada para invocar el estilo en la pagina
import '../styles/FormAdmi.css'
//Llamado al navigate
import { useNavigate } from "react-router-dom";

//Funcion para que muestre en pantalla y agregar funcionalidad
function FormAdmi() {

  // Hook para el navigate
  const navigate = useNavigate();

  //hook de los datos en el servidor
  const [datosProducto, setProducto] = useState([]);

  //hooks de los valores para agregar un nuevo producto y editarlo
  const [imagen, setimagen] = useState('');
  const [descripcion, setdescrip] = useState('');
  const [precioP, setprecioP] = useState('');

  const [descripEdit, setEditadoD] = useState('');
  const [pricEdit, setEditadoP] = useState(''); 

//hooks de los valores para agregar un nuevo servicio
  const [servicio, setServicio] = useState('');
  const [precioS, setprecioS] = useState('');

// hooks de los valores para agregar testimonios 
  const [persona, setPersona] = useState('');
  const [fecha, setFecha]= useState('');
  const [testimonio, setTestimonio] = useState('');


  //hook para mostrar mensaje 
  const [mensaje, setMensaje] = useState('')


// hook para evitar renderizado
  useEffect(() => {
    const fetchProducto = async () => {
      const data = await getProductos();
     
      
      setProducto(data);
 
    };
    fetchProducto();
  }, []);
  
    // Funciones para manejar la carga de datos desde los inputs
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


/// Funciones para setiar los valores que quiero guardar

const cargaFotoEdit = (event) => {
  const imgEdit = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setimagen(reader.result);
  };
  reader.readAsDataURL(imgEdit);
};

function cargaDescripEdit (e) {
  setEditadoD(e.target.value);
};

function cargaPrecEdit (e){
  setEditadoP(e.target.value);
};



// Funciones para agregar nuevos productos, servicios y testimonios

  const cargaNewProduct = async () => {
    if (imagen === '' || precioP === '' || descripcion === '') {
      setMensaje("Ingrese datos solicitados")
    } else {
      const valor = await PostProducto(imagen, precioP, descripcion)
     setProducto([...datosProducto,valor])
    }
    
  }

  const cargaNewServices = () => {

    if (servicio === '' || precioS === '') {
      setMensaje("Ingrese datos solicitados")
    } else {
       PostServicios(servicio, precioS)

    }
  }

  const cargaTestimonios = () => {
    if (persona === '' || fecha === '' || testimonio === '') {
      setMensaje("Ingrese datos solicitados")
    } else {
       PostTestimonio(persona,fecha, testimonio)
    }
   
  }
 // Función para eliminar un producto
   async function cargarDelete(id) {
    await deleteProductos(id)
    const valorEncontrar = datosProducto.filter(datosProducto => datosProducto.id !== id)
    setProducto([...valorEncontrar])
   }


   const cargaEdicion = async (id) => {
    // Busca el producto original en la lista
    const productoOriginal = datosProducto.find(producto => producto.id === id);
  
    // Si no se encuentra el producto, termina la función
    if (!productoOriginal) return;
  
    // Crea un nuevo objeto con los datos actualizados
    const nuevosDatos = {
      imagen: imagen || productoOriginal.imagen,  // Usa la imagen nueva o mantiene la original
      precioP: pricEdit || productoOriginal.precioP,  // Usa el nuevo precio o mantiene el original
      descripcion: descripEdit || productoOriginal.descripcion,  // Usa la nueva descripción o mantiene la original
    };
  
    // Llama a la función updateProductos para actualizar el producto en el servidor
    await updateProductos(id, nuevosDatos.imagen, nuevosDatos.precioP, nuevosDatos.descripcion);
    
    // Actualiza la lista de productos en el estado
    const productosActualizados = datosProducto.map(producto => 
      producto.id === id ? { ...producto, ...nuevosDatos } : producto
    );
  
    setProducto(productosActualizados);
    
    // Resetea los campos de entrada
    setimagen('');
    setdescrip('');
    setprecioP('');
    setMensaje("Producto actualizado con éxito");
  };
  
 
  // Función para cerrar sesión
   const cargaCierre = () =>{
    localStorage.clear();
    navigate("/Login")
   }

   


  return (
    <div>

      <button className='boton' onClick={cargaCierre}>Cerrar Sesión</button>

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
           <p>{mensaje}</p>
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
          <p>{mensaje}</p>
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
          <p>{mensaje}</p>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className='historial'>Historial</h1>
        <div >
        <ul className='ul'>
          {datosProducto.map((producto) => (
            <li className='li' key={producto.id}>
              <br />
              <img className='imgRecid' src={producto.imagen}  /> <input onChange={cargaFotoEdit} type="file"  /> <br />
              {producto.precioP}<input  className='editInp1' type="text" onChange={cargaPrecEdit} /> 
               <br /> {producto.descripcion} <input className='editInp' type="text" onChange={cargaDescripEdit} />
              <br />
              <button className='botonHis' onClick={e=>cargaEdicion(producto.id)}>Guardar</button>
              <button className='botonHis' onClick={e => cargarDelete(producto.id)}>Eliminar</button>
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormAdmi