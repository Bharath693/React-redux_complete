import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/Login.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { UserDetails } from './NoteState';
import { userActions } from "../Redux/_actions/Login.actions"
import { useDispatch } from 'react-redux';
import Header from '../Components/Header/header';

const Login = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [users,setUsers] = useState({
    Name:"",
    Password:""
  })

const handleChange = (event) =>{
   setUsers({
     ...users,
     [event.target.name]:event.target.value,
   })
}

const handleSubmit = () =>{
   dispatch(userActions.login(users,"succ"));
   props.setIsAuth(true)
   navigation("/home")
}

  return (
    <div className='Login--Maincomponent'>
      <div className='Login--Maincomponent--InputDiv'>
        <p className='Login--Maincomponent--LoginText'>Login</p>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label="username" 
      variant="outlined" 
      name="Name"
      value={users.Name}
      onChange={handleChange}
      />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label="password" 
      variant="outlined" 
      name="Password"
      value={users.Password}
      onChange={handleChange}
      />
    </Box>
    <div>
      <button 
      className='Login--Maincomponent--SubmitBtn'
      onClick={() =>handleSubmit()}
      >
        Submit
      </button>
    </div>
      </div>
    </div>
  )
}

export default Login