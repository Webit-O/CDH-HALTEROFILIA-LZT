import React from 'react'
import { useState } from 'react'
import InfoTrainCard from '../InfoTrainCard/InfoTrainCard'
import './TrainCard.css'
function TrainCard({titles, titlen, cardID}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className={`train-card train-card-${cardID}`}>
      <div className="layer-card"></div>
      <h4 className='train-card-title'>{ titles }</h4>
      <span className='train-card__span'>***</span>
      <span className="train-card__p">{ titlen }</span>
      <button className='train-card__button' onClick={handleClick}>Ver</button>
      <InfoTrainCard className={ isClicked ? 'info-card__active' : '' }/>
    </div>
  )
}

export default TrainCard
