const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => Date.now()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise",
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the exercise"
                },

                duration: {
                    type: Number,
                    default: 0,
                    allowNull: true,
                    required: "Enter the duration of the exercise in minutes"
                },

                weight: {
                    type: Number,
                    default: 0,
                    allowNull: true,
                },

                reps: {
                    type: Number,
                    default: 0,
                    allowNull: true,
                },

                sets: {
                    type: Number,
                    default: 0,
                    allowNull: true,
                },
                distance: {
                    type: Number,
                    default: 0,
                    allowNull: true,
                }
            }
        ]

    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)
})

const workout = mongoose.model("workouts", workoutSchema)

module.exports = workout

