import './Header.css'
import {MdOutlineMenu} from 'react-icons/md'
import {MdClose} from 'react-icons/md';
import { useState } from "react";
import Navlinks from '../Navlinks/Navlinks';

const Header = () => {
  const [click, setclick] = useState(false);
  const Hamburger = <MdOutlineMenu className="HamburgerMenu" size="50px" onClick={() => setclick(!click)} />
  const Close = <MdClose className="HamburgerMenu" size="50px" onClick={() => setclick(!click)} />
  return (
    <>
      <div class='navbar' id='nav-web-style'>
        <Navlinks />
      </div>
      <div class='navbar' id='nav-mobile-style'>
        { click ? Close : Hamburger}
        {click && <Navlinks />}
      </div>
    </>
  )
}

export default Header
