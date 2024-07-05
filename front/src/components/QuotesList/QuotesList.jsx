import React, { useEffect, useState } from 'react'
import QuoteCard from '../QuoteCard/QuoteCard'
import './QuotesList.css'

function QuotesList() {
  const [arrayQuotes, setArrayQuotes] = useState([])
  const LENGTH = 6
  useEffect(() => {
      let quotes = [];
      for (let i = 0; i < LENGTH; i++) {
        quotes.push(<QuoteCard key={i}/>)
      }
      setArrayQuotes(quotes);
  }, []);

  return (
    <div className="quotes-list">
      <h2 className='quotes-list-title'>CONFÍAN EN NOSOTROS</h2>
      {arrayQuotes.map((quote, index) => {
        return (
          <div key={index}>
            {quote}
          </div>
        )
      })}
    </div>
  )
}

export default QuotesList
