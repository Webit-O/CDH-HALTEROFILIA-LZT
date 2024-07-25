import { useState } from 'react'
import TrainCard from '../TrainCard/TrainCard'
import './TrainingList.css'

const trainingArray = [
  {
    titleES: 'Press Banca',
    titleEN: 'Bench Press',
    img: 'img/training-benchpress.png',
  },
  {
    titleES: 'Peso Muerto',
    titleEN: 'Deadlift',
    img: 'img/training-deadlift.png',
  },
  {
    titleES: 'Press Militar',
    titleEN: 'Overhead Press',
    img: 'img/training-pressmilitar.png',
  },
  {
    titleES: 'Dominadas',
    titleEN: 'Pull-ups',
    img: 'img/training-pullups.png',
  },
  {
    titleES: 'Frontales',
    titleEN: 'Front Squat',
    img: 'img/training-frontsquat.png',
  },
  {
    titleES: 'Hip Thrust',
    titleEN: 'Hip Thrust',
    img: 'img/training-hipthrust.png',
  },
  { titleES: 'Remo B/M', titleEN: 'BB/DB Row', img: 'img/training-remo.png' },
  { titleES: 'Zancadas', titleEN: 'Lunges', img: 'img/training-lunges.png' },
  {
    titleES: 'Press Mancuernas',
    titleEN: 'Dumbbell bench press',
    img: 'img/training-dumbbell.png',
  },
]

const TrainingList = () => {
  const [activeCards, setActiveCards] = useState({})
  const handleButtonClick = (index) => {
    setActiveCards({
      ...activeCards,
      [index]: !activeCards[index],
    })
  }
  function getTrainingItem() {
    return trainingArray.map((trainItem, index) => {
      return (
        <TrainCard
          key={index}
          titles={trainItem.titleES}
          titlen={trainItem.titleEN}
          cardID={index}
          isActive={!!activeCards[index]}
          onButtonClick={() => handleButtonClick(index)}
        />
      )
    })
  }
  return <main className="list-wrapper">{getTrainingItem()}</main>
}

export default TrainingList
