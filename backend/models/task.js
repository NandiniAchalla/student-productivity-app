import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  task: { type: String, required: true },
  category: { type: String },
  dueDate: { type: Date },
  isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);
