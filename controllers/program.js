import express from "express"
const router = express.Router()
import Week from "../models/week.js"
import { createProgram, updateProgramWithWeeks } from "../models/program-rendering/program-builder.js"
import { createWeek } from "../models/program-rendering/week-builder.js"

router.use(express.urlencoded({ extended: false }))

// see all program templates and create new program feature
router.get("/index", async (req, res) => {
    res.render("program/index.ejs")
})

// create a new program
router.get("/new", async (req, res) => {
    res.render("program/new.ejs")
})

router.post("/new", async (req, res) => {
    const {programName, goal, numberOfWeeks} = req.body
        let weeksCount = parseInt(numberOfWeeks)
        const programBaseData = { programName, goal }
        const newProgramID = await createProgram(programBaseData)
        const weekOneID = await updateProgramWithWeeks(newProgramID, weeksCount)
        console.log(`${JSON.stringify(req.body)}`)
        try {
            res.redirect(`/programs/${newProgramID}/weeks/${weekOneID}/new`)
        } catch (error) {
        console.log(`error rendering page`)
    }
})

// show a specific program, which shows you the index of weeks in the program
router.get("/:programID/weeks/:weekID/new", async (req, res) => {
    const week = await Week.findById(req.params.weekID)
    res.render("program/week/new.ejs")
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