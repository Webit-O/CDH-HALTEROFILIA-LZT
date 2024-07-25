import { Link } from 'react-router-dom'
import './NotFound.css'
const NotFound = () => {
  return (
    <main className='not-found'>
      <h1 className='error-title'>Ooops...! ERROR 404</h1>
      <span className='error-text'>The page you're trying to access doesn't exist.</span>
      <span className='error-text'>Try again refreshing or go to <Link className='main-page' to="/">HOME</Link></span>
    </main>
  )
}

export default NotFound