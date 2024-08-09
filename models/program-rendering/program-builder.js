import { createWeek } from "./week-builder.js";
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
        return newProgram._id
    } catch (error) {
        console.log(`error creating program: ${error}`)
    }
}

// accepts programID and a number
// objects should have weekNumber
async function updateProgramWithWeeks(programID, weeksCount) {
    try {
        const programInDatabase = await Program.findById(programID)
        let weeksPromises = []
        for (let i = 0; i < weeksCount; i++) {
            weeksPromises.push(createWeek(i + 1))
        }
        let weekIDs = await Promise.all(weeksPromises)
        weekIDs.forEach((weekID) => {
            programInDatabase.weeks.push(weekID._id)
        })
        programInDatabase.save()
        return weekIDs[0]._id
    } catch (error) {
        console.log(`error updating program with ${weeksBaseData.length} weeks: ${error}`)
    }
}
export { createProgram, updateProgramWithWeeks }