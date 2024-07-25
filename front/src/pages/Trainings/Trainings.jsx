import './Trainings.css'
import TrainingList from '../../components/TrainingsList/TrainingList'

const Trainings = () => {
  return (
    <div id='trainings-container'>
      <section className='trainings__section'>
        <h1 className='trainings-title'>NUESTROS ENTRENAMIENTOS</h1>
        <span className='yellow-title trainings-subtitle'>DESCUBRE NUESTROS MÉTODOS</span>
      </section>
      <section className='trainings-text'>
        <p>
          Halterofilia y fuerza aplicada.
          Con cada uno de nuestros entrenamientos podrás dar lo mejor ti 
          y superarte.
        </p>
      </section>
      <div id='training-list-container'>
        <TrainingList/>
      </div>
    </div>
  )
}

export default Trainings
