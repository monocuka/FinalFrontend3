import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contactForm'>
      <h2>Agenda tu cita de consulta aqui!</h2>
      <p>Envia tus datos y nos contactaremos contigo.</p>
      <Form/>
    </div>
  )
}

export default Contact