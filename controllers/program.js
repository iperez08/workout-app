import express from "express"
const router = express.Router()
import User from "../models/user.js"
import Week from "../models/week.js"
import Program from "../models/program.js"
import Workout from "../models/workout.js"
import Exercise from "../models/exercise.js"
import Set from "../models/set.js"
import { createProgram, updateProgramWithWeeks } from "../models/program-rendering/program-builder.js"
import { updateWeeksWithWorkouts } from "../models/program-rendering/week-builder.js"
import { updateWorkoutWithComponents } from "../models/program-rendering/workout-builders.js"

router.use(express.urlencoded({ extended: false }))

// see all program templates and create new program feature
router.get("/:userID/index", async (req, res) => {
    res.render("program/index.ejs")
})

router.get('/show', async (req, res) => {
    const program = await Program.findById("66b991c50fca11c2f2961fed")
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

    console.log(allMainExercises)

    res.render("program/show.ejs", {
        user,
        weeks,
        weekOneWorkouts,
        allMainExercises,
        allMainExerciseSets
    })
})

// create a new program
router.get("/new", async (req, res) => {
    const user = await User.findById(req.params.userID)
    res.render("program/new.ejs", {
        user
    })
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
    console.log(workouts)
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
    const { workouts } = req.body
    console.log( workouts )
    res.send(`this is all of the data for the mainframe: ${JSON.stringify(workouts)}`)
}

)


export default router