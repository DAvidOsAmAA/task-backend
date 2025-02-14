import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    completed:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

export const Task = model("Task",taskSchema)