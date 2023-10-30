import mongoose from "mongoose";
const { Schema } = mongoose
const lifeSchema = new Schema({
    leadID: {
        type: Schema.Types.Number,
        required: true,
        unique: true
    },
    childFund:{
        type: Schema.Types.String,
        required: true
    },
    familyExpense:{
        type: Schema.Types.String,
        required: true
    },
    pension:{
        type: Schema.Types.String,
        required: true
    },
    maritalStatus:{
        type: Schema.Types.String,
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
    profession:{
        type: Schema.Types.String,
        required: true
    },
    childrensDetails: {
        type: Schema.Types.Mixed,
    }
})

const Life = mongoose.model('getlifeinusrance', lifeSchema)

export default Life;