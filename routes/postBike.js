import Bike from "../Schema/bikeScema.js";
import express from "express"
import mongoose from "mongoose";

const router=express.Router();
const bike = mongoose.connection.collection('BikePlan');
let userAmount = 50000;

router.post('/' ,async(req,res)=>{
    try{
        let count = await Bike.findOne().sort({ _id: -1 });
        let lead = count != null ? (count.leadID + 1): 1;
        // const bikeData=await Bike({"leadID":lead,...req.body.data})
        // bikeData.save();
        userAmount = (req.body.data.bikePrize)
        res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.data } })
    }catch(err){
        res.status(400).send({status: 200, message: err.message})
    }

})

router.get('/', async (req, res) => {
    try {
        const bikePlan = await bike.find({}).toArray();
        // Replace this with the user's amount
        const result = [];
        bikePlan[0].company_policies.forEach(companyPolicy => {
            const companyName = companyPolicy.company;
            const imageUrl = companyPolicy.image_url;
            const amount = Math.round(userAmount * (companyPolicy.percentage/100)) 
            result.push({
                company: companyName,
                image_url: imageUrl,
                bikeAmount: amount,
                percentage: companyPolicy.percentage
            });
            // Find the amount range for the user's amount
        });
        res.status(200).send({ 'message': result })
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
})

export default router;