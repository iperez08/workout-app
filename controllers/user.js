import express from "express"
const router = express.Router()
import User from "../models/user.js"

router.get(`/:userID/dashboard`, async (req, res) => {
    const userID = req.params.userID
    const user = await User.findById(userID)
    res.render("user/dashboard.ejs", {
        userID,
        user
    })
})

router.get("/:userID/show", async (req, res) => {
    const userID = req.params.userID
    res.render("user/show.ejs", {
        userID
    })
})

router.get("/:userID/delete", async (req, res) => {
    const userID = req.params.userID
    await User.findByIdAndDelete(userID)
    res.redirect("/")
})

router.get("/:userID/goals/show", async (req, res) => {
    const userID = req.params.userID
    const user = await User.findById(userID)
    res.render("user/goal/show.ejs", {
        userID,
        user
    })
})

router.get("/:userID/goals/edit", async (req, res) => {
    const userID = req.params.userID
    const user = await User.findById(userID)
    res.render("user/goal/edit.ejs", {
        userID,
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
    const userID = req.params.userID
    const user = await User.findById(userID)
    res.render("user/goal/new.ejs", {
        userID,
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