import { createWorkoutComponents } from "./component-builder.js";
import Workout from "../workout.js"
import Week from "../week.js";

// accepts object with workoutName and duration
async function createWorkout(workoutData) {
    const {
        workoutName,
        duration,
    } = workoutData
    try {
        const newWorkout = await Workout.create({ workoutName, duration })
        return newWorkout._id
    } catch (error) {
        console.log(`error creating workout: ${error}`)
    }
}

// accepts array of workoutID and array of componentNames
async function updateWorkoutWithComponents(workoutIDs, componentNames) {
    try {

        const components = await createWorkoutComponents(componentNames)
        const workoutPromises = workoutIDs.map((workoutID) => Workout.findById(workoutID))
        const workouts = await Promise.all(workoutPromises)

        workouts.forEach((workout) => {
            components.forEach((component) => {
                let componentID = component[0]
                let componentName = component[1]
                switch (componentName) {
                    case `warmup`:
                        workout.warmup.push(componentID)
                        break
                    case `main`:
                        workout.main = componentID
                        break
                    case `supplemental`:
                        workout.supplemental = componentID
                        break
                    case `accessories`:
                        workout.accessories.push(componentID)
                        break
                    default:
                        console.log(`Error with componentName`)
                }
            })
            workout.save()
        })
    } catch (error) {
        console.log(`error updating workout with ${componentNames.length} components: ${error}`)
    }
}

export { createWorkout, updateWorkoutWithComponents }