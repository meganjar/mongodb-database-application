
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let db;

async function connectToDatabase() {
  
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }


  await mongoose.connect(process.env.ATLAS_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB!");
  

  return mongoose.connection;
}
export { connectToDatabase };