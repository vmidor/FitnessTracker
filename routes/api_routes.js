const router = require("express").Router()
const Workout = require("../models/workout.js")

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(workouts => {
            res.json(workouts)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(5)
        .then(workouts => {
            res.json(workouts)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err)
        })
})

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err)
        })
})

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdandDelete(body.id).then(() => {
        res.json(true)
    })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router