import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QuoteCard from '../QuoteCard/QuoteCard'
import './QuotesList.css'

const quotes = [
  {
    name: 'Veronica',
    stars: 5,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt cum consequatur voluptates rerum quas culpa eveniet nulla quo nihil illo?',
    image: 'img/person-profiles/person-photo-2.jpg',
  },
  {
    name: 'Juan',
    stars: 4,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt cum consequatur voluptates rerum quas culpa eveniet nulla quo nihil illo?',
    image: 'img/person-profiles/person-photo-1.jpg',
  },
  {
    name: 'Pedro',
    stars: 4,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt cum consequatur voluptates rerum quas culpa eveniet nulla quo nihil illo?',
    image: 'img/person-profiles/person-photo-3.jpg',
  },
  {
    name: 'Hugo',
    stars: 5,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt cum consequatur voluptates rerum quas culpa eveniet nulla quo nihil illo?',
    image: 'img/person-profiles/person-photo-5.jpg',
  },
  {
    name: 'Cristina',
    stars: 5,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt cum consequatur voluptates rerum quas culpa eveniet nulla quo nihil illo?',
    image: 'img/person-profiles/person-photo-4.jpg',
  },
  {
    name: 'Bruno',
    stars: 4,
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, deserunt cum consequatur voluptates rerum quas culpa eveniet nulla quo nihil illo?',
    image: 'img/person-profiles/person-photo-6.jpg',
  },
]

function QuotesList() {
  const [arrayQuotes, setArrayQuotes] = useState([])
  useEffect(() => {
    let myListQuotes;
    myListQuotes = quotes.map((quote, index) => {
      return <QuoteCard key={index} name={quote.name} stars={quote.stars} text={quote.text} image={quote.image}/>
    });
    setArrayQuotes(myListQuotes);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="quotes-list">
      <h2 className='quotes-list-title'>CONFÍAN <span>EN NOSOTROS</span></h2>
      <Slider {...settings}>
          { arrayQuotes }
      </Slider>
    </div>
  )
}

export default QuotesList
