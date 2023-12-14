import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";

// Configure env 
dotenv.config()

// Initialize express app
const app = express()

// using middlewares to ease in routing & using json data
app.use(cookieParser())
app.use(express.json())
app.use("/api/v1",appRouter)

// Connnecting to database
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Db connected")
    } catch (error) {
        console.log(error)
    }
}

mongoose.connection.on('disconnected', ()=>{
    console.log("Database disconnected")
})

mongoose.connection.on('connected', ()=>{
    console.log("Database connected")
})


const PORT = process.env.PORT || 5000;

// Server listening to port
app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listening on port : ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send("Hello")
})