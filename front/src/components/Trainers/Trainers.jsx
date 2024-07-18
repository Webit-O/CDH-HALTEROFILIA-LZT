import './Trainers.css'

const Trainers = ({className}) => {
  return (
    <div id='trainers-page'>
      <h2 className='title'>¡TRABAJA CON PROFESIONALES!</h2>
      <div id='trainers-img-container' className={className}>
        <div className='img-wrapper'>
          <img className='trainer-img' src="/img/cdh-trainer2.jpg" alt="Entrenadora de CDHalmas Andrea" />
          <p className='trainer-name'>ANDREA M.L.</p>
        </div>
        <div id='center-wrapper'>
          <div id='outlined-web' className='outlined-text-container'>
            <h1 className='normal-text'>CONSIGUE RESULTADOS REALES</h1>
            <h1 className='text-shadow'>CONSIGUE RESULTADOS REALES</h1>
          </div>
          <p id='info-text-web'>Planeas presentarte a exámenes de oposiciones o necesitas encontrar tu propio camino en el mundo de la halterofilia, nosotros somos el equipo de profesionales que necesitas para cumplir tus objetivos.</p>
        </div>
        <div className='img-wrapper'>
          <img className='trainer-img' src="/img/cdh-trainer1.jpg" alt="Entrenador de CDHalmas Jose" />
          <p className='trainer-name'>JOSE A.C.</p>
        </div>
      </div>
      <div id='outlined-mobile' className={`outlined-text-container ${className}`}>
        <h1 className='normal-text'>CONSIGUE RESULTADOS REALES</h1>
        <h1 className='text-shadow'>CONSIGUE RESULTADOS REALES</h1>
      </div>
      <p id='info-text-mobile' className={className}>Planeas presentarte a exámenes de oposiciones o necesitas encontrar tu propio camino en el mundo de la halterofilia, nosotros somos el equipo de profesionales que necesitas para cumplir tus objetivos.</p>
      <button id='info-btn' className={className}><a href="">MÁS INFO</a></button>
    </div>
  )
}

export default Trainers
