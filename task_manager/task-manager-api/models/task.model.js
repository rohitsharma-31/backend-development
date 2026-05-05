import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  status: { type: String, default: "pending" },
  dueDate: Date
});

taskSchema.index({ userId: 1, title: 1 }, { unique: true });

export default mongoose.model("Task", taskSchema);
