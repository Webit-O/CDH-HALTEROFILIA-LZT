import './Home.css'

const Home = () => {
  return (
    <div id='title-page'>
      <div id='title-left-container'>
        <div id='title-container'>
          <h1 className='title'>PREPÁRATE PARA</h1>
          <h1 className='title'>TU <span id='yellow-title'>PRÓXIMO</span></h1>
          <h1 className='title' id='yellow-title'>ENTRENAMIENTO</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam expedita quasi.</p>
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
