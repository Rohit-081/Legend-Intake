import React, { useState }  from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({ username:'', email: '', psw: ''});
  const [registerDetails, setRegisterDetails] = useState([]);
  const nav = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.email && registerData.psw && registerData.username) {
      const newPerson = { ...registerData, id: new Date().getTime().toString() };
      setRegisterDetails([...registerDetails, newPerson]);
      setRegisterData({ email: '', psw: '', username:'' });
    }
    console.log(registerData);
    console.log(registerDetails);
  };

   const PostData =  async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/vi/users", {
              method: "POST",
              headers:{
                    "Content-Type" : "application/json"
              },
              body: JSON.stringify({
                userName : registerData.username,
                email: registerData.email,
                password : registerData.psw
               })
            });
        const data = await res.json();

        if(data.status === 500 || !data){
              window.alert("Invalid Registration");
              console.log("Invalid Registration");
        }else{
              window.alert("Registration Successful");
              console.log("Registration Successful");
        }
        nav("/login");
      };

  return (
     <>
     <article>
     <form className='form-control'>
                 <div className="container">
                    <div className="form-register">
                        <h1>Create Your Legend Account</h1>
                    </div>

                      <div className="form-flex">
                          <label htmlFor="username"><b>Enter Username:</b></label>
                          <input type="text" placeholder="Enter Username" name="username" value={registerData.username} onChange={handleChange} id="username" required />
                      </div>
                      
                      <div className="form-flex">
                          <label htmlFor="email"><b>Email:</b></label>
                          <input type="text" placeholder="Enter Email" name="email" value={registerData.email} onChange={handleChange} id="email" required />
                      </div>
                      
                      <div className="form-flex">
                          <label htmlFor="psw"><b>Password:</b></label>
                          <input type="password" placeholder="Enter Password" name="psw" value={registerData.psw} onChange={handleChange} id="psw" required />
                      </div>
                      
                      <button type="submit" className="registerbtn" onClick={PostData}>Register</button>
                      
              </div>    
     </form>
     </article>
     <article>
       {registerDetails.map((data)=>{
         return (
         alert("Registration Successfully")
         )
       })}
     </article>
   </>
  )
}

export default RegisterPage