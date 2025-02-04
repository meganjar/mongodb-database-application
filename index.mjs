import express from "express";
import cors from "cors";
import { connectToDatabase } from "./db/conn.mjs";
// (from within 'routes' folder)
import dotenv from "dotenv";
import home from "./routes/home.mjs";
import accounts from "./routes/accounts.mjs";

dotenv.config();

const app = express();
const port = process.env.PORT || 3999;
app.use(cors());
app.use(express.json());
// Load the /posts routes
app.use("/accounts", accounts);
app.use("/", home);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

app.get("/", (req, res) => {
  res.send("Welcome to the MongoDB Express Server!");
});

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  });