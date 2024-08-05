import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
    {
        name: String,
        muscle: String,
        othermuscle: String,
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