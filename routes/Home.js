import express from "express"
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import 'dotenv/config'

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

router.get('/', (req, res) => {
    if (!req.session.visited) {
      req.session.visited = true;
      
    } 
  });
// router.get('/getCookie',(req,res)=>{
//     console.log(req.cookies);
//     res.send(req.cookies);
// })

export default router;