import express from 'express';
import Car from '../routes/allCars.js'
import Bike from '../routes/allBikes.js'
const router = express.Router()



router.use('/car', Car);
router.use('/bike', Bike)
export default router;