import { FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import NavbarFooter from '../NavbarFooter/NavbarFooter'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <h2 className='footer__h2'>Club deportivo Halmas</h2>
      <NavbarFooter />
      <div className='footer__div'>
        <section className='contact-section'>
            <h3 className='contact-section__title'>CONTACTA</h3>
            <p className='contact-section__p'>
              <a href="#"><FaEnvelope className='icon'/><span>cdhalmas@gmail.com</span></a>
              <a href="#" className='contact-map'><FaMapMarkerAlt className='icon'/><span>C/. Lanzarote, 35559, Lanzarote</span></a>
            </p>
        </section>
        <section className='social-media'>
            <h3 className='social-media__title'>SÍGUENOS</h3>
            <p className='contact-section__p'>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </p>
        </section>
      </div>        
    </div>
  )
}

export default Footer
