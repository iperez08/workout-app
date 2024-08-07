import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
    {
        exerciseName: String,
        muscle: String,
        otherMuscles: [String],
        sets: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Set"
            }
        ],
        instructions: String,
        goal: String
    }
)

const Exercise = mongoose.model("Exercise", exerciseSchema)

export default Exercise