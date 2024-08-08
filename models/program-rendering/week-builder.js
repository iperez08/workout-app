import createWorkout from "./workout-builders";
import Week from "../../models/week.js"

async function createWeek(weekNumber) {
    try {
        const newWeek = await Week.create()
        newWeek.weekNumber = weekNumber
        newWeek.save()
        return newWeek._id
    } catch (error) {
        console.log(`error creating week: ${error}`)
    }
}

// accepts weekID and array of objects
// each object should have workoutName and duration
async function updateWeekWithWorkouts(weekID, workoutsBaseData) {
    try {
        const weekInDatabase = await Week.find({ weekID })
        let workoutsInstances = workoutsBaseData.map(createWorkout)
        const workoutsPromises = await Promise.all(workoutsInstances)
        workoutsPromises.forEach((promise) => {
            weekInDatabase.workouts.push(promise)
            weekInDatabase.save()
        })
    } catch (error) {
        console.log(`error updating week with ${weeksBaseData.length} workouts: ${error}`)
    }
}


export { createWeek, updateWeekWithWorkouts }