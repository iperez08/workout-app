import { createWorkout } from "./workout-builders.js";
import Week from "../../models/week.js"

async function createWeek(weekNumber) {
    try {
        const newWeek = await Week.create({ weekNumber })
        return newWeek._id
    } catch (error) {
        console.log(`error creating week: ${error}`)
    }
}

// accepts array of weekID and array of objects
// each object should have workoutName and duration
async function updateWeeksWithWorkouts(weekIDs, workoutsBaseData) {
    try {
        const workoutsPromises = workoutsBaseData.map(createWorkout)
        const workoutIDs = await Promise.all(workoutsPromises)
        const weeksPromises = weekIDs.map((weekID) => Week.findById(weekID))
        const weeks = await Promise.all(weeksPromises)
        weeks.forEach((week) => {
            week.workouts = workoutIDs
            week.save()
        })
    } catch (error) {
        console.log(`error updating week with ${workoutsBaseData.length} workouts: ${error}`)
    }
}


export { createWeek, updateWeeksWithWorkouts }