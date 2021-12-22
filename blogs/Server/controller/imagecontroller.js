
const URL = 'http://localhost:3000';
export const uploadImage  =(request,response)=>{
try{
    if(!request.file)
return response.status(404).json("file not found")

const imageURL =`${URL}/file/${request.file.filename}` 
response.status(200).json(imageURL)
}catch(error){
    
    response.status(500).json("Error while uploading image ",error)
}
}


// export const uploadImage = (request, response) => {
//     if(!request.file) 
//         return response.status(404).json("File not found");
    
//     const imageUrl = `${url}/file/${request.file.filename}`;

//     response.status(200).json(imageUrl);    
// }