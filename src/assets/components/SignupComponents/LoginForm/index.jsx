import React from "react"
import { useState } from "react";
import InputComponent from "../../common/input";
import Button from "../../common/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db, storage} from "../../../../firebase";
import { getDoc,doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../slices/userSlice";

const LoginForm = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleLogin = async ()=>{
        console.log("Handling Login...");
        try{
          //Creation of Users Acount
          const userCredential = await signInWithEmailAndPassword(
              auth,
              email,
              password
          );
          const user = userCredential.user;
          console.log("User", user);
          const userDoc = await getDoc(doc(db,"users",user.uid));
          const userData = userDoc.data();
          console.log("UserData", userData);
          
          //Save data to Redux, Calling the Redux Actions
          dispatch(
              setUser(
              {
                  name: userData.name,
                  email:user.email,
                  uid: user.uid,
              }
              ));

              navigate("/profile")
      }catch(e){
          console.log("Error",e)
      }

    }
  return (
    <>
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
    <Button text={"Login"} onClick={handleLogin}/>
    </>
  )
};

export default LoginForm;
