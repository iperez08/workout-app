import mongoose, { mongo } from "mongoose";

const weekSchema = new mongoose.Schema(
    {
        weekNumber: Number,
        workouts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Workout"
            }
        ]
    }
)

const Week = mongoose.model("Week", weekSchema)

export default Week