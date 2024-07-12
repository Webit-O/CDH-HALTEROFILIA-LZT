import './Navlinks.css'
import { Link } from 'react-router-dom'

const Navlinks = () => {
  return (
    <li id='nav-list'>
        <ul><a href=""><Link to="/">INICIO</Link></a></ul>
        <ul><a href="">ENTRENAMIENTO</a></ul>
        <ul><a href="">TIENDA</a></ul>
        <ul><a href="">SOBRE NOSOTROS</a></ul>
    </li>
  )
}

export default Navlinks
