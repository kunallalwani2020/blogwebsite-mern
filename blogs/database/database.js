
import mongoose from 'mongoose';
//use async function 

   
  const connection= () =>{
   
    const  Url='mongodb+srv://kirshan:sagar123@blogweb.giot2.mongodb.net/BLOGWEB?retryWrites=true&w=majority'
   mongoose.connect(Url,{  
     //useFindAndModify: false,
     useNewUrlParser: true, 
     useUnifiedTopology: true })
 
  .then(()=>console.log('datavase connected'))
 .catch((error)=>console.log("error" ,error))
 
 }
 export default connection;