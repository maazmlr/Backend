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
    const familyData=await Family({"leadID":lead,...req.body.updateData})
    familyData.save();
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
  try {
    const HealthPlan = await health.find({}).toArray();
    const companyPolicies = HealthPlan[0].company_policies;

    const result = [];

    for (const company of companyPolicies) {
      const companyName = company.company_name;

      // Iterate over each entity within the company
      for (const entity of company.entity_policies) {
        const entityName = entity.entity_name;

        // Calculate total amount for each age in the array
        const totalAmounts = ages.map(age => {
          const ageAmountRange = entity.age_amount_ranges.find(range => age >= range.min_age && age <= range.max_age);

          if (ageAmountRange) {
            return ageAmountRange.amount;
          } else {
            return 0; // If no matching age range, assume amount is 0
          }
        });

        // Calculate the sum of amounts for the current company and entity
        const totalAmount = totalAmounts.reduce((sum, amount) => sum + amount, 0);

        // Output the results
        delete entity.age_amount_ranges;
        result.push({
          companyName,
          entity,
          totalAmount,
        });
      }
    }

    console.log(result);
    res.status(200).send({'message':result})
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});


export default router;