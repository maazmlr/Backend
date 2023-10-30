import mongoose from "mongoose";
const { Schema } = mongoose
const contactSchema = new Schema({
    leadID: {
        type: Schema.Types.Number,
        required: true,
        unique: true
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
    message : {
        type: Schema.Types.String,
        required: true
    }
})

const Contact = mongoose.model('getcontact', contactSchema)

export default Contact;