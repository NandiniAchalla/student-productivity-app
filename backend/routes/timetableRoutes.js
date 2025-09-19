import express from "express";

const router = express.Router();

// Get timetable
router.get("/", (req, res) => {
  res.send("Get timetable");
});

// Add timetable entry
router.post("/", (req, res) => {
  res.send("Timetable entry added");
});

export default router;
