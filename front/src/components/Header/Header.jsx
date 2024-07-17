import './Header.css'
import {MdOutlineMenu} from 'react-icons/md'
import {MdClose} from 'react-icons/md';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Navlinks from '../Navlinks/Navlinks';

const Header = () => {
  const [click, setclick] = useState(false);
  const Hamburger = (
    <>
      <NavLink to="/" exact activeClassName="active">
          <img id='logo-header' src="/img/cdhalmas-logo.png" alt="halmas logo" />
        </NavLink>
      <MdOutlineMenu className="HamburgerMenu" size="70px" onClick={() => setclick(!click)} />
    </>
  )
  const Close = <MdClose className="HamburgerMenu" size="70px" onClick={() => setclick(!click)} />

  return (
    <header>
      <div className='navbar' id='nav-web-style'>
        <NavLink to="/" exact activeClassName="active">
          <img id='logo-header' src="/img/cdhalmas-logo.png" alt="halmas logo" />
        </NavLink>
        <Navlinks />
      </div>
      <div className='navbar' id='nav-mobile-style'>
        {click ?  Close : Hamburger}
        {click && <Navlinks />}
      </div>
    </header>
  )
}

export default Header
