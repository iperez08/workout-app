import createWorkoutComponent from "./component-builder";
import Workout from "../workout.js"


// accepts string, number, and array of objects with 
// componentName, setStructure, repeatsOrRounds, exercises
// returns array of arrays with componentIDs and componentNames
async function createWorkout(workoutData) {
    const {
        workoutName,
        duration,
        goal,
        // componentdata should have at least componentName and setStructureValues
        componentsData,
    } = workoutData
    try {
        const newWorkout = await Workout.create(workoutName, duration, goal)
        let componentsInstances = componentsData.map(createWorkoutComponent)
        const componentsPromises = await Promise.all(componentsInstances)
        componentsPromises.forEach((promise) => {
            let promiseID = promise[0]
            let promiseName = promise[1]
            switch (promiseName) {
                case `warmup`:
                    newWorkout.warmup.push(promiseID)
                    newWorkout.save()
                case `main`:
                    newWorkout.main = promiseID
                    newWorkout.save()
                case `supplemental`:
                    newWorkout.supplemental = promiseID
                    newWorkout.save()
                case `accessories`:
                    newWorkout.accessories.push(promiseID)
                    newWorkout.save()
            }
        })
        return newWorkout._id
    } catch (error) {
        console.log(`error creating workout: ${error}`)
    }
}

export default createWorkout