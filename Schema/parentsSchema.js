import mongoose from "mongoose";
const { Schema } = mongoose
const parentsInsurance = new Schema({
    leadID: {
        type: Schema.Types.Number,
        required: true,
        unique: true
    },
    fullName: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true
    },
    phone: {
        type: Schema.Types.String,
        required: true
    },
    parentsAge:{
        type: Schema.Types.Number,
        required: true
    },
    insurancePrize:{
        type: Schema.Types.Number,
        required: true
    }
})

const parents = mongoose.model('getparentsinusrance', parentsInsurance)

export default parents;