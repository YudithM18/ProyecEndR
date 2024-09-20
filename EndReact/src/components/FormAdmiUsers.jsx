import React, { useState, useEffect } from 'react';
import '../styles/FormAdmiUsers.css';
// Importación de funciones para obtener, agregar y eliminar usuarios desde el servidor
import getUsers from '../services/GetUsers';
import PostUsers from '../services/PostUsers';
import DeleteUsers from '../services/DeleteUsers';
// Importación del hook useNavigate para la navegación
import { useNavigate } from "react-router-dom";

function FormAdmiUsers() {
    // Estado para almacenar los valores de entrada del formulario
    const [username, setUsername] = useState('');
    const [correo, setGmail] = useState('');
    const [pass, setPass] = useState('');
    const [saludo, setSaludo] = useState('');

    // Estado para almacenar la lista de usuarios
    const [users, setUsers] = useState([]);

    // Hook para la navegación
    const navigate = useNavigate();

    // useEffect para cargar los usuarios desde el servidor al montar el componente
    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data); // Actualiza el estado con la lista de usuarios obtenida
        };
        fetchUsers(); // Llama a la función para obtener los usuarios
    }, []);

    // Función para manejar el cambio en el campo de nombre de usuario
    function cargaUsuario(event) {
        setUsername(event.target.value);
    }

    // Función para manejar el cambio en el campo de correo
    function cargaCorreo(event) {
        setGmail(event.target.value);
    }

    // Función para manejar el cambio en el campo de contraseña
    function cargaPass(event) {
        setPass(event.target.value);
    }

    // Función para agregar un nuevo usuario
    const cargarNewUser = async () => {
        // Verifica que todos los campos estén llenos
        if (username === '' || correo === '' || pass === '') {
            setSaludo("Ingresar Datos");
        } else {
            // Filtra los usuarios para ver si ya existe el correo ingresado
            const registrosExistentes = users.filter(user => user.correo === correo);
            if (registrosExistentes.length < 1) { // Si no existe el correo
                const valorUsers = await PostUsers(username, correo, pass);
                setUsers([...users, valorUsers]); // Agrega el nuevo usuario a la lista
                setSaludo("Se ha registrado correctamente la cuenta");
            } else {
                setSaludo("Esta cuenta ya está registrada"); // Mensaje si el correo ya existe
            }
        }
    };

    // Función para eliminar un usuario
    async function cargaDelete(id) {
        await DeleteUsers(id); // Llama a la función para eliminar el usuario
        const valorEncontrado = users.filter(user => user.id !== id);
        setUsers([...valorEncontrado]); // Actualiza la lista de usuarios eliminando el usuario eliminado
    }

    // Función para cerrar sesión y limpiar el almacenamiento local
    const cargaCierre = () => {
        localStorage.clear();
        navigate("/Login"); // Redirige a la página de inicio de sesión
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
                <input className='inputUser' type="text" value={username} onChange={cargaUsuario} />
                <p className='ingresoUser'>Ingrese Correo Electrónico</p>
                <input className='inputUser' type="text" value={correo} onChange={cargaCorreo} />
                <p className='ingresoUser'>Ingrese Contraseña</p>
                <input className='inputUser' type="text" value={pass} onChange={cargaPass} />
                <br />
                <br />
                <button className='botonUser' onClick={cargarNewUser}>Registrar</button>
                <p>{saludo}</p> {/* Muestra el mensaje de saludo */}
            </div>
            <br />
            <br />
            <br />
            <h1 className='historiaUser'>Lista De Usuarios Activos</h1>
            <div>
                <ul className='estructura'>
                    {users.map((usuario) => (
                        <li className='visualizacion' key={usuario.id}>
                            <p className='usuari'>Usuario: {usuario.username}</p>
                            <p className='correito'>Correo: {usuario.correo}</p>
                            <p className='contraseñita'>Contraseña: {usuario.pass}</p>
                            <button className='botonBorrarUsuario' onClick={e => cargaDelete(usuario.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FormAdmiUsers;
