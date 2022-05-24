import React from 'react'
import './App.css'

function LoginPage() {
    
  return (
      <>
           <form>
               <div className="container">
                   <h1>Login Form</h1>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </div>
            </form>
      </>
  );
}

export default LoginPage