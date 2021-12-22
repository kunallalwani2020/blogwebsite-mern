import axios from 'axios';
const URL = 'http://localhost:8000';
export const createPost= async(post)=>{
   try{
       return await  axios.post(`${URL}/create`, post )
   }catch(error){console.log("error while fetch api",error)}
}
///post in  the header   param use to query
export const getAllPost = async(param)=>{
    try{
        let response =  axios.post(`${URL}/posts${param}` )
        return (await response).data

    }
    catch(error){console.log("error while fetch api ")}
}

export const getPost = async(id)=>{
    try{
        let response = axios.post(`${URL}/post/${id}`);
        return (await response).data
    }catch(error){console.log("error while fetch api ")}
}

export const updatePost = async(id,post)=>{
    try{
      await  axios.post(`${URL}/update/${id}`,post);
    }catch(error){console.log("error while fetch api ")}

}


export const deleteBlog = async(id)=>{
    try{
       await axios.delete(`${URL}/delete/${id}`);
       
    }catch(error){console.log("error while delete fetch api ")}

}


// export const uploadfile  = async(data)=>{
//     try{
//       return await axios.post(`${URL}/file/upload`,data);
       
//     }catch(error){
//         console.log("error while uploadfile fetch api ",error)}

// }


export const uploadfile = async(data)=>{
    try{
        return await axios.post(`${URL}/file/upload`,data);
    }
    catch(error){
        console.log("Error while uploadimage ",error)
    }
}