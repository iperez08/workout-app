import express from "express"
const router = express.Router()
import User from "../models/user.js"

router.get("/index", async (req, res) => {
    res.render("program/index.ejs")
})

router.get("/weeks/index", async (req, res) => {
    res.render("program/week/index.ejs")
})

router.get("/weeks/workouts/index", async (req, res) => {
    res.render("program/week/workout/index.ejs")
})

router.get("/weeks/workouts/show", async (req, res) => {
    res.render("program/week/workout/show.ejs")
})

export default router