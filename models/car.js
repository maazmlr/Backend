import mongoose,{mongo} from "mongoose";

const {Schema} = mongoose;

const carSchema = new mongoose.Schema({
    carName:{
        type:Schema.Types.String,
        required:true,
        unique:true
    },
    deatils: [
      {
        modelName: { type:Schema.Types.String,
            required:true,
            unique:true},
        priceRange: {
          min: Number,
          max: Number
        },
        years:[Number]
      }
    ]
    
  });

const Car = mongoose.model('Cars', carSchema);

export default Car;