import React from 'react';
import {Box} from"@material-ui/core";
import {BrowserRouter, Route, Switch } from "react-router-dom"
 import AppWithRouterAccess from './AppWithRouterAccess'
// import Navbar from "./Component/Navbar.jsx";
// import Detail from"./Component/Home/Post/Detail"
// import Home from "./Component/Home/Home.jsx";
// import Contact from './Component/Home/Contact.jsx';
// import Footer from"./Component/Home/Footer.jsx";
// import CreateView from './Component/Home/Post/CreateView.jsx';
// import UpdateVeiw from './Component/Home/Post/UpdateVeiw.jsx';
// import About from './Component/Home/About.jsx';
// import Login from'./Component/account/Login.js';

function App() {
  return (
    <BrowserRouter>
<AppWithRouterAccess>
  {/* <Navbar/>
    <Box  style={{marginTop:'auto'}}> 
      <Switch>
        <Route exact path='/'component={Home}></Route>
    <Route exact path='/details/:id' component={Detail}></Route>
    <Route exact path='/Create' component={CreateView}></Route>
    <Route exact path='/Update/:id' component={UpdateVeiw}></Route>
    <Route exact path='/Update/:id' component={UpdateVeiw}></Route> 
    <Route exact path='/ContactUS' component={Contact}></Route> 
    <Route exact path='/aboutus' component={About}></Route>  */}
    {/* <Route exact path= '/login'component={Login}></Route> */}

    {/* </Switch>  */}
     {/* </Box>  */}
     </AppWithRouterAccess>
     {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
