import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import About from "./pages/About"
import ProtectedRoute from "./ProtectedRoute.js/ProtectedRoute";
import PageNotFound from './pages/PageNotFound';
import AppLayOut from './AppLayOut';

const Routesfolder = (props) =>{
  const [isAuth, setIsAuth] = useState(false)
    return(
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginPage setIsAuth={setIsAuth}/>}/>
      
      </Routes>
      <>
     {/* <Header />

      <Routes>
       <Route path='/home' element={<ProtectedRoute isAuth={isAuth} Component={<Home />} />}/>
       <Route path='/about' element={<ProtectedRoute isAuth={isAuth} Component={<About />}/>} />
       <Route path='/*' element={<PageNotFound />} />
      </Routes> */}
       <Routes>
         <Route element={<AppLayOut />}>
         <Route path='/home' element={<ProtectedRoute isAuth={isAuth} Component={<Home />} />}/>
         <Route path='/about' element={<ProtectedRoute isAuth={isAuth} Component={<About />}/>} />
        </Route>
        <Route path="/*" element={<PageNotFound />}/>
       </Routes>
      </>
      </BrowserRouter>
    )
}

export default Routesfolder;