import mongoose from "mongoose"
import Exercise from "../models/exerciseModel"
import { catchAsync } from "../utils/catchAsync"



// Create a new exercise and store in database
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
    
    return next(
        res.status(201).json({
            status: "OK",
            data: newExercise
        })
    )
})


// Get a new exercise
export const getExercise = catchAsync(async(req, res, next)=>{
    const { id } = req.params
    const exercise = Exercise.findById(id)

    if(!exercise){
        return res.status(404).json({message: "Exercise Doesn't exist"})
    }

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "Exercise Doesn't exist"})
    }

    return next(
        res.status(201).json({
            status: "OK",
            data: exercise,
        })
    )
})


//Get all the exercise
export const getAllExercises = async(req, res, next)=>{
    const exercises = await Exercise.find({}).sort({createdAt: -1})

    
    res.status(200).json(exercises)
    
}



// Update an exercise
export const updateExercise = catchAsync(async(req, res, next)=> {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Exercise doesn't exist"
            })
        )
    }
    

    const exercise = await Exercise.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!exercise){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Exercise doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: exercise
        })
    )
})

// Delete an exercise
export const deleteExercise = catchAsync(async(req, res, next) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Exercise doesn't exist"
            })
        )
    }

    const exercise = await Exercise.findOneAndDelete({_id: id})

    if(!exercise){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Exercise doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: exercise
        })
    )
});

