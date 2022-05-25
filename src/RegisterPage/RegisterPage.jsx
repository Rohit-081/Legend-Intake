import React, { useState }  from 'react'
import './App.css'


const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({ email: '', psw: '', pswrepeat: '' });
  const [registerDetails, setRegisterDetails] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (registerData.email && registerData.psw && registerData.pswrepeat) {
      const newPerson = { ...registerData, id: new Date().getTime().toString() };
      setRegisterDetails([...registerDetails, newPerson]);
      setRegisterData({ email: '', psw: '', pswrepeat: '' });
    }
    console.log(registerData);
    console.log(registerDetails);
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
                          <label htmlFor="email"><b>Email:</b></label>
                          <input type="text" placeholder="Enter Email" name="email" value={registerData.email} onChange={handleChange} id="email" required />
                      </div>
                      
                      <div className="form-flex">
                          <label htmlFor="psw"><b>Password:</b></label>
                          <input type="password" placeholder="Enter Password" name="psw" value={registerData.psw} onChange={handleChange} id="psw" required />
                      </div>
                      
                      <div className="form-flex">
                          <label htmlFor="pswrepeat"><b>Repeat Password:</b></label>
                          <input type="password" placeholder="Repeat Password" name="pswrepeat" value={registerData.pswrepeat} onChange={handleChange} id="pswrepeat" required />
                      </div>
                    
                      <button type="submit" className="registerbtn" onClick={handleSubmit}>Register</button>
                      
              </div>    
     </form>
     </article>
     <article>
       {registerDetails.map((data)=>{
         return (
         <div>
           <h4>{data.email}</h4>
           <h4>{data.psw}</h4>
           <h4>{data.pswrepeat}</h4>
         </div>
         )
       })}
     </article>
   </>
  )
}

export default RegisterPage