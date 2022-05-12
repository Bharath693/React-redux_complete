import { Outlet } from "react-router-dom"
import Header from "./Components/Header/header"
import React from 'react'

const AppLayOut = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default AppLayOut