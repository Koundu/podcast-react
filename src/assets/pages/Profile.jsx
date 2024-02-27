import React from "react"
import { useSelector } from "react-redux";
import Header from "../components/common/Header";

const Profile = () => {
    const user = useSelector((state)=>state.user.user);
    console.log("My User is", user);
  return (
    <div>
        <Header/>
        <h1><span id="waving-hand">&#128075;</span> {user.name}</h1>
        <h2>EMail: {user.email}</h2>
        <h2>UID: {user.uid}</h2>
    </div>
  )
};

export default Profile;
