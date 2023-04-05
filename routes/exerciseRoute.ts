import express from "express";
import { createExercise, getExercise, getAllExercises, deleteExercise, updateExercise } from "../controllers/exerciseController"

const router = express.Router()

// Get all exercises

router.get('/', getAllExercises)

// POST a single exercise

router.post('/', createExercise)

// Get a single exercise

router.get('/:id', getExercise)

// DELETE an exercise

router.delete('/:id', deleteExercise)

// UPDATE an exercise

router.patch('/:id', updateExercise)

export default router