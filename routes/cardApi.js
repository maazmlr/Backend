import CardDetails from "../Schema/card.js";
import express from "express"


const router=express.Router();

router.post('/' ,async(req,res)=>{
    const { email, name, address, city, postalCode, cardDetails, insurance } = req.body.updateData;

    try {
      // Check if a user with the same email already exists
      const existingUser = await CardDetails.findOne({ email });
  
      if (existingUser) {
        // If the user exists, update their information
        existingUser.name = name;
        existingUser.address = address;
        existingUser.city = city;
        existingUser.postalCode = postalCode;
  
        // Update cardDetails
        if (cardDetails) {
          existingUser.cardDetails = cardDetails;
        }
  
        // Add new insurance details to the existing user's insurance array
        if (insurance && insurance.length > 0) {
          existingUser.insurance.push(...insurance);
        }
  
        await existingUser.save();
        return res.status(200).json({ message: 'User updated successfully' });
      }
  
      // If the user does not exist, create a new user
      const newUser = await CardDetails(req.body.updateData)
      newUser.save()
      
      res.status(201).json({ message: 'User created successfully'});
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        for (const field in error.errors) {
          validationErrors[field] = error.errors[field].message;
        }
        return res.status(400).json({ error: 'Validation Failed', validationErrors });
      }
  
      console.error('Error creating/updating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
})
export default router;