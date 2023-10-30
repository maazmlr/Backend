import mongoose from "mongoose";
const { Schema } = mongoose

const bikeSchema = new Schema({
    leadID: {
        type: Schema.Types.Number,
        required: true,
        unique: true
    },
    bikeEngine: {
        type: Schema.Types.String,
        required: true
    },
    bikeName: {
        type: Schema.Types.String,
        required: true
    },
    bikePrize: {
        type: Schema.Types.Number,
        required: true
    },
    bikeYear: {
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

const Bike = mongoose.model('getbike', bikeSchema)

export default Bike;