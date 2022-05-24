import React from 'react'
import './App.css'

function LoginPage() {
    
  return (
      <>
           <form className='form-control'>
               <div className="container">
                   <div className="form-login">
                         <h1>Login Form</h1>
                   </div>
                  
                    <div className="form-flex"> 
                        <label for="uname"><b>Username:</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />
                    </div>

                    <div className="form-flex">
                        <label for="psw"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                    </div>               
                    <button type="submit">Login</button>    
                </div>
            </form>
      </>
  );
}

export default LoginPage