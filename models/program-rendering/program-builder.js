import createWeek from "./week-builder";
import Program from "../program.js"

// accepts object with programName and goal
// returns program instance
async function createProgram(programBaseData) {
    const {
        programName,
        goal
    } = programBaseData
    try {
        const newProgram = await Program.create({ programName, goal })
        return newProgram
    } catch (error) {
        console.log(`error creating program: ${error}`)
    }
}

// accepts programID and array of objects
// objects should have weekNumber
async function updateProgramWithWeeks(programID, weeksBaseData) {
    try {
        const programInDatabase = await Program.find({ programID })
        let weeksInstances = weeksBaseData.map(createWeek)
        const weeksPromises = await Promise.all(weeksInstances)
        weeksPromises.forEach((promise) => {
            programInDatabase.weeks.push(promise)
            programInDatabase.save()
        })
    } catch (error) {
        console.log(`error updating program with ${weeksBaseData.length} weeks: ${error}`)
    }
}
export { createProgram, updateProgramWithWeeks }