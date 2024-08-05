import mongoose from "mongoose"

const programSchema = new mongoose.schema({
    name: String,
    duration: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout"
    }],
    goal: String
})

const Program = mongoose.model("Program", programSchema)

export default Program