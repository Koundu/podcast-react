import React from "react"
import { useState } from "react";
import InputComponent from "../../common/input";
import Button from "../../common/Button";

const LoginForm = () => {
    const [fullName, setfullName] = useState("");
    const [email,setEmail] = useState("");
  
    const handleLogin = ()=>{
        console.log("Handle Login!");
    }
  return (
    <>
    <InputComponent
        state = {fullName}
        setState = {setfullName}
        placeholder="Full Name"
        type="text"
        required={true}
    />
    <InputComponent
    state = {email}
    setState = {setEmail}
    placeholder="EMail"
    type="email"
    required={true}
    />
    <Button text={"Login"} onClick={handleLogin}/>
    </>
  )
};

export default LoginForm;
