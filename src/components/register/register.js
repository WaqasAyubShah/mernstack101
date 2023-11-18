import React from "react";
import "./register.css"

const Register = ()=> {
    return(
        <div className="register"> 
            <h1> Register </h1>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <input type= "password" placeholder="Password"></input>
            <input type="password" placeholder="Re-enter your Password"></input>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}
export default Register