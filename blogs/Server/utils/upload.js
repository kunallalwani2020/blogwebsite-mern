import multer from 'multer';
// import {GridFsStorage} from 'multer-gridfs-storage';
import {GridFsStorage} from'multer-gridfs-storage';
const storage = new GridFsStorage({
    url:'mongodb+srv://kirshan:sagar123@blogweb.giot2.mongodb.net/BLOGWEB?retryWrites=true&w=majority',
    option:{useNewUrlParser: true, 
        useUnifiedTopology: true},
        file:(request,file)=>{
            const match=["image/png","image/jpg"];
            if(match.indexOf(file.memeType)=== -1)
            return `${Date.now()}-blog-${file.originalname}`;
           
            return{
                bucketName: "picture",
                filename: `${Date.now()}-blog-${file.originalname}`
            }
        }
});
export default multer({storage})