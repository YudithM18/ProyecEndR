import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from'react-router-dom';
import '../styles/FormContact.css'

 const FormContact = () => {

  const form = useRef();
  const [saludo, setSaludo] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_mxn8ufa', 'template_gy4ku5f', form.current, {
        publicKey: 'oMQJXGUEr5oov2vCV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSaludo("Su correo a sido enviado exítosamente")
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSaludo("Ha ocurrido un error. Vuelva a intentar o utilize otro medio de comunicación")
        },
      );
  };

  return ( 
    <div>
      <div className='contenedorGmail'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='textuser' type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" /> 
        <p>{saludo}</p>
        </form>
      </div>
    

    <footer>
      <div >
        <h1 className='tituloC'>Otros Medios De Contacto</h1>
        <div className='footer'>
    
          <Link className='link' to="https://www.facebook.com/profile.php?id=61561244475801&mibextid=ZbWKwL">Nuestro Facebook</Link>
          <p> WhatsApp: (+506) 8940 0850</p>
          <p>Correo Electronico: nosarahousemanagement@gmail.com</p>
        </div>
      </div>
   </footer>
    </div>

    
  );
};

export default FormContact