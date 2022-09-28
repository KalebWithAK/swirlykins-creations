import { Link } from 'react-router-dom'
import '../styles/pages/register.css'

export default function Register() {
  return (
    <form className='register-page'>
      <h2>Create an Account</h2>

      <div className='info'>
        <input id='fName' type='text' />
        <label htmlFor='fName'>First Name</label>

        <input id='lName' type='text' />
        <label htmlFor='lName'>Last Name</label>

        <input id='email' type='email' />
        <label htmlFor='email'>Email</label>

        <input id='password' type='password' />
        <label htmlFor='password'>Password</label>
      </div>
      <div className='address'>
        <input id='addressLine1' type='text' />
        <label htmlFor='addressLine1'>Address Line 1</label>

        <input id='addressLine2' type='text' />
        <label htmlFor='addressLine2'>Address Line 2</label>

        <input id='addressLine3' type='text' />
        <label htmlFor='addressLine3'>Address Line 3</label>

        <input id='city' type='text' />
        <label htmlFor='city'>City</label>

        <select>
          <option>State</option>
        </select>

        <input id='zip' type='text' />
          <label htmlFor='zip'>Zip Code</label>
      </div>

      <input type='submit' value='Create Account' />

      <div className='login'>
        <p>Already have an account?</p>
        <Link to='/login'><a>Login</a></Link>  
      </div>
    </form>
  )
}