import React from 'react'
//import { useState, useEffect } from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import './InfoTrainCard.css'
function InfoTrainCard({ isActive, onClose }) {
  return (
    <div className={`info-card ${isActive ? 'info-card__active' : ''}`}>
      <p className="info-card__p">
        Non aperiam distinctio libero praesentium et quos sapiente, vero culpa,
        dolorem blanditiis recusandae accusantium dignissimos laudantium harum
        facere porro ipsam ipsa dicta.
      </p>
      <button className="info-card__button">Reservar</button>
      <button className="button-close" title="Close" onClick={onClose}>
        <FaRegWindowClose className="fa-to-close" />
      </button>
    </div>
  )
}

export default InfoTrainCard
