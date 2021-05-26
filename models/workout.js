const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
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
                    required: "Enter the duration of the exercise in minutes"
                },

                weight: {
                    type: Number,
                },

                reps: {
                    type: Number
                },

                sets: {
                    type: Number
                },

                distance: {
                    type: Number
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

const workout = mongoose.model("models", workoutSchema)

module.exports = workout

