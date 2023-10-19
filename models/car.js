import mongoose,{mongo} from "mongoose";

const {Schema} = mongoose;

const carSchema = new mongoose.Schema({
    
  });

const Car = mongoose.model('Cars', carSchema);

export default Car;