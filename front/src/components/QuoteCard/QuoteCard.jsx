import React from 'react'
import { FaStar } from 'react-icons/fa'
import './QuoteCard.css'

function QuoteCard({ index, name, stars, text, image }) {
  // ESTAMOS USANDO PROPS - index, name, stars, text
  return (
    <>      
      <div className="quote-card" key={index}>
        <span className="quote-card-img"><img src={image} alt="person" /></span>
        <h4 className="quote-card-title">{ name }</h4>
        <span className="quote-card-pic">
          {
            [...Array(stars)].map((_, index) => {
              return <FaStar key={index} className="star-icon" />
            })
          }
        </span>
        <p className="quote-card-text">{ text }</p>
      </div>
    </>
  )
}

export default QuoteCard
