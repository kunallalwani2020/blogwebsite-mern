import React, { useEffect, useState } from 'react'
import {Box, makeStyles,FormControl, InputBase ,Button, TextareaAutosize} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { createPost,uploadfile } from '../../../Services/Api';
import { useHistory } from 'react-router-dom';
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
wordBreak: 'break-word'
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
function CreateView() {
    const classes= useStyle();
    const url='https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
 
    const history  =  useHistory();
    const [post ,setPost]= useState(initalValue);
    const [file,setFile] = useState('');
   
    useEffect(()=>{
        const imageData = async()=>{
         console.log(file)
            if(file){
                const data = new FormData();
                data.append('name',file.name);
                data.append('file',file);

                await uploadfile(data)
            }

        }
imageData();
    },[file])


const handleChange =(e)=>{
    setPost({...post,[e.target.name]: e.target.value})
    console.log(e.target.value)
}

const savePost= async()=>{
     await createPost(post);
   history.push('/');
}

    return (
<Box className={classes.container}>
          <img src={url} alt="" className={classes.image} style={{objectFit:"cover"}}/>
          <FormControl className={classes.form}>
            <label htmlFor="inputeFile">
              <AddCircleIcon fontsize='large'  color='action'/>
              </label>
              <input type="file" 
              id="inputeFile"
             onChange={(e)=>setFile(e.target.files[0])}
            
              style={{display:'none'}}
              />
              <InputBase onChange={(e) => handleChange(e)} name='title' placeholder="Title"className={classes.text}  />
              <Button variant="contained" color="primary" onClick={()=>savePost()}>PUBLISH</Button>
          </FormControl>
          {/* <TextareaAutosize  onchange={(e)=>handleChange(e)} rowMin={5} placeholder="Tell your story...."  name="description"className={classes.Textarea}   ></TextareaAutosize> */}
          <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.Textarea}
                name='description'
                onChange={(e) => handleChange(e)} 
            />
            
</Box>
    )
}

export default CreateView
