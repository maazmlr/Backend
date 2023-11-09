import Family from "../Schema/familySchema.js";
import express from "express"
import mongoose from "mongoose";

const router = express.Router();

const health = mongoose.connection.collection('HealthPlan');
let ages = [];

router.post('/', async (req, res) => {
  try {
    let count = await Family.findOne().sort({ _id: -1 });
    let lead = count != null ? (count.leadID + 1) : 1;
    // const familyData=await Family({"leadID":lead,...req.body.updateData})
    // familyData.save();
    console.log(req.body.updateData)
    res.status(200).send({ status: 200, message: { "leadID": lead, ...req.body.updateData } })


    ages.push(req.body.updateData?.userAge)
    ages.push(req.body.updateData?.spouseAge)
    if (req.body.updateData?.children_Age)
      ages.push(...req.body.updateData?.children_Age)


    console.log(ages)

  }
  catch (err) {
    res.status(400).send({ status: 400, message: err.message })

  }
})
router.get('/', async (req, res) => {
  const HealthPlan = await health.find({}).toArray();
  const companyPolicies = HealthPlan[0].company_policies;

  // Initialize an object to store accumulated amounts for each plan
  const accumulatedAmounts = [];
  const results = {};
  // Loop through each age
  
  
  ages.forEach(age => {
  
    companyPolicies.forEach(company => {
      const entityPolicies = company.entity_policies;
    
      entityPolicies.forEach(entity => {
        const ageAmountRange = entity.age_amount_ranges.find(range => age >= range.min_age && age <= range.max_age);
    
        
        if (ageAmountRange) {
          // Accumulate amounts for each plan
          const key = `${company.company_name}-${entity.entity_name}`;
          accumulatedAmounts[key] = accumulatedAmounts[key] || 0;
          accumulatedAmounts[key] += ageAmountRange.amount;
          
        }

        
      });
    });
  });


  companyPolicies.forEach(company => {
   
    const entityPolicies = company.entity_policies;
    entityPolicies.forEach((entity)=>{
      delete entity.age_amount_ranges;
      // console.log(entity)
    

   

    })
  
  })

  // console.log("Accumulated Amounts:");
  // console.log(accumulatedAmounts);
  // results.push({
  //   companyPolicies,
  //   accumulatedAmounts
  // })
 
  console.log(accumulatedAmounts[0])
  res.send({...accumulatedAmounts,companyPolicies});


})

export default router;