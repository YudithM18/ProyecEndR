import React from 'react'
import PostProducto from '../services/PostProductos'
import PostServicios from '../services/PostServicios'

function FormAdmi() {
  return (
    <div>
        <div>
            <h1>Agregar Nuevo Servicio/Producto</h1>
            <input type="file" value={imagen} onChange={cargaImagen} />
            <button onClick={carga}>Agregar</button>
        </div>
    </div>
  )
}

export default FormAdmi