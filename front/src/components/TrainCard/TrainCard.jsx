import React from 'react'
import InfoTrainCard from '../InfoTrainCard/InfoTrainCard'
import './TrainCard.css'
function TrainCard({titles, titlen, cardID, isActive, onButtonClick}) {
  const handleOpen = () => {
    onButtonClick(cardID);
  }

  return (
    <div className={`train-card train-card-${cardID}`}>
      <div className="layer-card"></div>
      <h4 className='train-card-title'>{ titles }</h4>
      <span className='train-card__span'>***</span>
      <span className="train-card__p">{ titlen }</span>
      <button className='train-card__button' onClick={handleOpen}>Ver</button>
      <InfoTrainCard isActive={isActive} onClose={handleOpen}/>
    </div>
  )
}

export default TrainCard
