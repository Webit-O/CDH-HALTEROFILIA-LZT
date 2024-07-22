import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarFooter.css'

let navbars = [
  {
    classname: 'navbar-home',
    links: [
      { href: '/', text: 'INICIO' },
      { href: '/about', text: 'SOBRE NOSOTROS' },
      { href: '/retail', text: 'TIENDA' },
    ],
  },
  {
    classname: 'navbar-legit',
    links: [
      { href: '#', text: 'POLÍTICA DE PRIVACIDAD' },
      { href: '#', text: 'AVISO LEGAL' },
      { href: '#', text: 'POLÍTICA DE COOKIES' },
      { href: '#', text: 'INFORMACIÓN DE ENVÍO' },
    ],
  },
]

function NavbarFooter() {

  const getRenderLinks = navbars.map((navbar, navbarIndex) => {
    return ( 
      <ul className={navbar.classname} key={navbarIndex}>
          { navbar.links.map((link, linkIndex) => {
              return (
                  <li key={`${navbarIndex}-${linkIndex}`}>
                    <Link to={link.href}>{link.text}</Link>
                  </li>
              )
          })}
      </ul>   
    )
  });
  return (
    <footer className='navbar-footer'>
      <h2 className='navbar-footer__h2'>Club deportivo Halmas</h2>
        { getRenderLinks }
    </footer>
  )
}

export default NavbarFooter
