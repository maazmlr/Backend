import mongoose from "mongoose";
const { Schema } = mongoose
// Define insurance sub-schemas for different types
// const bikeInsuranceSchema = new mongoose.Schema({
//     bikeEngine: {
//         type: Schema.Types.String,
//         required: true
//     },
//     bikeName: {
//         type: Schema.Types.String,
//         required: true
//     },
//     bikePrize: {
//         type: Schema.Types.Number,
//         required: true
//     },
//     bikeYear: {
//         type: Schema.Types.Number,
//         required: true
//     }
// });

// const carInsuranceSchema = new mongoose.Schema({
//     carModel: {
//         type: Schema.Types.String,
//         required: true
//     },
//     carName: {
//         type: Schema.Types.String,
//         required: true
//     },
//     carPrize: {
//         type: Schema.Types.Number,
//         required: true
//     },
//     carYear: {
//         type: Schema.Types.Number,
//         required: true
//     }
// });

// const healthInsuranceSchema = new mongoose.Schema({
//     insurancePrize:{
//         type: Schema.Types.Number,
//         required: true
//     },
//     userAge:{
//         type: Schema.Types.Number,
//         required: true
//     },
//     spouseAge:{
//         type: Schema.Types.Number,
//     },
//     childrensDetails: {
//         type: Schema.Types.Mixed,
//     },
//     parentsAge:{
//         type: Schema.Types.Number,
//     },
//   // Add other health insurance fields as needed
// });

// Define the main user schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true},
  city: { type: String, required: true },
  state: { type: String },
  postalCode: { type: String, required: true },
  cardDetails: {
    type: mongoose.Schema.Types.Mixed
  },
  insurance: [
    {
      type: { type: String, enum: ['bike', 'car', 'health'], required: true },
      details: { type: mongoose.Schema.Types.Mixed }, // Allow any type of insurance details
    },
  ],
});

const CardDetails = mongoose.model('CardDetails', userSchema);

// Export the model for use in other parts of your application
export default CardDetails
