import express from "express"
const app = express()
const router = express.Router()
import User from "../models/user.js"
import Program from "../models/program.js"
import Week from "../models/week.js"
import Workout from "../models/workout.js"
import Exercise from "../models/exercise.js"
import Set from "../models/set.js"
import { createProgram, updateProgramWithWeeks } from "../models/program-rendering/program-builder.js"
import { updateWeeksWithWorkouts } from "../models/program-rendering/week-builder.js"
import { updateWorkoutWithComponents } from "../models/program-rendering/workout-builders.js"



// see all program templates and create new program feature
router.get("/:userID/programs/index", async (req, res) => {
    const userID = req.params.userID
    res.render("program/index.ejs", {
        userID
    })
})

router.get('/:userID/programs/:programID/show', async (req, res) => {
    const userID = req.params.userID
    const programID = req.params.programID
    const program = await Program.findById(programID)
    console.log(program)
    const weekPromises = program.weeks.map((week) => Week.findById(week))
    const weeks = await Promise.all(weekPromises)
    const weekOneWorkoutPromises = weeks[0].workouts.map((workout) => Workout.findById(workout))

    const weekOneWorkouts = await Promise.all(weekOneWorkoutPromises)

    const workoutOneMainExercise = await Exercise.findById(weekOneWorkouts[0].main)
    const workoutTwoMainExercise = await Exercise.findById(weekOneWorkouts[1].main)
    const workoutThreeMainExercise = await Exercise.findById(weekOneWorkouts[2].main)
    const workoutFourMainExercise = await Exercise.findById(weekOneWorkouts[3].main)

    const allMainExercises = [workoutOneMainExercise, workoutTwoMainExercise, workoutThreeMainExercise, workoutFourMainExercise]

    const workoutOneSetPromises = workoutOneMainExercise.sets.map((set) => Set.findById(set))
    const workoutTwoSetPromises = workoutTwoMainExercise.sets.map((set) => Set.findById(set))
    const workoutThreeSetPromises = workoutThreeMainExercise.sets.map((set) => Set.findById(set))
    const workoutFourSetPromises = workoutFourMainExercise.sets.map((set) => Set.findById(set))

    const workoutOneSets = await Promise.all(workoutOneSetPromises)
    const workoutTwoSets = await Promise.all(workoutTwoSetPromises)
    const workoutThreeSets = await Promise.all(workoutThreeSetPromises)
    const workoutFourSets = await Promise.all(workoutFourSetPromises)

    const allMainExerciseSets = [workoutOneSets, workoutTwoSets, workoutThreeSets, workoutFourSets]

    res.render("program/show.ejs", {
        userID,
        weeks,
        weekOneWorkouts,
        allMainExercises,
        allMainExerciseSets,
    })
})

// create a new program
router.get("/:userID/programs/new", async (req, res) => {
    const userID = req.params.userID
    res.render("program/new.ejs", {
        userID
    })
})

router.post("/:userID/programs/new", async (req, res) => {
    const userID = req.params.userID
    const { programName, goal, numberOfWeeks } = req.body
    let weeksCount = parseInt(numberOfWeeks)
    const programBaseData = { programName, goal }
    const newProgramID = await createProgram(programBaseData)
    const weekOneID = await updateProgramWithWeeks(newProgramID, weeksCount)
    try {
        res.redirect(`/user/${userID}/programs/${newProgramID}/weeks/${weekOneID}/workouts/new`)
    } catch (error) {
        console.log(`error rendering page`)
    }
})


// show a specific program, which shows you the index of weeks in the program
router.get(`/:userID/programs/:programID/weeks/:weekID/workouts/new`, async (req, res) => {
    const userID = req.params.userID
    const programID = req.params.programID
    const weekID = req.params.weekID
    res.render("program/week/workout/new.ejs", {
        userID,
        programID,
        weekID
    })
})

router.post(`/:userID/programs/:programID/weeks/:weekID/workouts/new`, async (req, res) => {
    const userID = req.params.userID
    const programID = req.params.programID
    const weekID = req.params.weekID
    const { workouts } = req.body
    let allWorkoutBaseData = []
    let allComponentNames = []
    const program = await Program.findById(req.params.programID)
    for (const workout of workouts) {
        const eachWorkoutBaseData = { workoutName: workout.name, duration: workout.duration }
        const eachComponentsNames = workout.components
        allWorkoutBaseData.push(eachWorkoutBaseData)
        allComponentNames.push(eachComponentsNames)
    }
    try {
        await updateWeeksWithWorkouts(program.weeks, allWorkoutBaseData)
        const weekPromises = program.weeks.map((weekId) => Week.findById(weekId))
        const weeks = await Promise.all(weekPromises)
        const updatePromises = weeks.map((week, idx) => updateWorkoutWithComponents(week.workouts, allComponentNames[idx]))
        await Promise.all(updatePromises)
        res.redirect(`/user/${userID}/programs/${programID}/weeks/${weekID}/workouts/exercises/new`)
    } catch (error) {
        console.log(`error creating workouts: ${error}`)
    }
})

router.get('/:userID/programs/:programID/weeks/:weekID/workouts/exercises/new', async (req, res) => {
    const userID = req.params.userID
    const weekID = req.params.weekID
    const programID = req.params.weekID
    const program = await Program.findById(programID)
    const weekOne = await Week.findById(weekID)
    const workoutPromises = weekOne.workouts.map((workoutId) => Workout.findById(workoutId))
    const allWorkouts = await Promise.all(workoutPromises)
    const warmupA = ["Cossack Squat", "Ab Wheel", "Bulgarian One-Leg Squat", "Band Pull-Aparts"]
    const warmupB = ["Side Lunge", "Push Ups", "Forward Lunges", "Shoulder Dislocates"]
    const mainExercises = ["Barbell Squat", "Barbell Deadlift", "Barbell Bench Press", "Barbell Overhead Press"]
    const supplementalExercises = [" Front Barbell Squat", "Barbell Romanian Deadlift", "Barbell Decline Bench Press", "Barbell Incline Bench Press"]
    const accessoriesA = ["Tricep Extension", "Inverted Rows", "Hanging Leg Raise"]
    const accessoriesB = ["Push Ups", "Dumbbell Curls", "Hammer Curls", "Ab Wheel"]
    res.render(`program/week/workout/exercise/new.ejs`, {
        userID,
        programID,
        weekID,
        allWorkouts: allWorkouts,
        warmupA: warmupA,
        warmupB: warmupB,
        mainExercises: mainExercises,
        supplementalExercises: supplementalExercises,
        accessoriesA: accessoriesA,
        accessoriesB: accessoriesB,
    })
})

router.post('/:userID/programs/:programID/weeks/:weekID/workouts/exercises/new', async (req, res) => {
    const userID = req.params.userID
    const programID = req.params.programID
    const { workouts } = req.body
    res.redirect(`/user/${userID}/programs/${programID}/show`)
})

export default router