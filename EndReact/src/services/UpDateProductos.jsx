async function updateProductos(id, imagen, precioP, descripcion) {
    try {

        const datosEditados ={
            imagen, 
            precioP,
            descripcion
        }
    
        const response = await fetch("http://localhost:3001/producto/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosEditados)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update product:', error);
        throw error;
    }
}

export default updateProductos