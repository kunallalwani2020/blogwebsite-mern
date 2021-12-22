import express from "express";
import mongoose from 'mongoose';
//component
//import Connection from '../database/databasejs';
import Router from "./routes/route.js";
import cors from'cors';
import bodyParser from 'body-parser';
const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));

app.use(bodyParser.urlencoded({extended:false}));
app.use('/',Router)
const port = 8000;


  
const Connection= () =>{
   
   const  Url='mongodb+srv://kunal:1234567890@blog.do5uh.mongodb.net/blog?retryWrites=true&w=majority'
  mongoose.connect(Url,{  
    //ssuseFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true })

 .then(()=>console.log('database connected'))
.catch((error)=>console.log("error" ,error))

}

app.listen(port,()=>console.log(`Server is running successfully ${port}`))

Router.post('/create',()=>{

})


Connection();