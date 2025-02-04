
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const client = new MongoClient(process.env.ATLAS_URI);
let db;

async function connectToDatabase() {
  if (!db) {
    await client.connect("expense");
    db = client.db(); 
    console.log("Connected to MongoDB!");
  }
  return db;
}
export { connectToDatabase };