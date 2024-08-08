import mongoose from "mongoose";

const componentSchema = new mongoose.Schema(
    {
        componentName: String,
        exercises: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exercise"
            }
        ],
        setStructureValues: [
            {
                series: {
                    type: Number,
                    default: null
                },
            },
            {
                rounds: {
                    type: Array,
                    default: null
                }
            }
        ]
    }
)

const Component = mongoose.model("Component", componentSchema)

export default Component