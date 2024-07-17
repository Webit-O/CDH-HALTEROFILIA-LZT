import './TrainingList.css'

const TrainingList = () => {
  //HAY QUE CORREGIR LAS IMAGENES PARA QUE TENGAN TODAS LAS MISMAS PROPORCIONES (AHORA MISMO SON SOLO DE PRUEBA)
    const trainingImages = [
      'public/img/training-benchpress.png',
      'public/img/training-deadlift.png',
      'public/img/training-dumbbell.png',
      'public/img/training-frontsquat.png',
      'public/img/training-hipthrust.png',
      'public/img/training-lunges.png',
      'public/img/training-pressmilitar.png',
      'public/img/training-pullups.png',
      'public/img/training-remo.png'
    ]
  return (
    <div className='list-wrapper'>
      {trainingImages.map((train) =>  {return <img key={train} src={train} alt=''/>})}
    </div>
  )
}

export default TrainingList
