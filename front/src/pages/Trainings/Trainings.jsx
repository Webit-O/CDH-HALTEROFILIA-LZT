import './Trainings.css'
import TrainingList from '../../components/TrainingsList/TrainingList'

const Trainings = () => {
  return (
    <div id='trainings-container'>
      <div>
        <h1 className='title'>NUESTROS ENTRENAMIENTOS</h1>
        <h1 className='yellow-title'>DESCUBRE NUESTROS MÉTODOS</h1>
      </div>
      <div>
        <p>Halterofilia y fuerza aplicada.</p>
        <p>Con cada uno de nuestros entrenamientos podrás dar lo mejor ti y superarte.</p>
      </div>
      <div id='training-list-container'>
        <TrainingList/>
      </div>
    </div>
  )
}

export default Trainings
