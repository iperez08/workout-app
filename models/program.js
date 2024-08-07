import mongoose from "mongoose"
import Set from "./set.js"
import Exercise from "./exercise.js"
import Workout from "./workout.js"
import Week from "./week.js"


const programSchema = new mongoose.schema(
    {
        programName: String,
        weeks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Week"
        }],
        goal: String
    }
)

const Program = mongoose.model("Program", programSchema)

export default Program
