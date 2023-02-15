import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className='signup-container'>
      <div className='sign-brand'>Sign up</div>
      <div className='signup-inputs'>
        <label>First Name</label>
        <input className='sign-input' type='text' placeholder='enter your first name'></input>
        <label>Second Name</label>
        <input className='sign-input' type='text' placeholder='enter your last name'></input>
        <label>Email</label>
        <input className='sign-input' type='email' placeholder='example@test.com'></input>
        <label>Username</label>
        <input className='sign-input' type='text' placeholder='enter your username'></input>
        <label>Password</label>
        <input className='sign-input' type='password' placeholder='Min 6 characters long'></input>
        <label>Confirm password</label>
        <input className='sign-input' type='password' placeholder='Min 6 characters long '></input>
        <button type='submit' className='signup-btn'>SignUp</button>
      </div>
      </div>
  )
}

export default Signup