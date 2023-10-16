import  express  from "express";
import mongoose from "mongoose";
const router = express.Router();
const Cars = mongoose.connection.collection('Cars');
router.get('/', async(req, res)=>{
    const car = await Cars.find({}).toArray();
    res.status(200).send({"message": (car)});
})
export default router;