import  express  from "express";
import { createPost , getAllPost, getPost,updatePost,deleteBlog}from "../controller/Post Controller.js";
import{uploadImage } from'../controller/imagecontroller.js'
import upload from'../utils/Upload.js'

const router = express.Router();

router.post('/create',createPost)

router.post('/posts', getAllPost)

router.post('/post/:id',getPost)
router.post('/update/:id',updatePost)
router.delete('/delete/:id',deleteBlog)
router.post('/file/upload', upload.single('file'), uploadImage);
export default router;