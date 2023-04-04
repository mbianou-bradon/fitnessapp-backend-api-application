import express from "express";
import { createExercise, getExercise, getAllExercises, deleteExercise, updateExercise } from "../controllers/exerciseController"

const router = express.Router()

// Get all exercises

router.get('/', getAllExercises)

// POST a single exercise

router.post('/', createExercise)

// Get a single exercise

router.get('/:exercise', getExercise)

// DELETE an exercise

router.delete('/:exercise', deleteExercise)

// UPDATE an exercise

router.patch('/:exercise', updateExercise)

export default router