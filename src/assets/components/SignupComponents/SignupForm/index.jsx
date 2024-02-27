import React from "react"
import { useState } from "react";
import InputComponent from "../../common/input";
import Button from "../../common/Button";
import {
    createUserWithEmailAndPassword,
    
}from "firebase/auth";
import { auth,db, storage} from "../../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../../slices/userSlice";


const SignUpForm = () => {
    const [fullName, setfullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleSignup = async ()=>{
        console.log("Handling Signingup...");

        if(password === confirmPassword && password.length > 6){
        try{
            //Creation of Users Acount
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            console.log("User", user);
            
            //Saving Users Details
            await setDoc(doc(db, "users",user.uid),{
                name: fullName,
                email: user.email,
                uid: user.uid,
            });
            
            //Save data to Redux, Calling the Redux Actions
            dispatch(
                setUser(
                {
                    name: fullName,
                    email:user.email,
                    uid: user.uid,
                }
                ));

                navigate("/profile")
        }catch(e){
            console.log("Error",e)
        }
    }else{
        //throw an Error
    }
    };

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
