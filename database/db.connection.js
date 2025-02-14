import mongoose from "mongoose";

export const dbConnection =
 mongoose.connect("mongodb+srv://davidosamamilad:12345david@cluster0.8t8gq.mongodb.net/taskDatabase").then(()=>{
console.log("db connected successfully")
}).catch(()=>{
console.log("err conntection with the db")
})