import express from "express";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db/conn.mjs";
import transactions  from "../models/transactions.mjs";

const router = express.Router();



router.delete("/:id", async (req, res) => {
  try {
  const db = await connectToDatabase();
  const collection = db.collection("transactions");
  const { id } = req.params;
  const result = await collection.deleteOne(
    { _id: new ObjectId(id) } );
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted", result });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ error: error.message });
  }
});



export default router;
