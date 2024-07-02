import './Home.css'

const Home = () => {
  return (
    <div id='title-page'>
      <div id='title-left-container'>
        <div id='title-container'>
          <h1 className='title'>PREPÁRATE PARA TU</h1>
          <h1 className='title' id='yellow-title'>PRÓXIMO ENTRENO</h1>
        </div>
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

export default Home
