import express from "express"
const router = express.Router()
import Week from "../models/week.js"
import Program from "../models/program.js"
import Workout from "../models/workout.js"
import { createProgram, updateProgramWithWeeks } from "../models/program-rendering/program-builder.js"
import { updateWeeksWithWorkouts } from "../models/program-rendering/week-builder.js"
import { updateWorkoutWithComponents } from "../models/program-rendering/workout-builders.js"

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
    const { programName, goal, numberOfWeeks } = req.body
    let weeksCount = parseInt(numberOfWeeks)
    const programBaseData = { programName, goal }
    const newProgramID = await createProgram(programBaseData)
    const weekOneID = await updateProgramWithWeeks(newProgramID, weeksCount)
    try {
        res.redirect(`/programs/${newProgramID}/weeks/${weekOneID}/workouts/new`)
    } catch (error) {
        console.log(`error rendering page`)
    }
})


// show a specific program, which shows you the index of weeks in the program
router.get(`/:programID/weeks/:weekID/workouts/new`, async (req, res) => {
    const week = await Week.findById(req.params.weekID)
    res.render("program/week/workout/new.ejs", {
        week,
        programId: req.params.programID
    })
})

router.post(`/:programID/weeks/:weekID/workouts/new`, async (req, res) => {
    const { workouts } = req.body
    let allWorkoutBaseData = []
    let allComponentNames = []
    const program = await Program.findById(req.params.programID)

    try {
        for (const workout of workouts) {
            const eachWorkoutBaseData = { workoutName: workout.name, duration: workout.duration }
            const eachComponentsNames = workout.components
            allWorkoutBaseData.push(eachWorkoutBaseData)
            allComponentNames.push(eachComponentsNames)
        }
        await updateWeeksWithWorkouts(program.weeks, allWorkoutBaseData)
        const weekPromises = program.weeks.map((weekID) => Week.findById(weekID))
        const weeks = await Promise.all(weekPromises)
        const updatePromises = weeks.map((week, idx) => updateWorkoutWithComponents(week.workouts, allComponentNames[idx]))
        await Promise.all(updatePromises)
        res.redirect(`/programs/${req.params.programID}/weeks/workouts/exercises/new`)
    } catch (error) {
        console.log(`error creating workouts: ${error}`)
    }
})

router.get('/:programID/weeks/workouts/exercises/new', async (req, res) => {
    const program = await Program.findById(req.params.programID)
    const weekOne = await Week.findById(program.weeks[0])
    const workoutPromises = weekOne.workouts.map((workoutId) => Workout.findById(workoutId))
    const allWorkouts = await Promise.all(workoutPromises)
    const warmupA = ["Cossack Squat", "Ab Wheel", "Bulgarian One-Leg Squat", "Band Pull-Aparts"]
    const warmupB = ["Side Lunge", "Push Ups", "Forward Lunges", "Shoulder Dislocates"]
    const mainExercises = ["Barbell Squat", "Barbell Deadlift", "Barbell Bench Press", "Barbell Overhead Press"]
    const supplementalExercises = [" Front Barbell Squat", "Barbell Romanian Deadlift", "Barbell Decline Bench Press", "Barbell Incline Bench Press"]
    const accessoriesA = ["Tricep Extension", "Inverted Rows", "Hanging Leg Raise"]
    const accessoriesB = ["Push Ups", "Dumbbell Curls", "Hammer Curls", "Ab Wheel"]
    res.render(`program/week/workout/exercise/new.ejs`, {
        programID: req.params.programID,
        allWorkouts: allWorkouts,
        warmupA: warmupA,
        warmupB: warmupB,
        mainExercises: mainExercises,
        supplementalExercises: supplementalExercises,
        accessoriesA: accessoriesA,
        accessoriesB: accessoriesB
    })
})

router.post('/:programID/weeks/workouts/exercises/new', async (req, res) => {
    
}

)


export default router