// import {React, useState , useEffect} from 'react'
// import Post from './Post'
// import {Grid} from '@material-ui/core'
// import {Link , useLocation } from "react-router-dom"
// import {getAllPost}from'../../Services/Api.js'



// const Posts = () => {
//  // let posts=[1,2,3,4]
//   const [posts, getPosts] = useState([]);
//   //const { search } = useLocation();
//   const {search} = useLocation();
// //uselocation is used for query 
//   useEffect(() => {
//       const fetchData = async () => { 
//           let data = await getAllPost(search); // params in url
//           console.log(data)
//           getPosts(data)
//       }
//       fetchData();
//   }, [search]);


//   return (   
//     posts.map((post) => (
//     <Grid item lg={3} sm={4} xs={12}>
//         <Link to={`/details/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}} >
//             <Post post={post}/>
//         </Link>
//     </Grid>
   
         
//           )    
        
    
     
//           )      
//    )    
// }
// export default Posts;

import {React, useState , useEffect} from 'react'
import Post from './Post'
import Detail from './Post/Detail.jsx'
import {Grid} from '@material-ui/core'
import {Link , useLocation } from "react-router-dom"
import {getAllPost}from'../../Services/Api.js'



const Posts = () => {
 // let posts=[1,2,3,4]
  const [posts, getPosts] = useState([]);
  //const { search } = useLocation();
  const {search} = useLocation();
//uselocation is used for query 
  useEffect(() => {
      const fetchData = async () => { 
          let data = await getAllPost(search); // params in url
          console.log(data)
          getPosts(data)
      }
      fetchData();
  }, [search]);

 
   return (   
    posts.map((post) => (
    <Grid item lg={3} sm={4} xs={12}>
        <Link to={`/details/${post._id}`} style={{textDecoration: 'none', color: 'inherit'}} >
            <Post post={post}/>
          
        </Link>
    </Grid>
   
         
          )    
        
    
     
          )      
   )    
}
export default Posts;
