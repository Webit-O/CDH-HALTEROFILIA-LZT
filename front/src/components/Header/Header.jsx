import './Header.css'
import {MdOutlineMenu} from 'react-icons/md'
import {MdClose} from 'react-icons/md';
import { useState } from "react";
import Navlinks from '../Navlinks/Navlinks';

const Header = () => {
  const [click, setclick] = useState(false);
  const Hamburger = (
    <>
      <img id='logo-header' src="/img/cdhalmas-logo.png" alt="halmas logo" />
      <MdOutlineMenu className="HamburgerMenu" size="70px" onClick={() => setclick(!click)} />
    </>
  )
  const Close = <MdClose className="HamburgerMenu" size="70px" onClick={() => setclick(!click)} />

  return (
    <div>
      <div className='navbar' id='nav-web-style'>
        <img id='logo-header' src="/img/cdhalmas-logo.png" alt="halmas logo" />
        <Navlinks />
      </div>
      <div className='navbar' id='nav-mobile-style'>
        {click ?  Close : Hamburger}
        {click && <Navlinks />}
      </div>
    </div>
  )
}

export default Header
