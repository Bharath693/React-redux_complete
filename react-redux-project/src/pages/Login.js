import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/Login.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { UserDetails } from './NoteState';

const Login = () => {
  const users = useState({
    Name:"",
    Password:""
  })
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
      <TextField id="outlined-basic" label="username" variant="outlined" />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="password" variant="outlined" />
    </Box>
    <div>
      <button className='Login--Maincomponent--SubmitBtn'>Submit</button>
    </div>
      </div>
    </div>
  )
}

export default Login