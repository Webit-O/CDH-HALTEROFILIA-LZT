import './Navlinks.css'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
  return (
    <ul id='nav-list'>
        <NavLink to="/" exact activeClassName="active"><li>INICIO</li></NavLink>
        <NavLink to="/training" activeClassName="active"><li>ENTRENAMIENTO</li></NavLink>
        <NavLink to="/retail" activeClassName="active"><li>TIENDA</li></NavLink>
        <NavLink to="/about" activeClassName="active"><li>SOBRE NOSOTROS</li></NavLink>
    </ul>
  )
}

export default Navlinks
