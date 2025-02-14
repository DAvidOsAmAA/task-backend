import { Router } from "express";
import { addTask, deleteTask, getAllTasks, updateTask } from "./task.controller.js";
import { validate } from "../../middleware/validate.js";
import { addTaskValidation, deleteTaskValidation, updateTaskValidation } from "./task.validation.js";

const taskRouter = Router()

taskRouter.post("/add",validate(addTaskValidation),addTask)

taskRouter.get("/getAllTasks",getAllTasks)

taskRouter.put("/update/:id",validate(updateTaskValidation),updateTask)


taskRouter.delete("/delete/:id",validate(deleteTaskValidation),deleteTask)



export default taskRouter