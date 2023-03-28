import React, { useState } from 'react'
import {Alert} from 'react-bootstrap';
import Login from './Login';

function Registration() {

    const[ name, setName] = useState("");
    const[ email, setEmail] = useState("");
    const[ password, setPassword] = useState("");
    const[ phone, setPhone] = useState("");

    const[ flag, setFlag] = useState("false");
    const[ login, setLogin] = useState("true");

function handleSubmit(e){
    e.preventDefault();

    if(!name || !email || !password || !phone){
        setFlag(true);
    }else{
        setFlag(false);
        localStorage.setItem("Email",JSON.stringify(email));
        localStorage.setItem("Password",JSON.stringify(password));

        console.log("saved in local storage");
        setLogin(!login);
    }
}

function handleClick(){
    setLogin(!login);
}

  return (
    <div className='p-4'>
        {login ?(
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" className='form-control' placeholder='Enter name' 
                onChange={(event)=> setName(event.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" className='form-control' placeholder='Enter email'
                onChange={(event)=> setEmail(event.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="password" className='form-control' placeholder='Enter password'
                onChange={(event)=> setPassword(event.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Phone No.</label>
                <input type="phone" className='form-control' placeholder='Enter contact number'
                onChange={(event)=> setPhone(event.target.value)}></input>
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block '>Register</button>
            <p className='forgot-password text-right' onClick={handleClick}>Already registered {" "} login in? </p>

            {flag && (
                <Alert color="primary" variant="danger">
                    Please Fill Every Field
                </Alert>
            )}

        </form>
):(
        <Login/>
        )}
    </div>
  )
}

export default Registration;