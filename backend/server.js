/* global process */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// CORS configuration based on environment
const allowedOrigins = [
  "https://my-portfolio-one-gray-16.vercel.app",
  "http://localhost:5173",
];

// More detailed CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        console.log("Origin not allowed:", origin);
        return callback(null, false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Connect to database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, {
    body: req.body,
    headers: req.headers,
    query: req.query,
  });
  next();
});

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Portfolio API" });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Routes
app.use("/api/contact", contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error",
    message: err.message,
  });
});

const PORT = process.env.PORT || 2001;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
