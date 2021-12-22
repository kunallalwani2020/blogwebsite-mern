import {React, useState,useEffect} from 'react'
import {Box, makeStyles,FormControl, InputBase ,Button, TextareaAutosize} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { getPost,updatePost } from '../../../Services/Api';
import { useHistory } from 'react-router';
const useStyle= makeStyles((theme)=> ({
    container:{
  padding:"0 100px",
 [theme.breakpoints.down('md')]:{
   padding:'0',
 }
    },
    image:{
        width:'100%',
        height:'50vh',
      objectFit:'cover'

    },
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:10,

    },
    text:{
flex:1,
margin: '0 10px',
fontSize:20,
wordBreak:'word-break',
outline: 'none',
border: 'none',

    },
    Textarea:{
        width:'100%',
        marginTop:'50',
        border: 'none',
        fontSize:'18',
        outline: 'none',
        '& focus-visible':{
            outline: 'none'
        }
    }
}))

const initalValue={
    title:'',
    description: '',
    picture: '',
    username: 'hey code ',
    categories: 'all movie ',
    createdate: new Date(),
}
function UpdateVeiw({match}) {
    const classes= useStyle();
    const url='https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  const[post,setPost]= useState(initalValue);
const history=useHistory()
 
useEffect(()=>{
      const fatch = async()=>{
          let data = await getPost(match.params.id);
          console.log(data)
          setPost(data)
      }
      fatch();
  },[])
  const handleChange =(e)=>{
    setPost({...post,[e.target.name]: e.target.value})
    console.log(e.target.value)
}

const updatepost= async()=>{
   await updatePost(match.params.id, post);
     history.push(`/details/${match.params.id}`);

    }
  return (
<Box className={classes.container}>
          <img src={url} alt="" className={classes.image} style={{objectFit:"cover"}}/>
          <FormControl className={classes.form}>
              <AddCircleIcon fontsize='large'  color='action'/>
              {/* <InputBase onchange={(e)=>handleChange(e)} name='title' placeholder="Title"  className={classes.text} >{post.title}</InputBase> */}
              {/* <InputBase  value={post.title}  onchange={(e)=>handleChange(e)} name='title' placeholder="Title" className={classes.text} /> */}
              <TextareaAutosize  onChange={(e) => handleChange(e)}  rowsMin={2} value={post.title}  name='title' placeholder="Title" className={classes.text}  style={{wordBreak:'break-word'}}/>
             
             
          </FormControl>
         
          {/* <TextareaAutosize  name='description' onchange={(e)=>handleChange(e)}  value={post.title} placeholder="Tell your story...."className={classes.Textarea}> {post. description}</TextareaAutosize> */}
          <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.Textarea}
                name='description'
                onChange={(e) => handleChange(e)} 
                value={post.description}
            />
             <Button variant="contained" color="primary" onClick={()=>updatepost()}>UPDATE</Button>
</Box>
    )
}

export default UpdateVeiw
