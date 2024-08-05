import mongoose from "mongoose";

const weekSchema = new mongoose.Schema(
    {
        number: Number,
        workouts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Workout"
            }
        ],
        goal: String
    }
)