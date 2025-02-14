import { Task } from "../../../database/models/task.model.js";
import { catchError } from "../../middleware/catchError.js";

export const addTask = catchError(async (req, res) => {
    const { title, description } = req.body;

    const task = await Task.insertOne({ title, description:description || "" })

    res.json({ message: "task added successfully", task })
})

export const getAllTasks = async (req, res) => {

    const allTasks = await Task.find().sort()

    res.json({ message: "all tasks", allTasks })
}


export const updateTask = async(req,res)=>{
    const {id} = req.params

   

    const changedTask = await Task.findByIdAndUpdate(id,{completed:true},{new:true})

    res.json({message:"task complete" , changedTask})
}


export const deleteTask = async(req,res)=>{
const {id} = req.params;

const deletedTask = await Task.findByIdAndDelete(id)

res.json({message:"task deleted successfully",deletedTask})
}