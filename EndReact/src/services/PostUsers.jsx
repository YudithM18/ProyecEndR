async function PostUsers(username, correo, pass) {

    const datos ={
        username,
        correo,
        pass
    }
    try {
        // Realiza una solicitud POST a la URL especificada
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST', // Especifica que se está utilizando el método POST
            headers: {
                'Content-Type': 'application/json' // Indica que los datos se envían en formato JSON
            },
            body: JSON.stringify(datos) // Convierte el objeto newUser a JSON para enviarlo en el cuerpo de la solicitud
        });

        // Espera la respuesta en formato JSON
        const data = await response.json();

        // Retorna los datos obtenidos de la respuesta del servidor
        return data;
    } catch (error) {
        // Captura y muestra cualquier error que ocurra durante la solicitud
        console.error(error);
    }
}
export default PostUsers ;