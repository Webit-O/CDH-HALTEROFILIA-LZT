import './TrainingList.css'

const TrainingList = () => {
  //HAY QUE CORREGIR LAS IMAGENES PARA QUE TENGAN TODAS LAS MISMAS PROPORCIONES (AHORA MISMO SON SOLO DE PRUEBA)
    const trainingImages = [
      'img/training-benchpress.png',
      'img/training-deadlift.png',
      'img/training-dumbbell.png',
      'img/training-frontsquat.png',
      'img/training-hipthrust.png',
      'img/training-lunges.png',
      'img/training-pressmilitar.png',
      'img/training-pullups.png',
      'img/training-remo.png'
    ]
  return (
    <div className='list-wrapper'>
      {trainingImages.map((train) =>  {return <img key={train} src={train} alt=''/>})}
    </div>
  )
}

export default TrainingList
