import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpPage from './assets/pages/SignUpPage.jsx'
import Profile from './assets/pages/Profile.jsx'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { setUser } from './slices/userSlice';
import { useDispatch } from 'react-redux';
import CreateAPodcastPage from './assets/pages/CreateAPodcast';
import PodcastsPage from './assets/pages/Podcasts';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribeAuth = onAuthStateChanged( auth,(user)=>{
      if(user){
        const unsubscibeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc)=>{
            if(userDoc.exists()){
              const userData = userDoc.data();
              dispatch(
                setUser(
                  {
                    name: userData.name,
                    email: userData.email,
                    uid: user.uid,
                  }
                )
              );
            }
          },(error)=>{console.error("Error fetching user data: ", error);}
        );
        return()=>{
          unsubscibeSnapshot();
        }
      }
    }
    )
    unsubscribeAuth();
  })
  return (
    <>
      <div className='App'>
        <ToastContainer/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignUpPage/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/create-a-podcast" element={<CreateAPodcastPage/>}/>
                    <Route path="/podcasts" element={<PodcastsPage/>}/>                   
              </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
