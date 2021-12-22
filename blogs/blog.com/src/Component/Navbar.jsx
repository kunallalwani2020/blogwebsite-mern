import React from 'react'
import { AppBar , Toolbar , Typography,makeStyles} from '@material-ui/core';
import {Link, useHistory} from"react-router-dom";
 import { useOktaAuth } from '@okta/okta-react';
import Banners from './Home/Banners';
const useStyle = makeStyles({
   navbar:{
      background:"white",
      color:'black'
   },
    container:{
       justifyContent:'center',
       "& > *":{
  padding: 20,
    }

    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
})
const Navbar=()=> {
const classes = useStyle();
const history = useHistory();
const { oktaAuth, authState } = useOktaAuth();
if (!authState && authState.isPending) return null;

const login = async () => history.push('/login');
const logout = async () => oktaAuth.signOut();
const button = authState.isAuthenticated ?
<button onClick={logout}
style={{background:'unset',
border:'none',
textTransform:'uppercase',}}
>Logout</button> :
<button onClick={login}>Login</button>;
    return (
    <AppBar position="static"className={classes.navbar}>
  <Toolbar className={classes.container}>
<Link to = {'/'} style={{textDecoration:"none", color:'inherit'}}><Typography >HOME</Typography></Link>
<Typography>ABOUT</Typography>
<Typography >{button}</Typography>
{/* <Typography>LOGIN</Typography> */}

  </Toolbar>
 </AppBar>
 

    )
}

export default Navbar
