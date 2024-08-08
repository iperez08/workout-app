import mongoose from "mongoose";

const componentSchema = new mongoose.Schema(
    {
        componentName: String,
        setStructure: String,
        exercises: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exercise"
            }
        ],
    }
)

const Component = mongoose.model("Component", componentSchema)

export default Component