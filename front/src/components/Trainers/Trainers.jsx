import './Trainers.css'

const Trainers = ({ className }) => {
  return (
    <div id="trainers-page">
      <h2 className="title">¡TRABAJA CON PROFESIONALES!</h2>
      <div id="trainers-img-container" className={className}>
        <div className="img-wrapper">
          <div className="layer-img trainer-one">
            <img
              className="trainer-img"
              src="/img/cdh-trainer2.jpg"
              alt="Entrenadora de CDHalmas Andrea"
            />
          </div>
          <p className="trainer-name">
            <img src="/img/double-right-arrows.png" alt="double-arrows" />
            ANDREA M.L.
          </p>
        </div>
        <div id="center-wrapper" className='center-wrapper'>
          <div id="outlined-web" className="outlined-text-container">
            <h1 className="normal-text">CONSIGUE RESULTADOS REALES</h1>
            <h1 className="text-shadow">CONSIGUE RESULTADOS REALES</h1>
          </div>
          <p id="info-text-web" className='info-text-web'>
            Planeas presentarte a exámenes de oposiciones o necesitas encontrar
            tu propio camino en el mundo de la halterofilia, nosotros somos el
            equipo de profesionales que necesitas para cumplir tus objetivos.
          </p>
        </div>
        <div className="img-wrapper">
          <img
            className="trainer-img"
            src="/img/cdh-trainer1.jpg"
            alt="Entrenador de CDHalmas Jose"
          />
          <p className="trainer-name">
            <img src="/img/double-right-arrows.png" alt="double-arrows" />
            JOSE A.C.
          </p>
        </div>
      </div>
      <div
        id="outlined-mobile"
        className={`outlined-text-container ${className}`}
      >
        <h1 className="normal-text">CONSIGUE RESULTADOS REALES</h1>
        <h1 className="text-shadow">CONSIGUE RESULTADOS REALES</h1>
      </div>
      <p id="info-text-mobile" className={`info-text-mobile ${className}`}>
        Planeas presentarte a exámenes de oposiciones o necesitas encontrar tu
        propio camino en el mundo de la halterofilia, nosotros somos el equipo
        de profesionales que necesitas para cumplir tus objetivos.
      </p>
      <button id="info-btn" className={`info-btn ${className}`}>
        <a href="#" className='train-button'>MÁS INFO</a>
      </button>
    </div>
  )
}

export default Trainers
