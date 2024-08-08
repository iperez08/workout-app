import mongoose, { mongo } from "mongoose";

const cycleSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Program"
        },
        startDate: {
            type: Date,
            default: Date.now()
        },
        status: {
            type: String,
            default: "Not started"
        },
        trainingMax: [
            { deadliftTM: { type: Number, min: 0, default: 0 } },
            { benchPressTM: { type: Number, min: 0, default: 0 } },
            { squatTM: { type: Number, min: 0, default: 0 } },
            { overheadPressTM: { type: Number, min: 0, default: 0 } },
        ],
        weekAdjustments: [
            {
                weekID: { type: mongoose.Schema.Types.ObjectId, ref: "Week" },
                deleted: { type: Boolean, default: false },
                workoutAdjustments: [
                    {
                        workoutID: { type: mongoose.Schema.Types.ObjectId, ref: "Workout" },
                        deleted: { type: Boolean, default: false },
                        exerciseAdjustments: [
                            {
                                exerciseID: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise" },
                                deleted: { type: Boolean, default: false },
                                setAdjustments: [
                                    {
                                        setID: { type: mongoose.Schema.Types.ObjectId, ref: "Set" },
                                        deleted: { type: Boolean, default: false },
                                        weight: Number,
                                        reps: Number,
                                        rest: Number,
                                        tempo: String
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }

        ]
    }
)

const Cycle = mongoose.model("Cycle", cycleSchema)

export default Cycle