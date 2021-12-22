import Post from"../PostSchema/Postschema.js"

export const createPost= async(request ,response)=>{
console.log(request.body)
try{
const post=  await new Post(request.body) 
post.save();

response.status(200).json("Blog saved Successfully")
}
catch(error){
    response.status(500).json(error);
}
}


export const getAllPost= async(request, response)=>{
    //first try catch and after query query use to  dearch username and category and query ko id ki jagah m mention krne ki zaroorat nhn h 
    let username = request.query.username
    let category = request.query.category
    let posts
 
    try{
        if (username)
    posts=  await Post.find({username: username})
        else if (category)
        posts= await Post.find({categories:  category})
        else
       posts = await Post.find({})
        response.status(200).json(posts)
        
    }
    catch(error){
        response.status(500).json(error);
    }
    
} 
export const getPost = async(request, response)=>{
    try{
let post = await Post.findById(request.params.id)
response.status(200).json(post)
    }catch(error){response.status(500).json(error)}
} 

export const updatePost = async(request, response)=>{
    try{
await Post.findByIdAndUpdate(request.params.id,{$set: request.body})
response.status(200).response("Blog updated successfully")
    }catch(error){response.status(500).json(error)}
} 


// export const deleteBlog = async(request, response)=>{
//     try{
// let post= await Post.findById(request.params.id)
// await post.delete();
// response.status(200).response("Blog updated successfully")
//     }catch(error){response.status(500).json(error)}
// } 



export const deleteBlog = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}