import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, userId: req.user.id });
    res.json(task);
  } catch {
    res.status(400).json({ message: "Duplicate task" });
  }
};

export const getTasks = async (req, res) => {
  if (req.user.role === "admin") return res.json(await Task.find());
  res.json(await Task.find({ userId: req.user.id }));
};

export const getPendingTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id, status: "pending" });
  res.json(tasks);
};
