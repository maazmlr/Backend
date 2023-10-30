import Bike from "../Schema/bikeScema.js";
import express from "express"


const router=express.Router();

router.post('/' ,async(req,res)=>{
    try{
        let count = await Bike.findOne().sort({ _id: -1 });
        let lead = count != null ? (count.leadID + 1): 1;
        const bikeData=await Bike({"leadID":lead,...req.body.data})
        bikeData.save();
        res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.data } })
    }catch(err){
        res.status(400).send({status: 200, message: err.message})
    }

})
export default router;