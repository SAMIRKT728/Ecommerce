import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom";

import LoginForm from './Layouts/auth/sign-in/login';
import RegisterForm from './Layouts/auth/sign-up/registro';
import Home from './Layouts/Home/main';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/sign-in" element={<LoginForm/>}/>
      <Route path='/sign-up' element={<RegisterForm/>}/>
    </Routes>
    </>
  )
}

export default App
