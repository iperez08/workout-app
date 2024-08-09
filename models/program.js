import mongoose from "mongoose"

const programSchema = new mongoose.Schema(
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
