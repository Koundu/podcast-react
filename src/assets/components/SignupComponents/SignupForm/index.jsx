import React from "react"
import { useState } from "react";
import InputComponent from "../../common/input";
import Button from "../../common/Button";

const SignUpForm = () => {
    const [fullName, setfullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");
  
    const handleSignup = ()=>{
        console.log("Handle Signingup!");
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
    <InputComponent
        state = {password}
        setState = {setPassword}
        placeholder="Password"
        type="password"
        required={true}
    />
    <InputComponent
        state = {confirmPassword}
        setState = {setconfirmPassword}
        placeholder="Confirm Password"
        type="password"
        required={true}
    />
    <Button text={"Signup"} onClick={handleSignup}/>
    </>
  )
};

export default SignUpForm;
