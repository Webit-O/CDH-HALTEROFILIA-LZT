import './Home.css'
import TitlePage from '../../components/Title-page/Title-page'
import Trainers from '../../components/Trainers/Trainers'

const Home = () => {
  return (
    <div id='home-container'>
      <TitlePage/>
      <Trainers/>
    </div>
  )
}

export default Home
