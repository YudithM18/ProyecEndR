import React from 'react'
import '../styles/FormCondiciones.css'

function FormCondiciones() {
  return (
    <div>
        <br />
        <br />
        <br />
        
        <div className='ContenedorTerminos'>
            <h1 className='tituloPag'>Términos y Condiciones</h1>
             <p className='textoTC'><strong>Última actualización: 23 septiembre, 2024</strong></p>

             <p className='textoTC'>Estos Términos y Condiciones (en adelante, "Términos") rigen el uso de los <br />
               servicios ofrecidos por <strong>Nosara House Managment</strong> (en adelante, <br />
               "la Empresa"), especializada en el mantenimiento de casas, piscinas y jardines. <br />
               Al contratar nuestros servicios, usted acepta estos Términos en su totalidad. <br />
               Si no está de acuerdo con alguna parte, le solicitamos que no utilice nuestros servicios.</p>

            <h2 className='titulSeg'>1. Servicios Ofrecidos</h2>
               <p className='textoTC'>La Empresa proporciona servicios de mantenimiento para:</p>
               <ul className='ull'>
                   <li className='lii'><strong>Casas:</strong> Limpieza general, mantenimiento preventivo, reparaciones menores.</li>
                   <li className='lii'><strong>Piscinas:</strong> Limpieza, tratamiento químico, mantenimiento del equipo.</li>
                   <li className='lii'><strong>Jardines:</strong> Diseño, poda, riego y cuidado general.</li>
                </ul>

            <h2 className='titulSeg'>2. Contratación de Servicios</h2>
               <p className='textoTC'>Para solicitar nuestros servicios, el cliente debe completar un formulario de solicitud  <br />
                o ponerse en contacto con nosotros a través de los canales establecidos. Una vez recibida <br />
               la solicitud, la Empresa proporcionará un presupuesto que deberá ser aceptado por el  <br />
               cliente antes de iniciar cualquier trabajo.</p>

            <h2 className='titulSeg'>3. Pagos</h2>
               <p className='textoTC'>Los pagos se realizarán según lo acordado en el presupuesto aceptado. La Empresa  <br />
                se reserva el derecho de exigir un pago por adelantado en ciertos  <br />
                casos, especialmente para servicios que requieran la compra de materiales.</p>

            <h2 className='titulSeg'>4. Cancelaciones y Reprogramaciones</h2>
               <p className='textoTC'>El cliente puede cancelar o reprogramar una cita con un aviso mínimo de 24 horas. <br />
                Si se da aviso con menos de 24 horas, la Empresa se reserva el derecho de cobrar  <br />
                una tarifa de cancelación.</p>

            <h2 className='titulSeg'>5. Responsabilidad</h2>
               <p className='textoTC'>La Empresa se compromete a realizar los servicios de manera profesional y segura. <br />
                Sin embargo, no será responsable de daños indirectos o incidentales que puedan <br />
                surgir durante la prestación de los servicios. El cliente es responsable de proporcionar <br />
                acceso a las áreas donde se realizarán los trabajos.</p>

            <h2 className='titulSeg'>6. Propiedad Intelectual</h2>
                <p className='textoTC'>Todos los materiales, logotipos y contenido proporcionado por la Empresa son propiedad  <br />
                 exclusiva de la misma y están protegidos por derechos de autor y otras leyes de propiedad intelectual.</p>

            <h2 className='titulSeg'>7. Modificaciones</h2>
                <p className='textoTC'>La Empresa se reserva el derecho de modificar estos Términos en cualquier momento.  <br />
                Las modificaciones serán efectivas una vez publicadas en nuestro sitio web.</p>

            <h2 className='titulSeg'>8. Legislación Aplicable</h2>
               <p className='textoTC'>Estos Términos se rigen por las leyes del <strong>Costa Rica</strong>,  <br />
                y cualquier disputa que surja en relación con estos Términos estará sujeta a la  <br />
                jurisdicción exclusiva de los tribunales de <strong>Nicoya, Guanacaste</strong>.</p>

            <h2 className='titulSeg'>9. Aceptación de Términos</h2>
                <p className='textoTC'>Al contratar nuestros servicios, usted acepta haber leído y entendido estos Términos y condiciones.</p>

                <p className='textoTC'>Para cualquier consulta sobre estos Términos, por favor contáctenos a través de  <br />
                <strong> (+506) 8940 0850</strong>.</p>
        </div>
    </div>
  )
}

export default FormCondiciones