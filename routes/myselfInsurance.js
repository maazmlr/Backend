import Myself from "../Schema/myselfSchema.js";
import express from "express"


const router=express.Router();

router.post('/' ,async(req,res)=>{
    try{
        let count = await Myself.findOne().sort({ _id: -1 });
        let lead = count != null ? (count.leadID + 1): 1;
        const myselfData=await Myself({"leadID":lead,...req.body.values})
        myselfData.save();
        res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.values } })
    }
    catch(err){
        res.status(400).send({status: 400, message: err.message})

    }
})
export default router;