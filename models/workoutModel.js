import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a workout name"],
        unique: [true, "Workout name must be unique"]
    },
    desc: {
        type: String,
        required: [true, "workout must have a short description"],
    },
    imgUrl: {
        type: String,
        required: [true, "Please input the path to image of this workout"],
    }
})

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;