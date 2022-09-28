import { Link } from 'react-router-dom'
import '../styles/pages/login.css'
export default function Login() {
  function handleSubmit(e) {
    e.preventDefault()

    alert('Sign in submitted')
  }

  return (
      <form className='login-page' onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <input id='email' type='email' required />
        <label htmlFor='email'>Email</label>
        
        <input id='password' type='password' required />
        <label htmlFor='password'>Password</label>
        <input type='submit' value='Sign In' />

        <div className='register'>
          <p>or</p>
          <Link to='/register'><a>Create an Account</a></Link>  
        </div>
      </form>
  )
}