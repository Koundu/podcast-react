import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpPage from './assets/pages/SignUpPage.jsx'
import Profile from './assets/pages/Profile'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";

function App() {
  return (
    <>
      <div className='App'>
        <ToastContainer/>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignUpPage/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
