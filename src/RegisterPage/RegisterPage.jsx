import React from 'react'
import './App.css'
function RegisterPage() {
  return (
     <>
     <form className='form-control'>
                 <div className="container">
                    <div className="form-register">
                        <h1>Create Your Legent Account</h1>
                        <p>Please fill in this form to create an account.</p>
                    </div>
                      
                      <div className="form-flex">
                          <label for="email"><b>Email:</b></label>
                          <input type="text" placeholder="Enter Email" name="email" id="email" required />
                      </div>
                      
                      <div className="form-flex">
                          <label for="psw"><b>Password:</b></label>
                          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                      </div>
                      
                      <div className="form-flex">
                          <label for="psw-repeat"><b>Repeat Password:</b></label>
                          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                      </div>
                    
                          <button type="submit" className="registerbtn">Register</button>
                      
              </div>    
     </form>
   </>
  )
}

export default RegisterPage