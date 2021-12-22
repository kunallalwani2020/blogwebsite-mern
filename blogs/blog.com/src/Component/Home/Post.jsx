import React from 'react'
import { makeStyles, Box, Typography} from '@material-ui/core';

const useStyle  = makeStyles({
   container:{
    height :300,
    margin:10,
    heightBottom:'300',
    border: '2px solid rgba(224,224,244,1) ',
    borderRadius: 20,
    display: ' flex',
    alignItem: "center",
    flexDirection:'column',
    justifyContent:'center',

   

},
text:{
    textAlign:'center',
    padding: '0px 1px 1px 1px',
    color: '#878787',
    fontSize:'12px',
    marginBottom:'10px'
},
heading:{
    fontSize:'18',
    fontWeight:'600',
    textAlign:'center',

},
detail:{
    fontSize:'14',
    textAlign:'center',
    wordBreak: 'break-word',
    marginBottom:'10px'
},
image:{
       height:'100%',
       width:'100%',
       objectFit:'cover',
       borderRadius: '10px 10px 0 0 ',
      

   }
})
function Post({post}) {
    const classes = useStyle();
const url = post.picture || "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80"
const addElipsis=(str,limit)=>{
  return str.length>limit? str.substring(0,limit)+ '...': str;   
}
return (
//         <Box className = {classes.container}>
//             <img src={url} alt = "wrapper" className={classes.image}></img>
// <Typography className={classes.text}>{post.categories}</Typography>
// <Typography className={classes.heading}>{post.title}</Typography>
// <Typography className={classes.text}>{post.username}</Typography>
// <Typography className={classes.detail}>{post.description}</Typography>
//         </Box>
    
<div className="card-group" style={{ margin:10,  borderRadius: 20,}}>
  <div className="card">
    <img className="card-img-top" src={url} alt="Card image cap" />
    <div className="card-body">
    <p className={classes.text}>{post.categories}</p>
      <h5 className={classes.heading}>{addElipsis(post.title , 10)}</h5>
      <p className={classes.text}>{post.username}</p>
      <p className={classes.detail}>{addElipsis(post.description,50)}</p>
      <p className="card-text"><small className="text-muted">{new Date(post.createdate).toDateString()}</small></p>
    </div>
  </div>
</div>




)
}

export default Post
