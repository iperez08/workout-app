import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()

import mongoose, { mongo } from "mongoose"
import methodOverride from "method-override"

const port = process.env.PORT || "3000"

mongoose.connect(process.env.MONGODB_URI)

app.use(express.urlencoded({ extended: false}))
app.use(methodOverride("_method"))

app.listen(port, () => {
    console.log(`Express app is ready on port ${port}.`)
})

mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connect.name}`)
})