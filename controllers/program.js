import express from "express"
const router = express.Router()
import User from "../models/user.js"

// see all program templates and create new program feature
router.get("/index", async (req, res) => {
    res.render("program/index.ejs")
})

// create a new program
router.get("/new", async (req, res) => {
    res.render("program/new.ejs")
})

// show a specific program, which shows you the index of weeks in the program
router.get("/:programID/weeks/index", async (req, res) => {
    res.render("program/week/index.ejs")
})

// create a new week
router.get("/:programID/weeks/new", async (req, res) => {
    res.render("program/week/new.ejs")
})

// show a specific week, which shows you the index of workouts in the week
router.get("/:programID/weeks/:weekID/workouts/index", async (req, res) => {
    res.render("program/week/workout/index.ejs")
})

// create a new workout
router.get("/:programID/weeks/:weekID/workouts/new", async (req, res) => {
    res.render("program/week/workout/new.ejs")
})

// show a specific workout
router.get("/:programID/weeks/:weekID/workouts/show", async (req, res) => {
    res.render("program/week/workout/show.ejs")
})

export default router