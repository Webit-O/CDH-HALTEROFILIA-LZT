import './Title-page.css'

const TitlePage = () => {
  return (
    <div id='title-page'>
      <div id='title-container'>
        <div id='mobile-video' className='video-container'>
          <video id='intro-video' muted loop autoPlay><source src='/video/cdh-video.mp4'/></video>
        </div>
        <div id='title-upper-wrapper'>
          <div id='title-left-container'>
            <h1 className='title'>PREPÁRATE PARA</h1>
            <h1 className='title'>TU <span className='yellow-title'>PRÓXIMO</span></h1>
            <h1 className='title yellow-title'>ENTRENAMIENTO</h1>
            <p>DESCUBRE TU CAMINO</p>
            <div>
              <button id='btn-web-view' className='train-btn'>
                <a href="">¡PRUEBA NUESTRO ENTRENAMIENTO!</a>
              </button>
            </div>
          </div>
          <div id='title-right-container'>
            <div id='web-video' className='video-container'>
              <video id='intro-video' muted loop autoPlay><source src='/video/cdh-video.mp4'/></video>
            </div>
          </div>
        </div>
        <button id='btn-mobile-view' className='train-btn'>
          <a href="">¡PRUEBA NUESTRO ENTRENAMIENTO!</a>
        </button>
      </div>
      
    </div>
  )
}

export default TitlePage
