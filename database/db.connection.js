import mongoose from "mongoose";

export const dbConnection = mongoose.connect("mongodb://localhost:27017/taskDatabase").then(()=>{
console.log("db connected successfully")
}).catch(()=>{
console.log("err conntection with the db")
})