import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'

function ProductCard({ name, image, description, price }) {
  return (
    <figure className="item-card">
      <img src={ image } alt="item" className="item-card-img"/>
      <figcaption className="item-card-info">
        <h4 className="item-card-title">{ name }</h4>
        <span className="item-card-description">{ description }</span>
        <span className="item-card-price">{ price } €</span>
        <div className="item-card-options">
          <button className="item-card-button">
            <FaCartPlus className="item-card-icon" title='Comprar'/>
          </button>
          <button className="item-card-button">
            <FaHeart className="item-card-icon" title='Añadir a lista de deseos'/>
          </button>
        </div>
      </figcaption>
    </figure>
  )
}

export default ProductCard
