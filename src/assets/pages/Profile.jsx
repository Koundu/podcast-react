import React, { useState } from "react"
import { useSelector } from "react-redux";
import Header from "../components/common/Header";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import Button from "../components/common/Button";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";

const Profile = () => {
    const user = useSelector((state)=>state.user.user);
    const navigate = useNavigate();
    //Loading Component for the Profile
    console.log("My User is", user);
    if(!user){
      if(setTimeout(() => {
        <p>Loading...</p>
      }, 100)){
        toast.error("Please Ensure All the details are Correct!")
      }
    }

    const handleLogout = ()=>{
      signOut(auth).then(()=>{
        toast.success("User Logged Out!");
        navigate("/");
      }).catch((error)=>{
        toast.error(error.message)
      })
    }
  return (
    <div>
        <Header/>
        <h1><span id="waving-hand">&#128075;</span> {user.name}</h1>
        <h2>EMail: {user.email}</h2>
        <h2>UID: {user.uid}</h2>
        <Button text={"Logout"} onClick={handleLogout}/>
    </div>
  )
};

export default Profile;
