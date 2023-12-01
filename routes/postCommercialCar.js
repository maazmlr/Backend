
import commercialCar from "../Schema/commercialCar.js";
import express from "express"
import mongoose from "mongoose";


const router = express.Router();
const car = mongoose.connection.collection('carPlanCommercial');
let userAmount = 0;
router.post('/', async (req, res) => {
    try {
        let count = await commercialCar.findOne().sort({ _id: -1 });
        let lead = count != null ? (count.leadID + 1) : 1;
        const commercialCarData = await commercialCar({ "leadID": lead, ...req.body.data })
        commercialCarData.save();
        userAmount = (req.body.data.carPrize)
        console.log('comPrize', userAmount)
        res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.data } })
    } catch (err) {
        res.status(400).send({ status: 200, message: err.message })
    }

})


router.get('/', async (req, res) => {
    try {
        const carPlan = await car.find({}).toArray();
        // Replace this with the user's amount
        userAmount = 6000000
        const result = [];
        carPlan[0].company_policies.forEach(companyPolicy => {
            const companyName = companyPolicy.company;
            const imageUrl = companyPolicy.image_url;
            
            // Find the amount range for the user's amount
            const amountRange = companyPolicy.amount_ranges.find(range =>
                userAmount >= range["min-amount"] && userAmount <= range["max-amount"]
            );
            
            if (amountRange) {
                const percentage = amountRange.percentage;
                const amount = Math.round(userAmount * (percentage / 100))
                result.push({
                    company: companyName,
                    image_url: imageUrl,
                    carAmount: amount,
                    percentage
                });
            }
        });
        res.status(200).send({ 'message': result })
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
})
export default router;