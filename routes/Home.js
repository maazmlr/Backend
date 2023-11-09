import express from "express"
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import 'dotenv/config'
// import {v2 as cloudinary} from 'cloudinary';
// import img from '../assets/plans/pak qatar/gold.png'


const router=express.Router();


router.use(cookieParser())

router.use(session(
    {
        secret:process.env.SECRET_KEY,
        resave:false,
        saveUninitialized:true,
        store:new MongoStore({mongoUrl:process.env.DB_URL})
    }
))

router.get('/',  (req, res) => {

// cloudinary.uploader.upload('C:/Users/s/Desktop/Backend/assets/plans/uic/tulip.png', (error, result)=>{
//     console.log(result, error);
//   }).then(res=>console.log('rrr',res))
//   .catch(res=>console.log('error',res))

    if (!req.session.visited) {
      req.session.visited = true;
      
    } 
  });


export default router;