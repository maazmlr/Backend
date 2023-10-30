
import commercialCar from "../Schema/commercialCar.js";
import express from "express"


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let count = await commercialCar.findOne().sort({ _id: -1 });
        let lead = count != null ? (count.leadID + 1) : 1;
        const commercialCarData = await commercialCar({ "leadID": lead, ...req.body.data })
        commercialCarData.save();
        res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.data }})
    } catch (err) {
        res.status(400).send({ status: 200, message: err.message })
    }

})
export default router;