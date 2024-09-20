import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Importa la biblioteca para enviar correos
import { Link } from 'react-router-dom'; // Importa el componente Link para la navegación
import '../styles/FormContact.css'; // Importa los estilos CSS

const FormContact = () => {
  const form = useRef(); // Crea una referencia para el formulario
  const [saludo, setSaludo] = useState(''); // Estado para mensajes de éxito o error

  const sendEmail = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    
    emailjs
      .sendForm('service_mxn8ufa', 'template_gy4ku5f', form.current, {
        publicKey: 'oMQJXGUEr5oov2vCV', // Clave pública para EmailJS
      })
      .then(
        () => {
          console.log('SUCCESS!'); // Mensaje de éxito en la consola
          setSaludo("Su correo ha sido enviado exitosamente"); // Mensaje de éxito para el usuario
        },
        (error) => {
          console.log('FAILED...', error.text); // Mensaje de error en la consola
          setSaludo("Ha ocurrido un error. Vuelva a intentar o utilice otro medio de comunicación"); // Mensaje de error para el usuario
        },
      );
  };

  return (
    <div>
      <div className='contenedorGmail'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className='textuser' type="text" name="user_name" required /> {/* Campo para el nombre */}
          
          <label>Email</label>
          <input type="email" name="user_email" required /> {/* Campo para el correo electrónico */}
          
          <label>Message</label>
          <textarea name="message" required /> {/* Campo para el mensaje */}
          
          <input type="submit" value="Send" /> {/* Botón para enviar el formulario */}
          <p>{saludo}</p> {/* Mensaje de éxito o error */}
        </form>
      </div>

      <footer>
        <div>
          <h1 className='tituloC'>Otros Medios De Contacto</h1>
          <div className='footer'>
            {/* Enlaces a otros medios de contacto */}
            <Link className='link' to="https://www.facebook.com/profile.php?id=61561244475801&mibextid=ZbWKwL">Nuestro Facebook</Link>
            <p> WhatsApp: (+506) 8940 0850</p>
            <p>Correo Electrónico: nosarahousemanagement@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormContact;
