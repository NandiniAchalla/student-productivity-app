import express from "express";

const router = express.Router();

// Get all tasks
router.get("/", (req, res) => {
  res.send("Get all tasks");
});

// Add new task
router.post("/", (req, res) => {
  res.send("Task added");
});

export default router;
