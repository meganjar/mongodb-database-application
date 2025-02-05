
import mongoose from "mongoose";

const customersSchema = new mongoose.Schema({
    _id:{
        required: false,
        type: String
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: String,            
    birthdate: Date,
    email:{
        type: String,
        unique: true,
        required: true
    },
    active: Boolean,
    accounts: [Number]
    
    })

    customersSchema.index({ active: 1 });

    customersSchema.statics.findActive = function () {
        return this.find({ active: true });
      };
      customersSchema.statics.findByEmail = function (email) {
        return this.find({ schema });
      };
    
    export default mongoose.model("customers", customersSchema);
   