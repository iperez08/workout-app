import createWorkoutComponent from "./component-builder";
import Workout from "../workout.js"


// accepts string, number, and array of objects with 
// componentName, setStructure, repeatsOrRounds, exercises
// returns array of arrays with componentIDs and componentNames
async function createWorkout(workoutData) {
    const {
        workoutName,
        duration,
        components
    } = workoutData
    let allComponentData = []
    try {
        const newWorkout = await Workout.create({ workoutName, duration })
        for (let i = 0; i < components.length; i++) {
            const newComponentData = await createWorkoutComponent(components[i])
            allComponentData.push(newComponentData)
        }
        return allComponentData
    } catch (error) {
        
    }
}

export default createWorkout