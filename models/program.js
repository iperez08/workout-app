import mongoose from "mongoose"

const programSchema = new mongoose.schema(
    {
        name: String,
        weeks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Week"
        }],
        goal: String
    }
)

const Program = mongoose.model("Program", programSchema)

export default Program