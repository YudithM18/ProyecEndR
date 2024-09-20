import React, { useState, useEffect } from 'react';
import getUsers from '../services/GetUsers'; // Importa la función para obtener usuarios
import '../styles/FormSesion.css'; // Importa los estilos CSS
import { useNavigate } from "react-router-dom"; // Importa el hook para navegación

function FormSesion() {
  // Estados para manejar los datos del formulario y los usuarios
  const [users, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [datos, setUsers] = useState([]);
  const [saludo, setSaludo] = useState('');
  const navigate = useNavigate(); // Inicializa el hook de navegación

  // useEffect para cargar los usuarios desde el servidor al montar el componente
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers(); // Obtiene los datos de los usuarios
      setUsers(data); // Actualiza el estado con los usuarios
    };
    fetchUsers(); // Llama a la función para obtener usuarios
  }, []);

  // Función para manejar el cambio en el campo de nombre de usuario
  function cargausers(event) {
    setUsername(event.target.value);
  }

  // Función para manejar el cambio en el campo de contraseña
  const cargaContra = (event) => {
    setPassword(event.target.value);
  };

  // Función para navegar de regreso a la página principal
  const cargaRegreso = () => {
    navigate("/"); 
  };

  // Función para manejar el inicio de sesión
  const cargar = () => {
    // Busca un usuario que coincida con las credenciales ingresadas
    let encontrado = datos.find(dato => dato.username === users && dato.pass === password);

    if (encontrado) {
      localStorage.setItem('Autenticado', 'true'); // Guarda estado de autenticación
      navigate("/Administracion"); // Navega a la página de administración
    } else {
      setSaludo("Ha ingresado datos incorrectos o inexistentes"); // Mensaje de error
    }
  };

  return (
    <div>
      <button className='botonOmitir' onClick={cargaRegreso}>Omitir</button>
      <br />
      <br />
      <br />
      <div className='contenedorS'>
        <h1 className='tituloS'>Inicio Sesión</h1>
        <p className='ingreso'>Usuario</p>
        <input className='inputSesion' type="text" value={users} onChange={cargausers} />
        <p className='ingreso'>Contraseña</p>
        <input className='inputSesion' type="text" value={password} onChange={cargaContra} />
        <br />
        <br />
        <button className='botonS' onClick={cargar}>Ingresar</button>
        <p>{saludo}</p> {/* Muestra el mensaje de saludo o error */}
      </div>
    </div>
  );
}

export default FormSesion;
