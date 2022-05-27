import React,{useState} from 'react'
import './App.css'
import { useNavigate } from "react-router-dom";



function LoginPage() {
  const [loginData, setLoginData] = useState({ uname: '', psw: ''});
  const [loginDetails, setLoginDetails] = useState([]);
  const nav = useNavigate();

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

   const PostData =  async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:3000/api/vi/users/login", {
              method: "POST",
              headers:{
                    "Content-Type" : "application/json"
              },
              body: JSON.stringify({
                userName : loginData.uname,
                password : loginData.psw
               })
            });
        const data = await res.json();
        localStorage.setItem("UserInfo",JSON.stringify(data))
         nav("/");

        if(data.status === 200 || data){
              window.alert("Login Successful");
              console.log("Login Successful");
              
        }else{
              window.alert("Invalid Login");
              console.log("Invalid Login");
        }
      };

    
  return (
      <>
           <form className='form-control' method="GET">
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
                    <button type="submit" onClick={PostData}>Login</button>    
                </div>
            </form>
      </>
  );
}

export default LoginPage