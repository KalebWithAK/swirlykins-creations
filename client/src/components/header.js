import '../styles/components/header.css'
import { Link } from 'react-router-dom'
export default function Header({ logged_in }) {
  return (
    <header>
      <img src={require('../images/logo.png')} alt='logo' />
      <div className='text'>
        <h1>Swirlykins Creations</h1>
        <p>I love to create beautiful things</p>
      </div>
      { // different navbar for visitor and customer
      !logged_in ? 
        <nav>
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Sign In</a>
          <a href=''>Create an Account</a>
        </nav>
      :
        <nav>
          <a href=''>Home</a>
          <a href=''>Profile</a>
          <a href=''>Cart</a>
          <a href=''>Orders</a>
          <a href=''>Sign out</a>  
        </nav>
      }
    </header>
  )
}