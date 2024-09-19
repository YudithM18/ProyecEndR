import React, { useState, useEffect }  from 'react'
import '../styles/FormAdmiUsers.css'
//Llamados al servidor para el get, el post y delete de usuarios
import getUsers from '../services/GetUsers';
import PostUsers from '../services/PostUsers';
import DeleteUsers from '../services/DeleteUsers';
//Llamado al navigate
import { useNavigate } from "react-router-dom";

function FormAdmiUsers() {

    
    const [username, setUsername] = useState('');
    const [correo, setGmail] = useState('');
    const [pass, setPass] = useState('');
    const [saludo, setSaludo] = useState('');

    const [users, setUsers] = useState([]);

    // Hook para el navigate
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUsers = async () => {
        const data = await getUsers();
         
          
          setUsers(data);
     
        };
        fetchUsers();
      }, []);

      

      

  function cargaUsuario(event) {
    setUsername(event.target.value);
  }

  function cargaCorreo(event) {
    setGmail(event.target.value);
  }

  function cargaPass(event) {
    setPass(event.target.value)
  }

  const cargarNewUser = async () => {

    if (username === '' || correo === '' || pass === '' ){

      setSaludo ("Ingresar Datos")

    }else{
        const registrosExistentes = users.filter(users => users.correo === correo)
    
      if (registrosExistentes < 1) {

        const valorUsers = await PostUsers(username, correo, pass )
        setUsers([...users,valorUsers]) 
        setSaludo("Se ha registrado correctamente la cuenta")
      }else{
      
        setSaludo("ESta cuenta ya está registrada")
      
      }
    }
  };

  async function cargaDelete(id) {
    await DeleteUsers(id)
    const valorEncontrado = users.filter(users => users.id !== id)
    setUsers([...valorEncontrado])
   }



  const cargaCierre = () =>{
    localStorage.clear();
    navigate("/Login")
   }

  return (
    <div>
         <button className='boton' onClick={cargaCierre}> Cerrar Sesión </button>

       
        <br />
        <br />
        <br />

        <div className='contenedorAU'>

            <h1 className='tituloUsers'>Agregar Nuevos Usuarios Autorizados</h1>

            <p className='ingresoUser'>Ingrese Nuevo Usuario</p>
             <input className='inputUser' type="text"  value={username} onChange={cargaUsuario}/>

             <p className='ingresoUser'>Ingrese Correo Electronico</p>
             <input className='inputUser' type="text" value={correo} onChange={cargaCorreo} />

             <p className='ingresoUser'>Ingrese Contraseña</p>
             <input className='inputUser' type="text" value={pass} onChange={cargaPass} />

             <br />
             <br />

             <button className='botonUser' onClick={cargarNewUser}>Registrar</button>
              <p>{saludo}</p>
        </div>




        <h1 className='historiaUser'>Lista De Usuarios Activos</h1>

        <div>
        <ul>
          {users.map((usuario) => (
            <li key={usuario.id}>
              <p>Usuario: {usuario.username}</p>
              <p>Correo: {usuario.correo}</p> 
              <p>Contraseña: {usuario.pass}</p>
              <button onClick={e => cargaDelete(usuario.id)}>Eliminar</button>
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default FormAdmiUsers