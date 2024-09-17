
import React from 'react';
import '../styles/FormUbicacion.css'

const  FormUbicacion= () => {
  return (
    <div style={{ textAlign: 'center' }}>

      <h1 className='tituloU'>ENCUENTRENOS EN:</h1>
      <br />
      <br />

      <iframe
        className='mapa'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d962.9277229063074!2d-85.66464564586823!3d9.963183888108478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2scr!4v1726168572243!5m2!1ses-419!2scr"
        width="600"
        height="450"
        style={{ border: '0', borderRadius: '8px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default  FormUbicacion;
