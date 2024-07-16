import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import './TshirtSection.css'
function TshirtSection() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  }
  return (
    <section className='products-section'>
      <article className='products-info'>
        <h2 className='products__h2'>¡NUESTROS PRODUCTOS <span>HALTEROFRIKIS!</span></h2>
        <p className='products__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="product__div">
          <Link className="product__button" to='/retail'>PÁSATE POR NUESTRA TIENDA</Link>     
        </div>
      </article>
      <article className='products-picture'>
        <Slider {...settings} className='products'>
          <div className="product-slider__item">
            <img src="/img/t-shirt1.png" alt="tshirt" />
          </div>
          <div className="product-slider__item">
            <img src="/img/t-shirt2.png" alt="tshirt" />
          </div>
          <div className="product-slider__item">
            <img src="/img/t-shirt3.png" alt="tshirt" />
          </div>
        </Slider>
      </article>
    </section>
  )
}

export default TshirtSection
