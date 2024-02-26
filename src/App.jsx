import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpPage from './assets/pages/SignUp.jsx'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
