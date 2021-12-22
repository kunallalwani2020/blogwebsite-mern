import React from 'react';
import {Link, useHistory} from"react-router-dom";
import {  Typography,makeStyles, Box} from '@material-ui/core';
//import {Link, useHistory} from"react-router-dom";
 import { useOktaAuth } from '@okta/okta-react';
import '../Home/banner.css';
const useStyle = makeStyles({
    image:{
background:`url(${'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})center/55%  repeat-x #000` ,
backgroundRepeat:"none",

width: '100%',
height: '50vh',
display: 'flex',
flexDirection: 'column',
alignItem: 'center',
justifyContent: 'center',

 '& :first-child':{
     fontSize: 50,
     color: 'white',
     lineHeight: 1

 },
 '& :last-child':{
   fontSize: 20,
   color: "white",


}

},


})
function Banners() {
    const classes = useStyle();
//     const history = useHistory();
//     const { oktaAuth, authState } = useOktaAuth();
// if (!authState && authState.isPending) return null;

// const login = async () => history.push('/login');
// const logout = async () => oktaAuth.signOut();
// const button = authState.isAuthenticated ?
// <button onClick={logout}>Logout</button> :
// <button onClick={login}>Login</button>;
    return (
    //    <Box className={classes.image}>
    //        <Typography>LALWANI</Typography>
    //        <Typography>BLOG</Typography>
    //        </Box>
   
<div className="header">
  <div className="slider">
    <div className="container">
      <div className="intro">
        <h2> Blog Website</h2>
        <button >Create Blog</button>
      </div>
    </div>
  </div>
  <div className="navbar">
    <div className="container">
      <h2 className="fl-left">Blog<span>gers</span></h2>
      <ul>
     <Link to = {'/'} style={{textDecoration:"none", color:'inherit'}}>  <li className="active"><a href="#">Home</a></li></Link>
       <Link to ={'/aboutus'} style={{textDecoration:"none", color:'inherit'}}> <li><a href="#">TEAM</a></li></Link>
        {/* <li><a href="#">Skills</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Testemonials</a></li>
        <li><a href="#">Protofolio</a></li> */}
       <Link to ={'/ContactUS'}style={{textDecoration:"none", color:'inherit'}}>  <li><a href="#">Contact Me</a></li></Link>
    
      </ul>
    </div>
  </div>
</div>




    )
}

export default Banners
