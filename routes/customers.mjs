import express from "express";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db/conn.mjs";
import customers from "../models/customers.mjs";
import e from "express";

const router = express.Router();

router.get("/active", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("customers");
  const allCustomers = await collection.find({}).toArray();
  res.json(allCustomers);
});

router.get("/active", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("customers");
  const activeCustomers = await customers.findActive()
  res.json(activeCustomers);
});

router.post("/", async (req, res) => {
  try {
    const newCustomer = new Customers(req.body);
    const result = await newCustomer.save();

    res.status(201).json(result);
  } catch (error) {
    
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
  const db = await connectToDatabase();
  const collection = db.collection("customers");
  const { id } = req.params;
  const { email } = req.body;
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: {email} }
  );
  res.json(result);
} catch (error) {
  console.error("Error updating email:", error);
    res.status(500).json({ error: error.message });
}
});



export default router;
