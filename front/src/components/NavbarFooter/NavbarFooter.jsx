import React from 'react'
import './NavbarFooter.css'


function NavbarFooter() {
  return (
    <>
     <div className='prueba'>
        <ul className="navbar-home">
            <li><a href="#">INICIO</a></li>
            <li><a href="#">SOBRE NOSOTROS</a></li>
            <li><a href="#">TIENDA</a></li>
        </ul>
        <ul className='navbar-legit'>
            <li><a href="#">POLÍTICA DE PRIVACIDAD</a></li>
            <li><a href="#">AVISO LEGAL</a></li>
            <li><a href="#">POLÍTICA DE COOKIES</a></li>
            <li><a href="#">INFORMACIÓN DE ENVÍO</a></li>
        </ul>
        <ul className='navbar-contact'>
            <h3 className='navbar-contact__title'>CONTACTA</h3>
            <li><a href="#">correo</a></li>
            <li><a href="#">zona</a></li>
        </ul>
        <ul className='navbar-social'>
            <h3 className='navbar-social__title'>SÍGUENOS</h3>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
        </ul>
      </div>
    </>
  )
}

export default NavbarFooter
