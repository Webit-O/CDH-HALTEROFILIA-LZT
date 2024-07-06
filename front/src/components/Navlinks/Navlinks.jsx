import './Navlinks.css'

const Navlinks = (props) => {
  return (
    <li className={props.menuHandler} id='nav-list'>
        <ul><a href="">INICIO</a></ul>
        <ul><a href="">TIENDA</a></ul>
        <ul><a href="">SOBRE NOSOTROS</a></ul>
        <ul><a href="">ENTRENAMIENTO</a></ul>
    </li>
  )
}

export default Navlinks
