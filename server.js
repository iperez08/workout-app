import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()

import mongoose, { mongo } from "mongoose"
import methodOverride from "method-override"
import session from "express-session"

import authCtrl from "./controllers/auth.js"
import programCtrl from "./controllers/program.js"
import userCtrl from "./controllers/user.js"

const port = process.env.PORT || "3000"

mongoose.connect(process.env.MONGODB_URI)

app.use(express.static("contents"))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
)

app.get("/", (req, res) => {
    res.render("landing.ejs")
})

app.use("/auth", authCtrl)
app.use("/programs", programCtrl)

app.listen(port, () => {
    console.log(`Express app is ready on port ${port}.`)
})

mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connect.name}`)
})