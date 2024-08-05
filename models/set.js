import mongoose from "mongoose";

const setSchema = new mongoose.Schema(
    {
        weight: Number,
        reps: Number,
        rest: Number,
        tempo: String
    }
)

const Set = mongoose.model("Set", setSchema)

export default Set