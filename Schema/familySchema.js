import mongoose from "mongoose";
const { Schema } = mongoose
const familySchema = new Schema({
    leadID: {
        type: Schema.Types.Number,
        required: true,
        unique: true
    },
    insurancePrize:{
        type: Schema.Types.Number,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true
    },
    fullName: {
        type: Schema.Types.String,
        required: true
    },
    phone: {
        type: Schema.Types.String,
        required: true
    },
    userAge:{
        type: Schema.Types.Number,
        required: true
    },
    spouseAge:{
        type: Schema.Types.Number,
    },
    childrensDetails: {
        type: Schema.Types.Mixed,
    }
})

const Family = mongoose.model('getfamilyinusrance', familySchema)

export default Family;