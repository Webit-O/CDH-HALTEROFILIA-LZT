import React from 'react'
import './TshirtSection.css'
import Slider from 'react-slick'
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
      </article>
      <article className='products-picture'>
        <Slider {...settings}>
          <div className="product-slider__item">
            <img src="https://via.placeholder.com/300" alt="tshirt" />
          </div>
          <div className="product-slider__item">
            <img src="https://via.placeholder.com/300" alt="tshirt" />
          </div>
          <div className="product-slider__item">
            <img src="https://via.placeholder.com/300" alt="tshirt" />
          </div>
        </Slider>
        <button className="product__button">PÁSATE POR NUESTRA TIENDA</button>     
      </article>
    </section>
  )
}

export default TshirtSection
