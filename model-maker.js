import express from "express"
const app = express()
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
import Set from "./models/set.js"
import Exercise from "./models/exercise.js"

const port = process.env.PORT || "3000"

mongoose.connect(process.env.MONGODB_URI)

app.listen(port, () => {
    console.log(`Express app is ready on port ${port}.`)
})

const exercise = await Exercise.findById("66b9a26444d15ac38e46a8e5")



mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connect.name}`)
})