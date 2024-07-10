import React from 'react'
import './TrainSection.css'

function TrainSection() {
  return (
    <main className='training'>
      <h2 className='training__h2'>ENTRENAMIENTOS</h2>
      <section className="training__section">
        <div className='training__picture opo'>
            <h3 className='training__h3'>OPOSICIONES</h3>
        </div>
        <article className='training-info'>
            <p className='training-text'>
                CONSIGUE SACARTE TUS OPOSICIONES CON UN MEJOR RENDIMIENTO FÍSICO 
                ¡A POR EL ÉXITO!
            </p>
            <button className='training-button'>MÁS INFO</button>
        </article>
      </section>
      <section className="training__section">
        <div className='training__picture train'>
            <h3 className='training__h3'>ENTRENOS</h3>
        </div>
        <article className='training-info'>
            <p className='training-text'>
                ADÉNTRATE EN EL MUNDO DE LA HALTEROFILIA Y FUERZA APLICADA,
                TE ENSEÑAMOS A ENCONTRAR TU PROPIO CAMINO
            </p>
            <button className='training-button'>RESERVAR</button>
        </article>
      </section>
      <section className="training__section">
        <div className='training__picture diet'>
            <h3 className='training__h3'>DIETAS Y BIENESTAR</h3>
        </div>
        <article className='training-info'>
            <p className='training-text'>
                HACEMOS DIETAS TOTALMENTE PERSONALIZADAS ADAPTADAS A TODO TIPO DE CUERPOS
            </p>
            <button className='training-button'>MÁS INFO</button>
        </article>
      </section>
    </main>
  )
}

export default TrainSection
