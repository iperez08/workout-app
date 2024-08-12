import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cycle"
        },
        pastPrograms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Cycle"
            }
        ],
        startGoal: {
            type: String
        },
        strengthGoal: {
            type: String
        },
        healthGoal: {
            type: String
        }
    }
)

const User = mongoose.model("User", userSchema)

export default User