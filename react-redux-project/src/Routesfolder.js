import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './pages/Home';
import LoginPage from './pages/Login';


const Routesfolder = () =>{
    return(
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
      </BrowserRouter>
    )
}

export default Routesfolder;