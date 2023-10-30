import Life from "../Schema/lifeSchema.js";
import express from "express"


const router=express.Router();

router.post('/' ,async(req,res)=>{
    try{
        let count = await Life.findOne().sort({ _id: -1 });
        let lead = count != null ? (count.leadID + 1): 1;
        const lifeData=await Life({"leadID":lead,...req.body.data})
        lifeData.save();
        res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.data } })
    }
    catch(err){
        res.status(400).send({status: 400, message: err.message})

    }
})
export default router;