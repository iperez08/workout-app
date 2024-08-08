import createWorkout from "./workout-builders";
import Week from "../../models/week.js"

async function createWeek(weekData) {
    const {
        weekNumber,
        // workoutsData should have at least workoutName, duration, and goal
        workoutsData
    } = weekData
    try {
        const newWeek = await Week.create({ weekNumber, goal })
        let workoutsInstances = workoutsData.map(createWorkout)
        const workoutsPromises = await Promise.all(workoutsInstances)
        workoutsPromises.forEach((promise) => {
            newWeek.workouts.push(promise)
            newWeek.save()
        })
        return newWeek._id
    } catch (error) {
        console.log(`error creating week: ${error}`)
    }
}

export default createWeek