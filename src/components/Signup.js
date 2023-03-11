import React from 'react'
import './Signup.css';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Grid, Stack, Typography,TextField,Button, IconButton} from "@mui/material";
import {signInWithGoogle} from './config';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate();
   const next=()=>{
    signInWithGoogle();
    navigate("/News")
   }
  return (
    <div className="bg">
        <Grid className="container" sx={{height:"400px",borderRadius:"20px",backgroundColor:"white",width:{xs:200,md:250}}}>
          <img  className="hero"src="space.jpg"></img>
          <Grid columspacing={0} className="heading">
            <h4 className='h3'>WELCOME TO BARDEEN</h4>
            <p  style={{color:"grey",fontSize:"13px",margin:'2px'}}>Let's log in to launch your automation</p>
           
          </Grid>
          <Grid  mt={1} rwoSpacing={2} sx={{marginLeft: 'auto',marginRight:'auto',width:{xs:180,md:230}}}>
          <TextField   margin="dense"  size='small' label="Email" variant='outlined' />
          <TextField  size='small' label="Password" variant='outlined' />
          </Grid> 
          <Grid className='options'>
        <p>Create Account</p>
        <p>Forgot Password?</p>
      </Grid>
      <Grid>
      <button style={{marginLeft:"5%"}} className='signup'>Sign in</button>     
      </Grid>
      <IconButton sx={{marginLeft:"28%"}} size="large" onClick={()=>next()}><GoogleIcon/></IconButton>
      <IconButton size="large"><GitHubIcon/></IconButton>

      </Grid>
    </div>
  )
}

export default Signup
