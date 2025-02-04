import express from "express";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("accounts");
  const data = await collection.find().toArray();
  res.json(data);
});

router.post("/", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("transactions");
  const result = await collection.insertOne(req.body);
  res.json(result);
});

router.patch("/:id", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("customers");
  const { id } = req.params;
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: req.body }
  );
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const db = await connectToDatabase();
  const collection = db.collection("transactions");
  const { id } = req.params;
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  res.json(result);
});

export default router;
