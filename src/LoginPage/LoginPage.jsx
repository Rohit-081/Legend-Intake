import React,{useState} from 'react'
import './App.css'

function LoginPage() {
  const [loginData, setLoginData] = useState({ uname: '', psw: ''});
  const [loginDetails, setLoginDetails] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (loginData.uname && loginData.psw) {
      const newPerson = { ...loginData, id: new Date().getTime().toString() };
      setLoginDetails([...loginDetails, newPerson]);
      setLoginData({ uname: '', psw: ''});
    }
    console.log(loginData);
    console.log(loginDetails)
  };

    
  return (
      <>
           <form className='form-control'>
               <div className="container">
                   <div className="form-login">
                         <h1>Login Form</h1>
                   </div>
                  
                    <div className="form-flex"> 
                        <label htmlFor="uname"><b>Username:</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" value={loginData.uname} onChange={handleChange}  required />
                    </div>

                    <div className="form-flex">
                        <label htmlFor="psw"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" value={loginData.psw} onChange={handleChange} required />
                    </div>               
                    <button type="submit" onClick={handleSubmit}>Login</button>    
                </div>
            </form>
      </>
  );
}

export default LoginPage