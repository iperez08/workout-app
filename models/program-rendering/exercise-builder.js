import Set from "../set.js"
import Exercise from "../exercise.js"

// returns an array of *number* objectIDs that reference
// sets with specificed weights, reps, and rests
async function createSets(number, weights, reps, rests) {
    let setsIDs = []
    try {
        for (let i = 0; i < number; i++) {
            const newSet = await Set.create(
                {
                    weight: weights[i],
                    reps: reps[i],
                    rest: rests[i]
                }
            )
            setsIDs.push(newSet._id)
        }
    } catch (error) {
        console.log(`error creating sets`)
    }
    return setsIDs
}

// accepts object with params exerciseName, muscle, otherMuscles,
// instruction, goal, type, number, weights, reps, rests
async function createSingleExercise(exerciseData) {
    const { exerciseName, muscle, otherMuscles, instruction,
        goal, type, number, weights, reps, rests } = exerciseData
    try {
        const newExercise = await Exercise.create(
            {
                exerciseName,
                muscle,
                otherMuscles,
                instruction,
                goal
            })
        const allSets = await createSets(type, number, weights, reps, rests)
        newExercise.sets = allSets
        return newExercise._id
    } catch (error) {
        console.error(`error creating single exercise: ${error}`)
    }
}

export default createSingleExercise