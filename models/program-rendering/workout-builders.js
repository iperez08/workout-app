import createWorkoutComponent from "./component-builder";
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
        let componentsInstances = componentsBaseData.map(createWorkoutComponent)
        const componentsPromises = await Promise.all(componentsInstances)
        componentsPromises.forEach((promise) => {
            let promiseID = promise[0]
            let promiseName = promise[1]
            switch (promiseName) {
                case `warmup`:
                    workoutInDatabase.warmup.push(promiseID)
                    workoutInDatabase.save()
                case `main`:
                    workoutInDatabase.main = promiseID
                    workoutInDatabase.save()
                case `supplemental`:
                    workoutInDatabase.supplemental = promiseID
                    workoutInDatabase.save()
                case `accessories`:
                    workoutInDatabase.accessories.push(promiseID)
                    workoutInDatabase.save()
            }
        })
    } catch (error) {
        console.log(`error updating workout with ${componentsBaseData.length} components: ${error}`)
    }
}

export { createWorkout, updateWorkoutWithComponents }