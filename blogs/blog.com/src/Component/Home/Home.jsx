import React from 'react'
import Banners from './Banners'
import Categories from './Categories'
import Posts from './Posts'
import Footer from"./Footer.jsx"
import {  Grid} from '@material-ui/core';
const home = () => {
    return (
        <div>
      
            <Banners/>
            <Grid container>
                <Grid item lg={2} xs={12} s={2}><Categories/></Grid>
                <Grid container item lg={10} xs={12} s={10}><Posts/></Grid>
</Grid>
{/* <Footer/> */}
</div>
    )
}
    
export default home
