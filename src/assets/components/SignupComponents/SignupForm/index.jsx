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
import { toast } from "react-toastify";
import LoginForm from "../LoginForm";


const SignUpForm = () => {
    const [fullName, setfullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setconfirmPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleSignup = async ()=>{
        console.log("Handling Signingup...");
        setLoading(true);
        if(password === confirmPassword && password.length >= 6 && fullName && email){
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
                toast.success("User has been Created!");
                setLoading(false);
                navigate("/profile");
        }catch(e){
            console.log("Error",e);
            toast.error(e.message);
            if(e.message == "FirebaseError: Firebase: Error (auth/email-already-in-use)."){
                <LoginForm/>
            }
            setLoading(false);
        }
    }else{
        //Settingup of the Error Messages
        if(password != confirmPassword){
            toast.error("Please Make Sure your password and Confirm Password are Matched!");
        }else if(password.length<6){
            toast.error("Please Make Sure your password characters are more than 6");           
        }
        setLoading(false);
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
    <Button text={loading ? "Loading...":"Signup"} disabled={loading} onClick={handleSignup}/>
    </>
  )
};

export default SignUpForm;
