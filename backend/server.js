import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import timetableRoutes from "./routes/timetableRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
//app.use("/api/auth", authRoutes);
//app.use("/api/tasks", taskRoutes);
//app.use("/api/timetable", timetableRoutes);
//app.use("/api/progress", progressRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.log(err));
