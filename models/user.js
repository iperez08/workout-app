import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
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
    pastPrograms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cycle"
    }]
})

export default User