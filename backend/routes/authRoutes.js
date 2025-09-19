import express from "express";

const router = express.Router();

// Register route
router.post("/register", (req, res) => {
  res.send("Register endpoint working!");
});

// Login route
router.post("/login", (req, res) => {
  res.send("Login endpoint working!");
});

export default router;
