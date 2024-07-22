import './Title-page.css'

const TitlePage = () => {
  return (
    <div id='title-page' className='title-page'>
      <div id='title-container' className='title-container'>
        <div id='mobile-video' className='video-container'>
          <video id='intro-video' muted loop autoPlay><source src='/video/cdh-video.mp4'/></video>
        </div>
        <div id='title-upper-wrapper'>
          <div id='title-left-container'>
            <h1 className='title'>
              <span>PREPÁRATE PARA TU</span>
              <span className='yellow-title'>PRÓXIMO ENTRENAMIENTO</span>
            </h1>
            <p className='sub-title'>DESCUBRE TU CAMINO</p>
            <div className='btn-web-view'>
              <button id='btn-web-view' className='train-btn'>
                <a href="#">¡PRUEBA NUESTRO ENTRENAMIENTO!</a>
              </button>
            </div>
          </div>
          <div id='title-right-container' className='title-right-container'>
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
