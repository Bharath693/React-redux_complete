import React from 'react';
import  "./header.scss";
import { Link, BrowserRouter,Routes, Route } from "react-router-dom"
import Home from '../../pages/Home';
import Login from '../../pages/Login';

const header = () => {

  return (
    <div className='header'>
        <div className='header--MainContainer'>
            <div className='header--nav'>
                <ul className='header-nav-ul'> 
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <div className='header-nav-ul-rightContent'>
                    <li className='header-nav-ul-rightContent--Login'>
                      <Link to='/login'>Login</Link>
                      </li>
                    {/* <li>
                      Cart
                     <ShoppingCart />
                    </li> */}
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default header