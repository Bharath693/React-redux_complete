import { loginConstants } from "../_constants/Login.constants"

const login = (userObj,flag) =>{
  return (dispatch) =>{
      if(flag === "succ"){
          dispatch(success(userObj))
      }
      else{
          dispatch(failure())
      }
      const success = (user) =>{
         return {type:loginConstants.LOGIN_SUCCESS, user}
      }
      const failure = () =>{
          return {type:loginConstants.LOGIN_FAILURE}
      }
  }
}