import React from 'react'
import {categories} from'./categories api/api'
import {Link} from"react-router-dom"
import { Button , makeStyles, Table,TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
const useStyle= makeStyles({
button:{
    background: "#172a5d",
    //background-color:#172a5d;
    margin: 20,
   

    

},
table:{
    border: '2px solid rgba(224,224,244,1)'
}
})
function Categories() {
    const classes = useStyle();
    return (
        <>
      <Link to='/Create' style={{textDecoration:'none' ,color:'inherit'}}>   <Button variant="contained" color="primary" className={classes.button} >CREATE BLOG</Button>
      </Link>
       <Table className={classes.table}>
           <TableHead>
               <TableRow>
                  
               <TableCell> <Link to ={'/'}style={{textDecoration:'none', color:'inherit'}}>   All Categories </Link> </TableCell>
                   
                   
               </TableRow>
           </TableHead>
           <TableBody>
              {categories.map(category=>(
                  <TableRow>
                      <TableCell>
                          <Link to ={`/?category=${category}`} style={{textDecoration:'none', color:'inherit'}}>{category}
                          </Link>
                          </TableCell>
                  </TableRow>
              ))}
               
             </TableBody>
       </Table>
       
       
       
       
        </>
    )
}

export default Categories
