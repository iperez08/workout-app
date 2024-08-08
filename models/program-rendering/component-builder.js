import createSingleExercise from "./exercise-builder"
import Component from "../component";

// accepts a roundCount number and array of exercises 
// each round has all exercises as a series
// each element of exercises array is an object with keys that match
// createSingleExercise parameters
// returns an array of exerciseIDs
async function createRoundsOfExercises(roundCount, exercises) {
    let exerciseIDs = []
    try {
        for (let i = 0; i < roundCount; i++) {
            for (let j = 0; j < exercises.length; j++) {
                const newExerciseID = await createSingleExercise(exercises[j])
                exerciseIDs.push(newExerciseID)
            }
        }
    } catch (error) {
        console.error(`error creating rounds of exercises: ${error}`)
    }
    return exerciseIDs
}

// accepts array of repeats and array of exercises: one-to-one correspondence
// creates a series of each exercise in exercises, such that the element in repeats
// tells you how many times to create each exercise 
// returns an array of exerciseIDs
async function createSeriesOfExercises(repeats, exercises) {
    let exerciseIDs = []
    try {
        for (let i = 0; i < repeats.length; i++) {
            for (let j = 0; j < repeats[i]; j++) {
                const newExerciseID = await createSingleExercise(exercises[i])
                exerciseIDs.push(newExerciseID)
            }
        }
    } catch (error) {
        console.error(`error creating series of exercises: ${error}`)
    }
    return exerciseIDs
}

// Accepts object with keys matching the destructuring below
// String, String, Number or Array of Numbers, array of exercise objects
// returns an array of with componentID and componentName
async function createWorkoutComponent(componentData) {
    const {
        componentName,
        setStructure,
        repeatsOrRounds,
        exercises
    } = componentData
    try {
        const newComponent = await Component.create({ componentName, setStructure })
        if (setStructure === "series") {
            const newExerciseIDs = await createSeriesOfExercises(repeatsOrRounds, exercises)
            newComponent.exercises = newExerciseIDs
        }
        if (setStructure === "rounds") {
            const newExerciseIDs = await createRoundsOfExercises(repeatsOrRounds, exercises)
            newComponent.exercises = newExerciseIDs
        }
        return [newComponent._id, newComponent.componentName]
    } catch (error) {
        console.error(`error creating workout component: ${error}`)
    }
}

export default createWorkoutComponent