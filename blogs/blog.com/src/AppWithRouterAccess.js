import React from 'react';
import {Box} from"@material-ui/core";
import {useHistory, Route, Switch } from "react-router-dom"
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Navbar from "./Component/Navbar.jsx";
import Detail from"./Component/Home/Post/Detail"
import Home from "./Component/Home/Home.jsx";

import CreateView from './Component/Home/Post/CreateView.jsx';
import UpdateVeiw from './Component/Home/Post/UpdateVeiw.jsx';
import Footer from"./Component/Home/Footer.jsx";
import Login from './Component/account/Login.jsx';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import About from './Component/Home/About.jsx';

const oktaAuth = new OktaAuth(oktaAuthConfig);



function AppWithRouterAccess() {
   
        const history = useHistory();
      
        const customAuthHandler = () => {
          history.push('/login');
        };
      
        const restoreOriginalUri = async (_oktaAuth, originalUri) => {
          history.replace(toRelativeUrl(originalUri, window.location.origin));
        };
  return (
    <Security
    oktaAuth={oktaAuth}
    onAuthRequired={customAuthHandler}
    restoreOriginalUri={restoreOriginalUri}
  >

     <SecureRoute path='/' component={Navbar}/>
    <Box  style={{marginTop:'auto'}}> 
      <Switch>
        <Route exact path='/'component={Home}></Route>
        <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
        <Route path='/login/callback' component={LoginCallback} />
    <Route exact path='/details/:id' component={Detail}></Route>
    <Route exact path='/Create' component={CreateView}></Route>
    <Route exact path='/Update/:id' component={UpdateVeiw}></Route>
    <Route exact path='/Update/:id' component={UpdateVeiw}></Route>
    <Route exact path='/aboutus' component={About}></Route> 
    

    </Switch>
    </Box> 
    <Footer/>
</Security>
  
  );
}

export default AppWithRouterAccess;
