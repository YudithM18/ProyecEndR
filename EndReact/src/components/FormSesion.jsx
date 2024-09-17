
import React, { useState, useEffect} from 'react'
import getUsers from '../services/GetUsers'
import '../styles/FormSesion.css'
import { useNavigate } from "react-router-dom";



function FormSesion() {

  const [users, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [datos, setUsers] = useState([]);
  const [saludo, setSaludo] = useState('');
  const navigate = useNavigate();



    useEffect(() => {
      const fetchUsers = async () => {
        const data = await getUsers();
       
        
        setUsers(data);
   
      };
      fetchUsers();
    }, []);


   


  function  cargausers(event) {
    setUsername(event.target.value);
  }

  const cargaContra = (event) => {
    setPassword(event.target.value);
  };

  const cargar = () => {

  
  let encontrado = datos.find(dato => dato.username === users &&  dato.pass === password)
 

  if (encontrado) {
    localStorage.setItem('Autenticado', 'true')
    navigate("/Administracion"); 
  }else{
     setSaludo("Ha ingresado datos incorrectos o inexistentes")
  }
      
    
  };

  return (
    <div>
      <br />
      <br />
      <br />

        <div className='contenedorS'>
            <h1 className='tituloS'>Inicio Sesión</h1>

            <p className='ingreso'>Usuario</p>
            <input type="text" value={users} onChange={cargausers} />

            <p className='ingreso'>Contraseña</p>
            <input type="text" value={password} onChange={cargaContra} />

            <br />
            <br />

            <button className='botonS' onClick={cargar}>Ingresar</button>
            <p>{saludo}</p>
            
        </div>
    </div>
  )
}

export default FormSesion