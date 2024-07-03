import './Title-page.css'

const TitlePage = () => {
  return (
    <div id='title-page'>
      <div id='title-left-container'>
        <div id='title-container'>
          <h1 className='title'>PREPÁRATE PARA</h1>
          <h1 className='title'>TU <span className='yellow-title'>PRÓXIMO</span></h1>
          <h1 className='title yellow-title'>ENTRENAMIENTO</h1>
        </div>
        <p>DESCUBRE TU CAMINO</p>
        <button id='train-btn'>
          <a href="">¡PRUEBA NUESTRO ENTRENAMIENTO!</a>
        </button>
      </div>
      <div id='video-container'>
        <video src=""></video>
      </div>
    </div>
  )
}

export default TitlePage
