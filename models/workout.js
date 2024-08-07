import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
    {
        workoutName: String,
        duration: {type: Number, default: 45},
        warmup: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exercise"
            }
        ],
        main: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exercise"
            },
        supplemental: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exercise"
            },
        accessories: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exercise"
            }
        ],
        goal: String
    }
)

const Workout = mongoose.model("Workout", workoutSchema)

export default Workout