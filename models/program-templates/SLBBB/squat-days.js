const squatDayOne = {
    workoutName: "Squat Day",
    duration: 45,
    warmup: [
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        },
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        },
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        }
    ],
    main: {
        exerciseName: "Barbell Squat",
        muscle: "Quads",
        otherMuscles: ["core", "lower back"],
        sets: [
            {
                weight: 65,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 75,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 85,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
        ],
        instructions: "Squat correctly",
        goal: "goal goes here"
    },
    supplemental: {
        exerciseName: "Barbell Squat",
        muscle: "Quads",
        otherMuscles: ["core", "lower back"],
        sets: [
            {
                weight: 50,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 60,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 70,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            }
        ],
        instructions: "Squat correctly",
        goal: "goal goes here"
    },
    accessories: [
        {
            exerciseName: "Tricep Extension",
            muscle: "Triceps",
            otherMuscles: ["deltoids"],
            sets: [
                {
                    weight: 30,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 30,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        },
        {
            exerciseName: "inverted rows",
            muscle: "upper back",
            otherMuscles: ["biceps", "core"],
            sets: [
                {
                    weight: null,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        },
        {
            exerciseName: "hanging leg raise",
            muscle: "core",
            otherMuscles: ["hip flexors"],
            sets: [
                {
                    weight: null,
                    reps: 8,
                    rest: 45,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 8,
                    rest: 45,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        }
    ],
    goal: "squat good"
}

const squatDayTwo = {
    workoutName: "Squat Day",
    duration: 45,
    warmup: [
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        },
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        },
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        }
    ],
    main: {
        exerciseName: "Barbell Squat",
        muscle: "Quads",
        otherMuscles: ["core", "lower back"],
        sets: [
            {
                weight: 70,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 80,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 90,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
        ],
        instructions: "Squat correctly",
        goal: "goal goes here"
    },
    supplemental: {
        exerciseName: "Barbell Squat",
        muscle: "Quads",
        otherMuscles: ["core", "lower back"],
        sets: [
            {
                weight: 50,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 60,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 70,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            }
        ],
        instructions: "Squat correctly",
        goal: "goal goes here"
    },
    accessories: [
        {
            exerciseName: "Tricep Extension",
            muscle: "Triceps",
            otherMuscles: ["deltoids"],
            sets: [
                {
                    weight: 30,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 30,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        },
        {
            exerciseName: "inverted rows",
            muscle: "upper back",
            otherMuscles: ["biceps", "core"],
            sets: [
                {
                    weight: null,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        },
        {
            exerciseName: "hanging leg raise",
            muscle: "core",
            otherMuscles: ["hip flexors"],
            sets: [
                {
                    weight: null,
                    reps: 8,
                    rest: 45,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 8,
                    rest: 45,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        }
    ],
    goal: "squat good"
}

const squatDayThree = {
    workoutName: "Squat Day",
    duration: 45,
    warmup: [
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        },
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        },
        {
            exerciseName: "Cossack Squat",
            muscle: null,
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "Deep squat",
            goal: "Increase mobility"
        },
        {
            exerciseName: "Ab wheel",
            muscle: "abdominals",
            otherMuscles: null,
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: "slow"
                }
            ],
            instructions: "roll forward and back with knees firmly on the ground",
            goal: "warm up"
        },
        {
            exerciseName: "bulgarian one-leg squat",
            muscle: "quads",
            otherMuscles: ["glutes"],
            sets: [
                {
                    weight: null,
                    reps: 5,
                    rest: 15,
                    tempo: "slow and pause"
                }
            ],
            instructions: "each rep is per leg. squat slowly, pause at the bottom, and return to start",
            goal: "warm up"
        }
    ],
    main: {
        exerciseName: "Barbell Squat",
        muscle: "Quads",
        otherMuscles: ["core", "lower back"],
        sets: [
            {
                weight: 75,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 85,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 95,
                reps: 5,
                rest: 60,
                tempo: { type: String, default: "normal" }
            },
        ],
        instructions: "Squat correctly",
        goal: "goal goes here"
    },
    supplemental: {
        exerciseName: "Barbell Squat",
        muscle: "Quads",
        otherMuscles: ["core", "lower back"],
        sets: [
            {
                weight: 50,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 60,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            },
            {
                weight: 70,
                reps: 10,
                rest: 90,
                tempo: { type: String, default: "normal" }
            }
        ],
        instructions: "Squat correctly",
        goal: "goal goes here"
    },
    accessories: [
        {
            exerciseName: "Tricep Extension",
            muscle: "Triceps",
            otherMuscles: ["deltoids"],
            sets: [
                {
                    weight: 30,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 30,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        },
        {
            exerciseName: "inverted rows",
            muscle: "upper back",
            otherMuscles: ["biceps", "core"],
            sets: [
                {
                    weight: null,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 12,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        },
        {
            exerciseName: "hanging leg raise",
            muscle: "core",
            otherMuscles: ["hip flexors"],
            sets: [
                {
                    weight: null,
                    reps: 8,
                    rest: 45,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 8,
                    rest: 45,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "instructions",
            goal: "goal"
        }
    ],
    goal: "squat good"
}

export {squatDayOne, squatDayTwo, squatDayThree}