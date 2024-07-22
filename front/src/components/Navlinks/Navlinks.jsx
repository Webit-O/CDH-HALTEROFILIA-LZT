import './Navlinks.css'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
  return (
    <ul id='nav-list'>
        <NavLink to="/" exact activeclassname="active"><li>INICIO</li></NavLink>
        <NavLink to="/training" activeclassname="active"><li>ENTRENAMIENTO</li></NavLink>
        <NavLink to="/retail" activeclassname="active"><li>TIENDA</li></NavLink>
        <NavLink to="/about" activeclassname="active"><li>SOBRE NOSOTROS</li></NavLink>
    </ul>
  )
}

export default Navlinks
