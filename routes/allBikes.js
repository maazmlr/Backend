import  express  from "express";
import mongoose from "mongoose";
const router = express.Router();
const Bike = mongoose.connection.collection('Bike');
router.get('/', async(req, res)=>{
    const bike = await Bike.find({}).toArray();
    res.status(200).send({"message": bike});
})
export default router;