import { createWorkoutComponent } from "./component-builder.js";
import Workout from "../workout.js"

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

// accepts workoutID and array of objects
// each object should have componentName
async function updateWorkoutWithComponents(workoutID, componentsBaseData) {
    try {
        const workoutInDatabase = Workout.find({ workoutID })
        let componentsPromises = componentsBaseData.map(createWorkoutComponent)
        const components = await Promise.all(componentsPromises)
        components.forEach((component) => {
            let componentID = component[0]
            let componentName = component[1]
            switch (componentName) {
                case `warmup`:
                    workoutInDatabase.warmup.push(componentID)
                    workoutInDatabase.save()
                    break
                case `main`:
                    workoutInDatabase.main = componentID
                    workoutInDatabase.save()
                    break
                case `supplemental`:
                    workoutInDatabase.supplemental = componentID
                    workoutInDatabase.save()
                    break
                case `accessories`:
                    workoutInDatabase.accessories.push(componentID)
                    workoutInDatabase.save()
                    break
                default:
                    console.log(`Error with componentName`)
            }
        })
    } catch (error) {
        console.log(`error updating workout with ${componentsBaseData.length} components: ${error}`)
    }
}

export { createWorkout, updateWorkoutWithComponents }