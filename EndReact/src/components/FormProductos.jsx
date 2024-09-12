import React from 'react'
import Prod1 from '../img/producto1.jpg'
import Prod2 from '../img/producto2.jpg'
import Prod3 from '../img/producto3.jpg'
import Prod4 from '../img/producto4.jpg'
import Prod5 from '../img/producto5.jpg'
import '../styles/FormProductos.css'

function FormProductos() {
  return (
    <div>  
        <h1 className='subtitul'> ESTOS SON ALGUNOS DE LOS PRODUCTOS QUE UTILIZAMOS PARA DESEMPEÑAR DE LA MEJOR MANERA 
        Y DE FORMA RESPONSABLE CON EL MEDIO AMBIENTE</h1>
    <br />
    <br />
         
        <div className='TablaProdc'>
            <img src={Prod1} className='imagen' />
            <img src={Prod2} className='imagen' />
            <img src={Prod3} className='imagen' />
            <img src={Prod4} className='imagen' />
            <img src={Prod5} className='imagen' />
        </div>
    </div>
  )
}

export default FormProductos