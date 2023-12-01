import express from 'express';
import Car from '../routes/allCars.js'
import Bike from '../routes/allBikes.js'
import PostCar from './postPersonalCar.js'
import CommercialCar from './getCommercialCar.js'
import PostCommercialCar from "./postCommercialCar.js"
import PostBike from './postBike.js'
import Myself from './myselfInsurance.js'
import Family from './familyInsurance.js'
import parents from './parentInsurance.js';
import Life from './lifeInsurence.js'
import Home from './Home.js'
import Contact from './contact.js'
import HealthPlan from './healthData.js'
import Card from './cardApi.js'
const router = express.Router()


router.use('/',Home)
router.use('/car', Car);
router.use('/commercialCar', CommercialCar);
router.use('/bike', Bike)
router.use('/carPost', PostCar)
router.use("/commercialPost", PostCommercialCar)
router.use('/postBike', PostBike)
router.use('/myselfInsurance', Myself)
router.use('/familyInsurance', Family)
router.use('/parentsInsurance', parents)
router.use('/lifeInsurance', Life)
router.use('/contact', Contact)
router.use('/healthPlan', HealthPlan)
router.use('/Card', Card)


export default router;