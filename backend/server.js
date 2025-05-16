import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

const PORT = dotenv.config().parsed?.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
