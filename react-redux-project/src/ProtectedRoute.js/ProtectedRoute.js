import React from 'react'
import { Navigate} from "react-router-dom"
const ProtectedRoute = ({isAuth:isAuth,componene:Component,rest}) => {
  return (
    <Route 
    {...rest}
    render ={(props) =>{
       if(isAuth){
           return <Component />
       }
       else{
           return (
               <Navigate to="/" />
           )
       }
    }}
    />
  )
}

export default ProtectedRoute