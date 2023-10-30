import mongoose from "mongoose";
const { Schema } = mongoose
const myselfSchema = new Schema({
    leadID: {
        type: Schema.Types.Number,
        required: true,
        unique: true
    },
    insurancePrize:{
        type: Schema.Types.Number,
        required: true
    },
    age:{
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
    }
})

const Myself = mongoose.model('getmyselfinusrance', myselfSchema)

export default Myself;