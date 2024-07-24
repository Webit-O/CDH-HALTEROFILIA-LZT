import React from 'react'
import { useState } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import './InfoTrainCard.css'
function InfoTrainCard({className}) {
    const [isCardClosed, setIsCardClosed] = useState(false);
    const closeInfoCard = () => {
        setIsCardClosed(!isCardClosed);
    }
  return (
    <div className={`info-card ${isCardClosed ? '' : className}`}>
      <p className="info-card__p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam
        distinctio libero praesentium et quos sapiente, vero culpa, dolorem
        blanditiis recusandae accusantium dignissimos laudantium harum facere
        porro ipsam ipsa dicta.
      </p>
      <button className="info-card__button">Reservar</button>
      <button className='button-close' title='Close' onClick={closeInfoCard}><FaRegWindowClose /></button>
    </div>
  )
}

export default InfoTrainCard
