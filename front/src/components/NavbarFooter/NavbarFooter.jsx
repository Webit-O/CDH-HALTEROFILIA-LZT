import React from 'react'
import { FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './NavbarFooter.css'


function NavbarFooter() {
  return (
    <div className='navbar-footer'>
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
            <li><a href="#"><FaEnvelope /><span>cdhalmas@gmail.com</span></a></li>
            <li className='contact-map'><a href="#"><FaMapMarkerAlt /><span>C/. Lanzarote, 35559, Lanzarote</span></a></li>
        </ul>
        <ul className='navbar-social'>
            <h3 className='navbar-social__title'>SÍGUENOS</h3>
            <li><a href="#"><FaInstagram /></a></li>
            <li><a href="#"><FaYoutube /></a></li>
        </ul>
    </div>
  )
}

export default NavbarFooter
