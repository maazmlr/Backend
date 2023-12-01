import express from "express";
import mongoose from "mongoose";
import PrivateCar from '../Schema/personalCar.js'

const router = express.Router();
let userAmount = 0;
const car = mongoose.connection.collection('carPlan');
router.post('/', async (req, res) => {
    try {
        let count = await PrivateCar.findOne().sort({ _id: -1 });
        let lead = count != null ? +(count.leadID + 1) : 1;
        const carData = await PrivateCar({ "leadID": lead, ...req.body.data})
        carData.save()
        userAmount = req.body.data.carPrize
        res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.data } })
    } catch (err) {
        res.status(400).send({ status: 200, message: err.message })
    }

})

router.get('/', async (req, res) => {
    try {
        const carPlan = await car.find({}).toArray();
        // Replace this with the user's amount
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