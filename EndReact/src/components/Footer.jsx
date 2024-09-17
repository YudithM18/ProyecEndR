import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div>
        <div className='ContenedorF'>
            <div className='distribuidor'>
            <h1 className='TituloF'> NUESTROS <br /> HORARIOS <br /> DE ATENCION</h1>
           <div className='Horario'>
           <p>Lunes: 8:00 a 6:00pm</p>
            <p>Martes: 8:00 a 6:00pm</p>
            <p>Miércoles: 8:00 a 6:00pm</p>
            <p>Jueves: 8:00 a 6:00pm</p>
            <p>Viernes: 8:00 a 6:00pm</p>
            <p>Sábado: 8:00 a 2:00pm</p>
            <p>Domingo: Cerrado</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer