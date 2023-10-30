import express from "express";
import mongoose from "mongoose";
import PrivateCar from '../Schema/personalCar.js'
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let count = await PrivateCar.findOne().sort({ _id: -1 });
        let lead = count != null ? +(count.leadID + 1) : 1;
        const carData = await PrivateCar({ "leadID": lead, ...req.body.data})
        carData.save()
        res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.data } })
    } catch (err) {
        res.status(400).send({ status: 200, message: err.message })
    }

})
export default router;