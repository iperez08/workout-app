import mongoose from "mongoose"

const programSchema = new mongoose.schema({
    name: String,
    duration: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout"
    }],
    goal: String
})

export default Program