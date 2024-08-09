import createSingleExercise from "./exercise-builder.js"
import Component from "../component.js";

// accepts a number representing the rounds and an array of exercise objects
// returns an array of exerciseIDs
/* the way its coded returns an array with [roundCount] copies of each exercise */
/* so do I need to make it so that each exercise has it's own id? */
async function createRoundsOfExercises(roundsCount, exerciseData) {
    let exerciseIDs = []
    try {
        let exercisePromises = exerciseData.map(createSingleExercise)
        const exercises = await Promise.all(exercisePromises)
        for (let i = 0; i < roundsCount; i++) {
            exercises.forEach((exercise) => {
                exerciseIDs.push(exercise._id)
            })
        }
        return exerciseIDs
    } catch (error) {
        console.error(`error creating rounds of exercises: ${error}`)
    }
    return exerciseIDs
}

// accepts array of repeats and array of exercises with a one-to-one correspondence
// creates a series of each exercise in exercises, such that the element in repeats
// tells you how many times to create each exercise 
// returns an array of exerciseIDs
async function createSeriesOfExercises(series, exerciseData) {
    let exerciseIDs = []
    try {
        let exercisePromises = []
        for (let i = 0; i < exerciseData.length; i++) {
            for (let j = 0; j < series[i]; j++) {
                exercisePromises.push(createSingleExercise(exerciseData[i]))
            }
        }
        const exercises = await Promise.all(exercisePromises)
        exercises.forEach((exercise) => {
            exercises.push(exercise._id)
        })
        return exerciseIDs
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
    } = componentData
    try {
        const newComponent = await Component.create({ componentName })
        return [newComponent._id, newComponent.componentName]
    } catch (error) {
        console.error(`error creating workout component: ${error}`)
    }
}

// accepts componentID and array of objects (setStructureValues)
// setStructureValues should have series or rounds as null.
// if series has data, must be an array
// if rounds has data, must be a number
async function updateComponentWithStructureAndExercise(componentID, setStructureValues, exerciseBaseData) {
    try {
        const componentInDatabase = await Component.findById({ componentID })
        if (setStructureValues[0]) {
            let setStructure = setStructureValues[0]
            const newExerciseIDs = await createSeriesOfExercises(setStructure.series, exerciseBaseData)
            componentInDatabase.exercises = newExerciseIDs
            componentInDatabase.save()
        }
        if (setStructureValues[1]) {
            let setStructure = setStructureValues[1]
            const newExerciseIDs = await createRoundsOfExercises(setStructure.rounds, exerciseBaseData)
            componentInDatabase.exercises = newExerciseIDs
            componentInDatabase.save()
        }
    } catch (error) {
        console.log(`error updating component with set structure and ${exerciseBaseData.length} exercises: ${error}`)
    }
}
export { createWorkoutComponent, updateComponentWithStructureAndExercise }