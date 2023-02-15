import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
        <div className='brand-title'>Login</div>
        <div className='inputs'>
            <label>Email</label>
            <input type="email" placeholder='example@test.com'></input>
            <label>password</label>
            <input type="password" placeholder='Min 6 characters long'></input>
            <button className='login-button' type='submit'>LOGIN</button>
        </div>
        </div>
  )
}

export default Login