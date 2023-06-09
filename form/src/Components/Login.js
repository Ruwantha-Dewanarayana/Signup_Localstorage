import React, { useState } from 'react'
import {Alert} from 'react-bootstrap';
import Home from './Home'

function Login() {

    const[ emaillog, setEmaillog] = useState("");
    const[ passwordlog, setPasswordlog] = useState("");

    const[ flag, setFlag] = useState("false");
    const[ home, setHome] = useState("true");

function handleLogin(e){
    e.preventDefault();
    let mail= localStorage.getItem("Email").replace(/"/g,"");
    let pass = localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillog || !passwordlog){
        setFlag(true);
        console.log("Empty");
    }else if(passwordlog !==pass || emaillog !== mail){
        setFlag(true);
    }else{
        setHome(!home);
        setFlag(false);
    }
}

  return (
    <div>
        
        {home ? (

        <form onSubmit={handleLogin}>
            <h1>Login</h1>
        <div className='form-group'>
                <label>Email</label>
                <input type="text" className='form-control' placeholder='Enter email'
                onChange={(event)=> setEmaillog(event.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type="text" className='form-control' placeholder='Enter password'
                onChange={(event)=> setPasswordlog(event.target.value)}></input>
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block'>Login</button>
            {flag && (
                <Alert color="primary" variant="danger">
                    Please Fill Every Field
                </Alert>
            )}
            </form>
            ):(
                <Home/>
            )}
    </div>
  )
}

export default Login