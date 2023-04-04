import mongoose from "mongoose"
import Exercise from "../models/exerciseModel"
import { catchAsync } from "../utils/catchAsync"
import Workout from "../models/workoutModel"



// Create a new exercise and store in database
export const createWorkout = async(req, res, next)=>{
    const {name, desc, duration, restTime, imgUrl, focusArea, workoutCategory} = req.body
    const workout = {
        name,
        desc,
        duration,
        restTime,
        imgUrl,
        focusArea,
        workoutCategory,
    }

    const newWorkout = await Exercise.create(workout)
    
    return next(
        res.status(201).json({
            status: "OK",
            data: newWorkout
        })
    )
}


// Get a new exercise
export const getWorkout = async(req, res, next)=>{
    const { id } = req.params
    const workout = Workout.findById(id)

    if(!workout){
        return res.status(404).json({message: "Workout Doesn't exist"})
    }

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "Workout Doesn't exist"})
    }

    return next(
        res.status(201).json({
            status: "OK",
            data: workout,
        })
    )
};


//Get all the exercise
export const getAllWorkouts = async(req, res, next)=>{
    const workouts = await Workout.find().sort({createdAt: -1})

    res.status(200).json(workouts)
    
};



// Update an exercise
export const updateWorkout = async(req, res, next)=> {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Exercise doesn't exist"
            })
        )
    }
    

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Workout doesn't exist"
            })
        )
    }

    return next(
        res.status(200).json({
            status: "OK",
            data: workout
        })
    )
};

// Delete an exercise
export const deleteWorkout = async(req, res, next) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return next(
            res.status(404).json({
                status: "Not Found",
                message: "Workout doesn't exist"
            })
        )
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
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
            data: workout
        })
    )
};

