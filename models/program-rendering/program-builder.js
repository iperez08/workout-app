import createWeek from "./week-builder";
import Program from "../program.js"

async function createProgram(programData) {
    const {
        programName,
        goal,
        // weeksData must include weekNumber
        weeksData
    } = programData
    try {
        const newProgram = await Program.create({ programName, goal })
        let weeksInstances = weeksData.map(createWeek)
        const weeksPromises = await Promise.all(weeksInstances)
        weeksPromises.forEach((promise) => {
            newProgram.weeks.push(promise)
            newProgram.save()
        })
        return newProgram
    } catch (error) {
        console.log(`error creating program: ${error}`)
    }
}

export default createProgram