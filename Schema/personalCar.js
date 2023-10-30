import mongoose from "mongoose";
const { Schema } = mongoose

const PrivateCar = new Schema({
    leadID: {
        type: Schema.Types.Number,
        required: true,
        unique: true
    },
    carModel: {
        type: Schema.Types.String,
        required: true
    },
    carName: {
        type: Schema.Types.String,
        required: true
    },
    carPrize: {
        type: Schema.Types.Number,
        required: true
    },
    carYear: {
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

const PersonalCar = mongoose.model('getpersonalcars', PrivateCar)

export default PersonalCar;