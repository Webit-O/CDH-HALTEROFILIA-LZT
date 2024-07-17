import QuotesList from '../../components/QuotesList/QuotesList'
import TrainSection from '../../components/TrainSection/TrainSection'
import TshirtSection from '../../components/TshirtSection/TshirtSection'
import './Home.css'
import TitlePage from '../../components/Title-page/Title-page'
import Trainers from '../../components/Trainers/Trainers'

const Home = () => {

  window.addEventListener('scroll', reveal);
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  return (
    <div id='home-container'>
      <TitlePage/>
      <Trainers className='reveal right'/>
      <TshirtSection className='reveal left'/>
      <TrainSection className='reveal'/>
      <QuotesList className='reveal'/>
    </div>
  )
}

export default Home
