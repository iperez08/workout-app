import createProgram from "../program-rendering/program-builder"
import Cycle from "../cycle.js"

async function createCycle(cycleData) {
    const {
        user,
        program
    } = cycleData
    try {
        const newCycle = await Cycle.create({ user, program })
    } catch (error) {
        console.log(`error creating cycle: ${error}`)
    }
}

export default createCycle