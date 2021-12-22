import {React , useState, useEffect} from 'react'
import {Box, makeStyles,Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link, useHistory } from "react-router-dom"
import EditIcon  from '@material-ui/icons/Edit';
import './detail.css';
import { getPost ,deleteBlog} from '../../../Services/Api';
import { useOktaAuth } from "@okta/okta-react";


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
    icons:{
    
      float:"right"
    },
    icon:{
      
      border:'1px solid #878787',
      cursor: 'pointer',
 borderRadius:5,
      margin:5,
      
    },
    heading:{
      fontSize:30,
      fontWeight:600,
      textAlign:'center',
      margin:'50px 0 50px 0',
      wordBreak: 'break-word',
    },
    subheading:{
      color: '878787',
     
      display:'flex',
      [theme.breakpoints.down('md')]:{
display:'block'
      }
    }
}))
function Detail({match}) {

    const classes= useStyle();
   
   const url='https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
   const[post,setPost]=useState({})
   const history =useHistory();
  
   useEffect(()=>{
     const fetch = async()=>{
       const data = await getPost (match.params.id);
       console.log(data)
       setPost(data)
     }
fetch();
   },[])

  //  const DeletePost = async()=>{
  //  deleteBlog(post._id);
  //  history.push('/')
//console.log(post._id)

const DeletePost = async () => {    
  await deleteBlog(post._id);
  history.push('/')  
}

const { authState, oktaAuth } = useOktaAuth();
const [userInfo, setUserInfo] = useState(null);

useEffect(() => {
    console.log(authState, oktaAuth)
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      
      oktaAuth.token.getUserInfo().then(info => {
          console.log(info)
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

// If we have an empty user object, return nothing, otherwise...


  // useEffect(() => {
  //   if (!authState || !authState.isAuthenticated) {
  //     setUserInfo({});
  //   } else {
  //     oktaAuth.getUser((info: userInfo) => { 
  //       setUserInfo(info); 
  //     });
  //   }
  // }, [authState, oktaAuth]); // Update if authState changes

//   if (Object.keys(userInfo).length === 0) {
//     return null;
// } else {
  const addElipsis=(str,limit)=>{
    return str.length>limit? str.substring(0,limit): str;   
  }
   return (
//       <Box className={classes.container}>
//           <img src={post.picture || url} alt="" className={classes.image} style={{objectFit:"cover"}}/>
//           <Box className={classes.icons} >
//        <Link to ={`/Update/${post._id}`}>   <EditIcon className={classes.icon} color='primary'/></Link>
//        <DeleteIcon onClick={()=>DeletePost()} className={classes.icon} color='error'/>
//           </Box>
// <Typography className={classes.heading}>{post.title}</Typography>

//    <Box className={classes.subheading}>
//    {/* //? symbol of query */}
//      <Link  to = {`/?username=${post.username}`} style={{textDecoration:'none' ,color:'inherit'}}>  
//      <Typography>Author: <span style={{fontWeight:600}}>{post.username}</span></Typography>
//      </Link>
//      <Typography style={{marginLeft:'auto'}}>{new Date(post.createdate).toDateString()}</Typography>
//      </Box>    
//      <Typography style={{wordBreak: 'break-word',}}>{post.description}</Typography>







//    </Box>





<div className="blog-single gray-bg">
  <div className="container">
    <div className="row align-items-start">
      <div className="col-lg-8 m-15px-tb">
        <article className="article">
          <div className="article-img">
            <img src={post.picture || url}  className={classes.image} style={{objectFit:"cover"}}/>
          </div>
          <div className="article-title">
            <h6><a href="#">Lifestyle</a> </h6>
            <Box className={classes.icons} >
        <Link to ={`/Update/${post._id}`}>   <EditIcon className={classes.icon} color='primary'/></Link>
        <DeleteIcon onClick={()=>DeletePost()} className={classes.icon} color='error'/>
           </Box>
           
         
            <h2 style={{  wordBreak: 'break-word'}}>{post.title}</h2>
            <div className="media">
              <div className="avatar">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title alt />
              </div>
              {userInfo && (
               <div className="media-body">
                <label>{addElipsis(userInfo.email ,5)}</label>
                <span>{new Date(post.createdate).toDateString()}</span>
              </div>
              )}
            </div>
              
          </div>
          <div className="article-content">
            <p style={{  wordBreak: 'break-word'}}>{post.description}</p>
            </div>
          <div className="nav tag-cloud">
            <a href="#">Design</a>
            <a href="#">Development</a>
            <a href="#">Travel</a>
            <a href="#">Web Design</a>
            <a href="#">Marketing</a>
            <a href="#">Research</a>
            <a href="#">Managment</a>
          </div>
        </article>
        <div className="contact-form article-comment">
          <h4>Leave a Reply</h4>
          <form id="contact-form" method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea name="message" id="message" placeholder="Your message *" rows={4} className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="send">
                  <button className="px-btn theme"><span>Submit</span> <i className="arrow" /></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4 m-15px-tb blog-aside">
        {/* Author */}
        <div className="widget widget-author">
          <div className="widget-title">
            <h3>Author</h3>
          </div>
       
          <div className="widget-body">
            <div className="media align-items-center">
              <div className="avatar">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title alt />
              </div>
                 {userInfo && (
      
         
      
     
              <div className="media-body">
                <h6>Hello, I'm<br /> <p> {addElipsis(userInfo.email ,5)}</p></h6>
              </div>
                 )}
            </div>
            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
          </div>
        </div>
        {/* End Author */}
        {/* Trending Post */}
        <div className="widget widget-post">
          <div className="widget-title">
            <h3>Trending Now</h3>
          </div>
          <div className="widget-body">
          </div>
        </div>
        {/* End Trending Post */}
        {/* Latest Post */}
        <div className="widget widget-latest-post">
          <div className="widget-title">
            <h3>Latest Post</h3>
          </div>
          <div className="widget-body">
            <div className="latest-post-aside media">
              <div className="lpa-left media-body">
                <div className="lpa-title">
                  <h5><a href="#" style={{  wordBreak: 'break-word'}}>{post.title}</a></h5>
                </div>
                <div className="lpa-meta">
                  <a className="name" href="#">
                    Rachel Roth
                  </a>
                  <a className="date" href="#">
                  {new Date(post.createdate).toDateString()}
                  </a>
                </div>
              </div>
              <div className="lpa-right">
                <a href="#">
                  <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title alt />
                </a>
              </div>
            </div>
            <div className="latest-post-aside media">
              <div className="lpa-left media-body">
                <div className="lpa-title">
                  <h5><a href="#"style={{  wordBreak: 'break-word',}}>{post.title}</a></h5>
                </div>
                <div className="lpa-meta">
                  <a className="name" href="#">
                    Rachel Roth
                  </a>
                  <a className="date" href="#">
                  {new Date(post.createdate).toDateString()}
                  </a>
                </div>
              </div>
              <div className="lpa-right">
                <a href="#">
                  <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title alt />
                </a>
              </div>
            </div>
            <div className="latest-post-aside media">
              <div className="lpa-left media-body">
                <div className="lpa-title">
                  <h5><a href="#"style={{  wordBreak: 'break-word'}}>{post.title}</a></h5>
                </div>
                <div className="lpa-meta">
                  <a className="name" href="#">
                    Rachel Roth
                  </a>
                  <a className="date" href="#">
                  {new Date(post.createdate).toDateString()}
                  </a>
                </div>
              </div>
              <div className="lpa-right">
                <a href="#">
                  <img src="https://via.placeholder.com/400x200/FFB6C1/000000" title alt />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Latest Post */}
        {/* widget Tags */}
        <div className="widget widget-tags">
          <div className="widget-title">
            <h3>Latest Tags</h3>
          </div>
          <div className="widget-body">
            <div className="nav tag-cloud">
              <a href="#">Design</a>
              <a href="#">Development</a>
              <a href="#">Travel</a>
              <a href="#">Web Design</a>
              <a href="#">Marketing</a>
              <a href="#">Research</a>
              <a href="#">Managment</a>
            </div>
          </div>
        </div>
        {/* End widget Tags */}
      </div>
    </div>
  </div>
</div>

   
    )
   }

export default Detail
