import express from "express"
const router = express.Router()
import User from "../models/user.js"


router.get(`/:userID/dashboard`, async (req, res) => {
    const user = await User.findById(req.params.userID)
    res.render("user/dashboard.ejs", {
        user
    })
})

router.get("/:userID/show", async (req, res) => {
    const user = await User.findById(req.params.userID)
    console.log(user)
    res.render("user/show.ejs", {
        user
    })
})

router.get("/:userID/delete", async (req, res) => {
    const user = await User.findById(req.params.userID)
    await User.findByIdAndDelete(user._id)
    res.render("/")
})

router.get("/:userID/goals/show", async (req, res) => {
    const user = await User.findById(req.params.userID)
    res.render("user/goal/show.ejs", {
        user
    })
})

router.get("/:userID/goals/edit", async (req, res) => {
    const user = await User.findById(req.params.userID)
    res.render("user/goal/edit.ejs", {
        user
    })
})

router.post("/:userID/goals/edit", async (req, res) => {
    const userID = req.params.userID
    const startGoal = req.body.startGoal
    const strengthGoal = req.body.strengthGoal
    const healthGoal = req.body.healthGoal
    await User.findByIdAndUpdate(userID, {
        startGoal,
        strengthGoal,
        healthGoal
    })
    res.redirect(`show`)
})

router.get("/:userID/goals/new", async (req, res) => {
    const user = await User.findById(req.params.userID)
    res.render("user/goal/new.ejs", {
        user
    })
})

router.post("/:userID/goals/new", async (req, res) =>{
    const userID = req.params.userID
    const startGoal = req.body.startGoal
    const strengthGoal = req.body.strengthGoal
    const healthGoal = req.body.healthGoal
    await User.findByIdAndUpdate(userID, {
        startGoal,
        strengthGoal,
        healthGoal
    })
    res.redirect(`show`)
})

export default router