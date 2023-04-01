import Exercise from "../models/exerciseModel";
import catchAsync from "../utils/catchAsync";

export const createExercise = catchAsync(async(req, res, next)=>{
    const {name, desc, duration, restTime, imgUrl, focusArea, workoutCategory} = req.body
    const exercise = {
        name,
        desc,
        duration,
        restTime,
        imgUrl,
        focusArea,
        workoutCategory,
    }

    const newExercise = await Exercise.create(exercise)
})

export const getExercise = catchAsync(async(req, res, next)=>{
   const exercise = Exercise.findById(req.params.id)

    return next(
        res.status(201).json({
            status: "OK",
            data: exercise,
        })
    )
})

export const getAllExercises = catchAsync(async(req, res, next)=>{
    const exercises = Exercise.find()

    return next(
        res.status.json({
            status: "OK",
            data: exercises,
        })
    )
})