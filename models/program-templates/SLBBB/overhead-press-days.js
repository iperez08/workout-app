const pressDayOne = {
    workoutName: "Bench Day",
    duration: 45,
    warmup: [
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        },
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        },
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        }
    ],
    main: {
        exerciseName: "Overhead Press",
        muscle: "Shoulders",
        otherMuscles: ["Triceps", "Upper Chest"],
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
            }
        ],
        instructions: "Stand with your feet shoulder-width apart. Hold the barbell at shoulder height with a grip slightly wider than shoulder-width. Press the bar overhead until your arms are straight, then lower back to the starting position.",
        goal: "Strengthen shoulder muscles and improve upper body power."
    },
    supplemental: {
        exerciseName: "Overhead Press",
        muscle: "Shoulders",
        otherMuscles: ["Triceps", "Upper Chest"],
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
        instructions: "Stand with your feet shoulder-width apart. Hold the barbell at shoulder height with a grip slightly wider than shoulder-width. Press the bar overhead until your arms are straight, then lower back to the starting position.",
        goal: "Strengthen shoulder muscles and improve upper body power."
    },
    accessories: [
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
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
            instructions: "Lower your body until your chest nearly touches the floor. Keep your body straight throughout.",
            goal: "Build upper body strength."
        },
        {
            exerciseName: "Dumbbell Curls",
            muscle: "Biceps",
            otherMuscles: [],
            sets: [
                {
                    weight: 20,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 20,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Curl the dumbbells up to shoulder level while keeping elbows close to your torso.",
            goal: "Strengthen biceps."
        },
        {
            exerciseName: "Hammer Curls",
            muscle: "Biceps",
            otherMuscles: [],
            sets: [
                {
                    weight: 15,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 15,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Hold dumbbells with your palms facing your torso and curl them up.",
            goal: "Develop arm strength and size."
        },
        {
            exerciseName: "Ab Wheel",
            muscle: "Abs",
            otherMuscles: ["Core"],
            sets: [
                {
                    weight: null,
                    reps: 8,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 8,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Roll the wheel forward and then back to the starting position, keeping your core engaged.",
            goal: "Strengthen and stabilize the core."
        },
    ],
    goal: "bench good"
}

const pressDayTwo = {
    workoutName: "Bench Day",
    duration: 45,
    warmup: [
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        },
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        },
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        }
    ],
    main: {
        exerciseName: "Overhead Press",
        muscle: "Shoulders",
        otherMuscles: ["Triceps", "Upper Chest"],
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
            }
        ],
        instructions: "Stand with your feet shoulder-width apart. Hold the barbell at shoulder height with a grip slightly wider than shoulder-width. Press the bar overhead until your arms are straight, then lower back to the starting position.",
        goal: "Strengthen shoulder muscles and improve upper body power."
    },
    supplemental: {
        exerciseName: "Overhead Press",
        muscle: "Shoulders",
        otherMuscles: ["Triceps", "Upper Chest"],
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
        instructions: "Stand with your feet shoulder-width apart. Hold the barbell at shoulder height with a grip slightly wider than shoulder-width. Press the bar overhead until your arms are straight, then lower back to the starting position.",
        goal: "Strengthen shoulder muscles and improve upper body power."
    },
    accessories: [
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
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
            instructions: "Lower your body until your chest nearly touches the floor. Keep your body straight throughout.",
            goal: "Build upper body strength."
        },
        {
            exerciseName: "Dumbbell Curls",
            muscle: "Biceps",
            otherMuscles: [],
            sets: [
                {
                    weight: 20,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 20,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Curl the dumbbells up to shoulder level while keeping elbows close to your torso.",
            goal: "Strengthen biceps."
        },
        {
            exerciseName: "Hammer Curls",
            muscle: "Biceps",
            otherMuscles: [],
            sets: [
                {
                    weight: 15,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 15,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Hold dumbbells with your palms facing your torso and curl them up.",
            goal: "Develop arm strength and size."
        },
        {
            exerciseName: "Ab Wheel",
            muscle: "Abs",
            otherMuscles: ["Core"],
            sets: [
                {
                    weight: null,
                    reps: 8,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 8,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Roll the wheel forward and then back to the starting position, keeping your core engaged.",
            goal: "Strengthen and stabilize the core."
        },
    ],
    goal: "bench good"
}

const pressDayThree = {
    workoutName: "Bench Day",
    duration: 45,
    warmup: [
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        },
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        },
        {
            exerciseName: "Side Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes", "Inner Thighs"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step to the side and lower your body by bending the knee of the stepping leg. Keep your back straight.",
            goal: "Build strength and flexibility in legs."
        },
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
            sets: [
                {
                    weight: null,
                    reps: 3,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Perform a push-up, pausing for 3 seconds at the bottom of the movement.",
            goal: "Increase muscle endurance and control."
        },
        {
            exerciseName: "Forward Lunge",
            muscle: "Legs",
            otherMuscles: ["Glutes"],
            sets: [
                {
                    weight: null,
                    reps: 4,
                    rest: 15,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Step forward and lower your hips until both knees are bent at about a 90-degree angle.",
            goal: "Enhance balance and strengthen legs."
        }
    ],
    main: {
        exerciseName: "Overhead Press",
        muscle: "Shoulders",
        otherMuscles: ["Triceps", "Upper Chest"],
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
            }
        ],
        instructions: "Stand with your feet shoulder-width apart. Hold the barbell at shoulder height with a grip slightly wider than shoulder-width. Press the bar overhead until your arms are straight, then lower back to the starting position.",
        goal: "Strengthen shoulder muscles and improve upper body power."
    },
    supplemental: {
        exerciseName: "Overhead Press",
        muscle: "Shoulders",
        otherMuscles: ["Triceps", "Upper Chest"],
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
        instructions: "Stand with your feet shoulder-width apart. Hold the barbell at shoulder height with a grip slightly wider than shoulder-width. Press the bar overhead until your arms are straight, then lower back to the starting position.",
        goal: "Strengthen shoulder muscles and improve upper body power."
    },
    accessories: [
        {
            exerciseName: "Push Ups",
            muscle: "Chest",
            otherMuscles: ["Triceps", "Shoulders"],
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
            instructions: "Lower your body until your chest nearly touches the floor. Keep your body straight throughout.",
            goal: "Build upper body strength."
        },
        {
            exerciseName: "Dumbbell Curls",
            muscle: "Biceps",
            otherMuscles: [],
            sets: [
                {
                    weight: 20,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 20,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Curl the dumbbells up to shoulder level while keeping elbows close to your torso.",
            goal: "Strengthen biceps."
        },
        {
            exerciseName: "Hammer Curls",
            muscle: "Biceps",
            otherMuscles: [],
            sets: [
                {
                    weight: 15,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: 15,
                    reps: 10,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Hold dumbbells with your palms facing your torso and curl them up.",
            goal: "Develop arm strength and size."
        },
        {
            exerciseName: "Ab Wheel",
            muscle: "Abs",
            otherMuscles: ["Core"],
            sets: [
                {
                    weight: null,
                    reps: 8,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                },
                {
                    weight: null,
                    reps: 8,
                    rest: 30,
                    tempo: { type: String, default: "normal" }
                }
            ],
            instructions: "Roll the wheel forward and then back to the starting position, keeping your core engaged.",
            goal: "Strengthen and stabilize the core."
        },
    ],
    goal: "bench good"
}

export {pressDayOne, pressDayTwo, pressDayThree}