import React from 'react'

function ProductCard({ name, image, description, price }) {
  return (
    <figure className="item-card">
      <img src={ image } alt="item" className="item-card-img"/>
      <figcaption className="item-card-info">
        <h4 className="item-card-title">{ name }</h4>
        <span className="item-card-description">{ description }</span>
        <span className="item-card-price">{ price }</span>
      </figcaption>
    </figure>
  )
}

export default ProductCard
