import express from "express";
import { createWorkout, getWorkout, getAllWorkouts, deleteWorkout, updateWorkout } from "../controllers/workoutController"

const router = express.Router()

// Get all workouts

router.get('/', getAllWorkouts)

// POST a single workout

router.post('/', createWorkout)

// Get a single workout

router.get('/:workout', getWorkout)

// DELETE an workout

router.delete('/:workout', deleteWorkout)

// UPDATE an workout

router.patch('/:workout', updateWorkout)

export default router