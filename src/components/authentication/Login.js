import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
        <div className='brand-title'>Please Login</div>
        <div className='inputs'>
            <label>EMAIL</label>
            <input type="email" placeholder='example@test.com'></input>
            <label>PASSWORD</label>
            <input type="password" placeholder='Min 6 characters long'></input>
            <button type='submit'>LOGIN</button>
        </div>
        </div>
  )
}

export default Login