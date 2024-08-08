import Set from "../set.js"
import Exercise from "../exercise.js"

// accepts array of objects, and each object represents 1 set 
// object must have weight, reps, rest
// returns an array of objectIDs
async function createSets(setsData) {
    let setsIDs = []
    try {
        let setInstances = setsData.map(Set.create)
        const setPromises = await Promise.all(setInstances)
        setPromises.forEach((promise) => {
            setsIDs.push(promise._id)
        })
        return setsIDs
    } catch (error) {
        console.log(`error creating sets`)
    }
}

// accepts object with params exerciseName, muscle, 
// otherMuscles, instruction, goal, setsData
async function createSingleExercise(exerciseData) {
    const {
        exerciseName,
        muscle,
        otherMuscles,
        instruction,
        goal,
        // setsData must have weight, reps, and rest
        setsData
    } = exerciseData
    try {
        const newExercise = await Exercise.create(
            {
                exerciseName,
                muscle,
                otherMuscles,
                instruction,
                goal
            })
        const allSets = await createSets(setsData)
        newExercise.sets = allSets
        newExercise.save()
        return newExercise._id
    } catch (error) {
        console.error(`error creating single exercise: ${error}`)
    }
}


export default createSingleExercise