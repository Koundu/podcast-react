import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpPage from './assets/pages/SignUpPage.jsx'
import Profile from './assets/pages/Profile'

function App() {

  return (
    <>
      <div className='App'>
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
