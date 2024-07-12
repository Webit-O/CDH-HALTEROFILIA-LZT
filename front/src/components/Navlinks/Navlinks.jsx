import './Navlinks.css'
import { Link } from 'react-router-dom'

const Navlinks = () => {
  return (
    <ul id='nav-list'>
        <li><Link to="/">INICIO</Link></li>
        <li>ENTRENAMIENTO</li>
        <li>TIENDA</li>
        <li><Link to="/about">SOBRE NOSOTROS</Link></li>
    </ul>
  )
}

export default Navlinks
