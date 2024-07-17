import React from 'react'
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

  const getRenderLinks = navbars.map((navbar, index) => {
    return (
        <>
            <ul className={navbar.classname} key={index}>
                { navbar.links.map((link, index) => {
                    return (
                        <li key={index}><a href={link.href}>{link.text}</a></li>
                    )
                })}
            </ul>
        </>
    )
  });
  return (
    <footer className='navbar-footer'>
        { getRenderLinks }
    </footer>
  )
}

export default NavbarFooter
