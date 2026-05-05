import express from "express";
import { createTask, getTasks, getPendingTasks } from "../controllers/task.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createTask);
router.get("/", getTasks);
router.get("/pending", getPendingTasks);

export default router;
