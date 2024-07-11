import QuotesList from '../../components/QuotesList/QuotesList'
import TrainSection from '../../components/TrainSection/TrainSection'
import TshirtSection from '../../components/TshirtSection/TshirtSection'
import './Home.css'
import TitlePage from '../../components/Title-page/Title-page'
import Trainers from '../../components/Trainers/Trainers'

const Home = () => {
  return (
    <div id='home-container'>
      <TitlePage/>
      <Trainers/>
      <TshirtSection />
      <TrainSection />
      <QuotesList />
    </div>
  )
}

export default Home
