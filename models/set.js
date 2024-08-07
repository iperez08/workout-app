import mongoose from "mongoose";

const setSchema = new mongoose.Schema(
    {
        weight: Number,
        reps: Number,
        rest: Number,
        tempo: {type: String, default: "normal"}
    }
)

const Set = mongoose.model("Set", setSchema)

export default Set