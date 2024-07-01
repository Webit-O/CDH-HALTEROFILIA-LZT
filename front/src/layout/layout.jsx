import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './layout.css'

const Root = () => {
  return (
    <div id='root-page-container'>
      <Header/>
        <section>
          <Outlet/>
        </section>
      <Footer/>
    </div>
  )
}

export default Root
