import express from "express"
const router = express.Router()
import User from "../models/user.js"

router.get("/:userID/cycles/show", async (req, res) => {
    const user = await User.findById(req.params.userID)
    res.render("cycle/show.ejs", {
        user
    })
})

router.get("/:userID/cycles/index", async (req, res) => {
    const user = await User.findById(req.params.userID)
    res.render("cycle/index.ejs", {
        user
    })
})

router.get("/:userID/cycles/weeks/workouts/show", async (req, res) => {
    const user = await User.findById(req.params.userID)
    res.render("cycle/workout/show.ejs", {
        user
    })
})

export default router