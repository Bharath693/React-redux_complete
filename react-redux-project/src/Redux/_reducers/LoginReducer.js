import React from 'react'
import { loginConstants }from "../_constants/Login.constants";

const initialState = {
   user:""
}
const LoginReducer = (state = initialState,action) => {
const {user} = state;
switch(action.type){
    case loginConstants.LOGIN_SUCCESS:
        return{userName:action.user}
    default :
    return state
}
}

export default LoginReducer