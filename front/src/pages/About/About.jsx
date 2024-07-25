import './About.css'

const About = () => {
  return (
    <div id='about-container'>
      <div>
        <h1 className='about-title'>CLUB DEPORTIVO HALMAS</h1>
        <span className='about-subtitle'>Nuestro objetivo, que seas más fuerte</span>
      </div>
      <div>
        <p>Somos especialistas en ejercicios de habilidades y destreza relacionados con el deporte: </p>
        <p>entrenamiento articular, óseo y tendinoso para el rendimiento, la prevención y regeneración de lesiones.
        Queremos hacer la carrera del deportista apta a largo plazo con el fin de tener más años para ver su arte independientemente de su nivel o edad.</p>
      </div>
      <div className='img-wrapper'>
        <img src="/img/cdh-about.jpg" alt="trainers from cdhalmas Jose and Andrea" />
      </div>
    </div>
  )
}

export default About
