import express from "express";

const router = express.Router();

// Get progress
router.get("/", (req, res) => {
  res.send("Get student progress");
});

// Update progress
router.post("/", (req, res) => {
  res.send("Progress updated");
});

export default router;
