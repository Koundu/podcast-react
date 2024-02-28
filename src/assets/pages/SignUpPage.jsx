import React from "react"
import Header from "../components/common/Header/index.jsx";
import { useState } from "react";
import SignUpForm from "../components/SignupComponents/SignupForm/index.jsx";
import LoginForm from "../components/SignupComponents/LoginForm/index.jsx";

const SignUpPage = () => {

  const [flag, setFlag] = useState(false);

  return (
    <div>
        <Header/>
        <div className="input-wrapper">
          {!flag ? <h1>Signup</h1>:<h1>Login</h1>}
          {!flag ? <SignUpForm/> : <LoginForm/>}
          {!flag ? 
          (<p onClick={()=>{setFlag(!flag)}} style={{cursor:"pointer"}}>Click here, if you already have an Account. Login.</p>): 
          (<p onClick={()=>{setFlag(!flag)}} style={{cursor:"pointer"}}>Don't have an account? Click here to signup.</p>)}
        </div>
    </div>
  )
};

export default SignUpPage;
