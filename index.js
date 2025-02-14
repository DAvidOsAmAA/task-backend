import express from 'express'
import { dbConnection } from './database/db.connection.js'
import taskRouter from './src/modules/task-module/task.routes.js'
import cors from 'cors'
const app = express()
const port = 3001
dbConnection




app.use(cors())

app.use(express.json())

app.use("/task",taskRouter)


app.use("*",(req,res,next)=>{
next(new Error("route not found"),)
})


app.use((err,req,res,next)=>{
    let code = err.statusCode || 500
    res.status(code).json({message:err.message,error:"error"})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))